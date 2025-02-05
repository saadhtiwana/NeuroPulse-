"use client"
import { motion } from "framer-motion"
import { NeuralActivity } from "./NeuralActivity"
import { SecurityMetrics } from "./SecurityMetrics"
import { theme } from "@/app/theme"

export function NeuroPulseDashboard() {
  return (
    <div className="min-h-screen p-6" style={{ background: theme.colors.background }}>
      {/* Header */}
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl font-bold" style={{ color: theme.colors.primary }}>
              NeuroPulse
            </h1>
            <p className="text-sm opacity-70" style={{ color: theme.colors.text.primary }}>
              Neural Network Monitoring System
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-4 py-2 rounded-full text-sm"
            style={{
              backgroundColor: `${theme.colors.primary}20`,
              color: theme.colors.primary,
              boxShadow: theme.colors.neon.green,
            }}
          >
            Created by Saad Tiwana
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid gap-6">
        <SecurityMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NeuralActivity />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg bg-black/30 backdrop-blur-md p-6 border border-[#ff00ff]/20"
            style={{ boxShadow: theme.colors.neon.pink }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.secondary }}>
              System Console
            </h2>
            <div className="font-mono text-sm space-y-2">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex gap-2">
                    <span style={{ color: theme.colors.secondary }}>{">"}</span>
                    <span className="opacity-70" style={{ color: theme.colors.text.primary }}>
                      {`Analyzing neural pattern ${Math.random().toString(36).substring(7)}`}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

