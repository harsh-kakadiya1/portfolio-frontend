"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { TextPressure } from "@/components/ui/interactive-text-pressure"

function getTextColor(theme: string | undefined) {
  return theme === "dark" ? "#ffffff" : "#111111"
}

function getStrokeColor(theme: string | undefined) {
  return theme === "dark" ? "#00d4aa" : "#0066ff"
}

interface HeroTextPressureProps {
  className?: string;
}

export function HeroTextPressure({ className = "" }: HeroTextPressureProps) {
  const { theme } = useTheme()
  
  return (
    <div className={`w-full h-64 md:h-80 lg:h-96 ${className}`}>
      <TextPressure
        text="Harsh  Kakadiya"
        flex={false}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor={getTextColor(theme)}
        strokeColor={getStrokeColor(theme)}
        minFontSize={48}
        className="cursor-default"
      />
    </div>
  )
}
