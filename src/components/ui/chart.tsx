"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"

/* =========================
   Temi -> selector per CSS
   ========================= */
const THEMES = { light: "", dark: ".dark" } as const
type ThemeKey = keyof typeof THEMES

/* =========================
   Config serie/chiavi
   ========================= */
type ItemBase = {
  label?: React.ReactNode
  icon?: React.ComponentType<any>
}
type ItemWithColor = ItemBase & { color: string; theme?: never }
type ItemWithTheme = ItemBase & { theme: Record<ThemeKey, string>; color?: never }
export type ChartConfig = Record<string, ItemWithColor | ItemWithTheme>

/* =========================
   Context
   ========================= */
type ChartContextProps = { config: ChartConfig }
const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error("useChart must be used within a <ChartContainer />")
  return ctx
}

/* =========================
   Container
   ========================= */
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          // utilità di stile comuni ai grafici
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
          "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-radial-bar-background-sector]:fill-muted",
          "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
          "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-layer]:outline-hidden",
          "[&_.recharts-sector]:outline-hidden",
          "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-surface]:outline-hidden",
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

/* =========================
   CSS vars generator
   ========================= */
function isThemeConfig(x: ItemWithColor | ItemWithTheme): x is ItemWithTheme {
  return typeof (x as any)?.theme === "object" && !!(x as any).theme
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorEntries = Object.entries(config).filter(([, v]) => isThemeConfig(v) || "color" in v)
  if (!colorEntries.length) return null

  const css = Object.entries(THEMES)
    .map(([themeKey, prefix]) => {
      const lines = colorEntries
        .map(([key, item]) => {
          const color = isThemeConfig(item) ? item.theme[themeKey as ThemeKey] : item.color
          return color ? `  --color-${key}: ${color};` : null
        })
        .filter(Boolean)
        .join("\n")
      return `${prefix} [data-chart=${id}] {\n${lines}\n}`
    })
    .join("\n")

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

/* =========================
   Re-export primitives
   ========================= */
const ChartTooltip = RechartsPrimitive.Tooltip
const ChartLegend = RechartsPrimitive.Legend

/* =========================
   Tipi minimi per Tooltip/Legend
   ========================= */
type TooltipItem = {
  color?: string
  name?: string
  value?: number | string
  dataKey?: string | number
  payload?: Record<string, unknown>
  fill?: string
}
type LegendItem = {
  value?: React.ReactNode
  dataKey?: string
  color?: string
}

/* =========================
   Tooltip Content
   ========================= */
type ChartTooltipContentProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean
  payload?: TooltipItem[]
  label?: any
  indicator?: "line" | "dot" | "dashed"
  hideLabel?: boolean
  hideIndicator?: boolean
  labelFormatter?: (value: any, payload?: TooltipItem[]) => React.ReactNode
  formatter?: (
    value: number | string,
    name: string,
    item: TooltipItem,
    index: number,
    rawPayload?: TooltipItem["payload"]
  ) => React.ReactNode
  color?: string
  nameKey?: string
  labelKey?: string
}

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
  ...rest
}: ChartTooltipContentProps & { labelClassName?: string }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) return null
    const [item] = payload
    const key = String(labelKey || item?.dataKey || item?.name || "value")
    const itemCfg = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? (config[label as keyof typeof config]?.label ?? label)
        : itemCfg?.label

    if (labelFormatter) {
      return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
    }
    return value ? <div className={cn("font-medium", labelClassName)}>{value}</div> : null
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

  if (!active || !payload?.length) return null
  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
      {...rest}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = String(nameKey || item.name || item.dataKey || "value")
          const itemCfg = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload?.fill || item.color || "currentColor"

          return (
            <div
              key={String(item.dataKey ?? item.name ?? index)}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemCfg?.icon ? (
                    <itemCfg.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}

                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">{itemCfg?.label || item.name}</span>
                    </div>
                    {item.value !== undefined && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {Number(item.value).toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* =========================
   Legend Content
   ========================= */
type ChartLegendContentProps = React.HTMLAttributes<HTMLDivElement> & {
  payload?: LegendItem[]
  verticalAlign?: "top" | "middle" | "bottom"
  hideIcon?: boolean
  nameKey?: string
}

function ChartLegendContent({
  className,
  hideIcon = false,
  payload = [],
  verticalAlign = "bottom",
  nameKey,
  ...rest
}: ChartLegendContentProps) {
  const { config } = useChart()
  if (!payload.length) return null

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
      {...rest}
    >
      {payload.map((item, i) => {
        const k = String(nameKey || item.dataKey || "value")
        const itemCfg = getPayloadConfigFromPayload(config, item as any, k)

        return (
          <div
            key={String(item.value ?? item.dataKey ?? i)}
            className="[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          >
            {itemCfg?.icon && !hideIcon ? (
              <itemCfg.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color ?? "currentColor" }}
              />
            )}
            {itemCfg?.label ?? item.value}
          </div>
        )
      })}
    </div>
  )
}

/* =========================
   Helper
   ========================= */
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) return undefined

  const p: any = payload
  const pp: any = p?.payload

  let configKey = key
  if (p && typeof p[key] === "string") configKey = p[key]
  else if (pp && typeof pp[key] === "string") configKey = pp[key]

  return (config as any)[configKey] ?? (config as any)[key]
}

/* =========================
   Exports
   ========================= */
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
