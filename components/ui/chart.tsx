"use client"

import * as React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer as RechartsChartContainer, type ChartContainerProps } from "@tremor/react"

import {
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

// Define a type for the chart components
type ChartComponent = typeof LineChart | typeof BarChart | typeof AreaChart | typeof PieChart | typeof RadialBarChart

// Define a type for the chart elements
type ChartElement =
  | typeof Line
  | typeof Bar
  | typeof Area
  | typeof Pie
  | typeof RadialBar
  | typeof XAxis
  | typeof YAxis
  | typeof CartesianGrid

type ChartProps = React.ComponentProps<typeof RechartsChartContainer> & {
  config: ChartConfig
  children: React.ReactNode
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(({ className, ...props }, ref) => (
  <RechartsChartContainer ref={ref} className={className} {...props} />
))
ChartContainer.displayName = "ChartContainer"

const Chart = ({ config, children, className, ...props }: ChartProps) => {
  const chartProps = React.useMemo(() => {
    const chartConfig = config
    return Object.entries(chartConfig).reduce(
      (acc, [key, value]) => {
        const [chartElement, property] = key.split(".")
        if (chartElement === "label") {
          return acc
        }
        return {
          ...acc,
          [chartElement]: {
            ...(acc[chartElement] ?? {}),
            ...(property ? { [property]: value } : value),
          },
        }
      },
      {} as Record<string, any>,
    )
  }, [config])

  if (!Object.keys(config).length) {
    return null
  }

  return (
    <ChartContext.Provider value={{ config, chartProps }}>
      <ChartContainer className={cn("min-h-[200px] w-full", className)} {...props}>
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </ChartContainer>
    </ChartContext.Provider>
  )
}

// Context for chart configuration
const ChartContext = React.createContext<{
  config: ChartConfig
  chartProps: Record<string, any>
} | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <Chart />")
  }
  return context
}

export {
  Chart,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  ResponsiveContainer,
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  useChart,
}
