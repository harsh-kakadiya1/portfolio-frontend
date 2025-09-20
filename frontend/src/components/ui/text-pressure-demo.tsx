"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { TextPressure } from "@/components/ui/interactive-text-pressure"

function getTextColor(theme: string | undefined) {
  // Можно задать любые цвета для light/dark
  return theme === "dark" ? "#ffffff" : "#111111"
}

function getStrokeColor(theme: string | undefined) {
  // Пример: красный для dark, синий для light
  return theme === "dark" ? "#ff0000" : "#0066ff"
}

export function Default() {
  const { theme } = useTheme()
  return (
    <TextPressure
      text="Hello!"
      flex={false}
      alpha={false}
      stroke={false}
      width={true}
      weight={true}
      italic={true}
      textColor={getTextColor(theme)}
      strokeColor={getStrokeColor(theme)}
      minFontSize={36}
      className="cursor-default"
    />
  )
}

export function Flex() {
  const { theme } = useTheme()
  return (
    <TextPressure
      text="Hello!"
      flex={true}
      alpha={false}
      stroke={false}
      width={true}
      weight={true}
      italic={true}
      textColor={getTextColor(theme)}
      strokeColor={getStrokeColor(theme)}
      minFontSize={36}
      className="cursor-default"
    />
  )
}

export function Alpha() {
  const { theme } = useTheme()
  return (
    <TextPressure
      text="Hello!"
      flex={true}
      alpha={true}
      stroke={false}
      width={true}
      weight={true}
      italic={true}
      textColor={getTextColor(theme)}
      strokeColor={getStrokeColor(theme)}
      minFontSize={36}
      className="cursor-default"
    />
  )
}

export function Stroke() {
  const { theme } = useTheme()
  return (
    <TextPressure
      text="Hello!"
      flex={true}
      alpha={false}
      stroke={true}
      width={true}
      weight={true}
      italic={true}
      textColor={getTextColor(theme)}
      strokeColor={getStrokeColor(theme)}
      minFontSize={36}
      className="cursor-default"
    />
  )
}

export { Default, Flex, Alpha, Stroke }
