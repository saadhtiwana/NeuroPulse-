"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, AlertTriangle, Check } from "lucide-react"
import { theme } from "@/app/theme"

interface MetricProps {
  label: string
  value: number
  icon: React.ReactNode
  color: string
}

function Metric({ label, value, icon, color }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-4 p-4 rounded-lg bg-black/30 backdrop-blur-md border border-opacity-20"
      style={{ borderColor: color }}
    >
      <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
        {icon}
      </div>
      <div>
        <p className="text-sm opacity-70">{label}</p>
        <p className="text-2xl font-bold" style={{ color }}>
          {value}%
        </p>
      </div>
    </motion.div>
  )
}

export function SecurityMetrics() {
  const [metrics, setMetrics] = React.useState({
    system: 98,
    threats: 2,
    protection: 99,
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        system: Math.min(100, Math.max(90, prev.system + (Math.random() - 0.5) * 2)),
        threats: Math.min(10, Math.max(0, prev.threats + (Math.random() - 0.5))),
        protection: Math.min(100, Math.max(95, prev.protection + (Math.random() - 0.5))),
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Metric
        label="System Integrity"
        value={Math.round(metrics.system)}
        icon={<Shield className="w-6 h-6" style={{ color: theme.colors.primary }} />}
        color={theme.colors.primary}
      />
      <Metric
        label="Threat Level"
        value={Math.round(metrics.threats)}
        icon={<AlertTriangle className="w-6 h-6" style={{ color: theme.colors.secondary }} />}
        color={theme.colors.secondary}
      />
      <Metric
        label="Protection Rate"
        value={Math.round(metrics.protection)}
        icon={<Check className="w-6 h-6" style={{ color: theme.colors.accent }} />}
        color={theme.colors.accent}
      />
    </div>
  )
}

