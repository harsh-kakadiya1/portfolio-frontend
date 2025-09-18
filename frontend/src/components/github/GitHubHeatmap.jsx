import React, { useState, useEffect, useRef } from 'react';

export default function GitHubHeatmap({ username = 'harsh-kakadiya1' }) {
  const [heatmapData, setHeatmapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchGitHubContributions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using GitHub's GraphQL API through a public endpoint
        const query = `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `;

        const headers = {
          'Content-Type': 'application/json',
        };

        // Only add authorization if token is available
        const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
        if (githubToken) {
          headers['Authorization'] = `Bearer ${githubToken}`;
        }

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers,
          body: JSON.stringify({
            query,
            variables: { username }
          })
        });

        if (!response.ok) {
          throw new Error('GitHub API request failed');
        }

        const data = await response.json();
        
        if (data.errors) {
          throw new Error('GitHub API returned errors');
        }

        // Process the contribution data - get full year
        const weeks = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
        setHeatmapData(weeks);

      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        
        // Fallback to scraping approach or alternative API
        try {
          const fallbackResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
          
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            
            // Convert fallback data to weeks format
            const contributionsByDate = {};
            fallbackData.contributions?.forEach(day => {
              contributionsByDate[day.date] = day.count;
            });

            // Generate weeks for the full year
            const today = new Date();
            const oneYearAgo = new Date(today);
            oneYearAgo.setFullYear(today.getFullYear() - 1);
            
            const weeks = [];
            let currentDate = new Date(oneYearAgo);
            
            // Start from the first Sunday of the year
            while (currentDate.getDay() !== 0) {
              currentDate.setDate(currentDate.getDate() - 1);
            }
            
            while (currentDate <= today) {
              const week = { contributionDays: [] };
              
              for (let i = 0; i < 7; i++) {
                const dateStr = currentDate.toISOString().split('T')[0];
                week.contributionDays.push({
                  date: dateStr,
                  contributionCount: contributionsByDate[dateStr] || 0
                });
                currentDate.setDate(currentDate.getDate() + 1);
              }
              
              weeks.push(week);
            }
            
            setHeatmapData(weeks);
            return;
          }
          
          // If we get here, both methods failed
          setError('Could not load GitHub contributions. Please try again later.');
          
        } catch (fallbackErr) {
          console.error('Fallback API also failed:', fallbackErr);
          setError('Could not load GitHub contributions. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubContributions();
  }, [username]);

  // Auto-scroll to show latest commits when data loads
  useEffect(() => {
    if (heatmapData.length > 0 && scrollContainerRef.current) {
      // Scroll to the right to show latest commits
      const container = scrollContainerRef.current;
      container.scrollLeft = container.scrollWidth - container.clientWidth;
    }
  }, [heatmapData]);

  // Get color based on contribution count
  const getColor = (count) => {
    if (count === 0) return 'bg-gray-800';
    if (count < 3) return 'bg-cyan-500/30';
    if (count < 8) return 'bg-cyan-500/60';
    if (count < 12) return 'bg-cyan-500/80';
    return 'bg-cyan-500';
  };

  // Get month labels for the year - fixed to prevent duplicates
  const getMonthLabels = () => {
    if (!heatmapData || !Array.isArray(heatmapData) || heatmapData.length === 0) {
      return [];
    }
    
    const monthLabels = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let lastMonth = -1;
    
    try {
      heatmapData.forEach((week, weekIndex) => {
        // Add comprehensive null checks for week structure
        if (!week || !week.contributionDays || !Array.isArray(week.contributionDays) || week.contributionDays.length === 0) {
          return;
        }
        
        const firstDay = week.contributionDays[0];
        
        if (!firstDay || !firstDay.date) {
          return;
        }
        
        const firstDate = new Date(firstDay.date);
        const currentMonth = firstDate.getMonth();
        
        // Only add month label if it's different from the last one and it's the first week of the month
        if (currentMonth !== lastMonth && firstDate.getDate() <= 7) {
          monthLabels.push({
            month: months[currentMonth],
            weekIndex: weekIndex
          });
          lastMonth = currentMonth;
        }
      });
    } catch (error) {
      console.error('Error generating month labels:', error);
      return [];
    }
    
    return monthLabels;
  };

  if (loading) {
    return (
      <div className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">GitHub Contributions</h3>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400"></div>
          <span className="ml-3 text-gray-400">Loading contribution data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">GitHub Contributions</h3>
        <div className="text-center text-red-400 p-4 bg-red-900/20 rounded-lg">
          <p>{error}</p>
          <div className="mt-2">
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }

  const monthLabels = getMonthLabels();

  // If no data is available, show a fallback message
  if (!heatmapData || !Array.isArray(heatmapData) || heatmapData.length === 0) {
    return (
      <div className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">GitHub Contributions</h3>
        <div className="text-center text-gray-400 p-4">
          <p>No contribution data available</p>
          <div className="mt-2">
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-8 mb-8 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">GitHub Contributions</h3>
      
      <div className="flex items-start justify-center">
        {/* Weekday labels */}
        <div className="flex flex-col mr-3 text-sm text-gray-400 space-y-1 mt-8">
          <div className="h-4"></div> {/* Empty space for Sunday */}
          <div className="h-4 flex items-center justify-end pr-2 text-xs">Mon</div>
          <div className="h-4"></div> {/* Empty space for Tuesday */}
          <div className="h-4 flex items-center justify-end pr-2 text-xs">Wed</div>
          <div className="h-4"></div> {/* Empty space for Thursday */}
          <div className="h-4 flex items-center justify-end pr-2 text-xs">Fri</div>
          <div className="h-4"></div> {/* Empty space for Saturday */}
        </div>
        
        <div className="flex-1 max-w-4xl overflow-x-auto" ref={scrollContainerRef}>
          {/* Month labels */}
          <div className="flex mb-2 text-sm text-gray-400 h-6 relative">
            {monthLabels.map((label, index) => (
              <div 
                key={`${label.month}-${index}`}
                className="absolute text-xs font-medium"
                style={{ left: `${(label.weekIndex * 16)}px` }}
              >
                {label.month}
              </div>
            ))}
          </div>
          
          {/* Heatmap grid */}
          <div className="flex gap-1 justify-center">
            {heatmapData.map((week, weekIndex) => {
              if (!week || !week.contributionDays || !Array.isArray(week.contributionDays)) {
                return null;
              }
              
              return (
                <div key={`week-${weekIndex}`} className="flex flex-col gap-1">
                  {week.contributionDays.map((day, dayIndex) => {
                    if (!day || !day.date) {
                      return (
                        <div 
                          key={`day-${weekIndex}-${dayIndex}`}
                          className="w-4 h-4 rounded-sm bg-gray-800"
                        />
                      );
                    }
                    
                    const date = new Date(day.date);
                    const isToday = new Date().toDateString() === date.toDateString();
                    const count = day.contributionCount || 0;
                    
                    return (
                      <div 
                        key={`day-${day.date}`}
                        className={`w-4 h-4 rounded-sm ${getColor(count)} ${isToday ? 'ring-2 ring-cyan-400' : ''} transition-all hover:ring-2 hover:ring-gray-400 hover:scale-110 cursor-pointer`}
                        title={`${count} ${count === 1 ? 'contribution' : 'contributions'} on ${date.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}`}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-between mt-6 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <span className="text-xs">Learn how we count contributions</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs">Less</span>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-500/30 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-500/60 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-500/80 rounded-sm"></div>
                <div className="w-4 h-4 bg-cyan-500 rounded-sm"></div>
              </div>
              <span className="text-xs">More</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-base inline-flex items-center justify-center transition-colors"
            >
              View full GitHub profile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
