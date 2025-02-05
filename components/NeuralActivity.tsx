"use client"

import React from "react"
import { motion } from "framer-motion"
import { theme } from "@/app/theme"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export function NeuralActivity() {
  const [data, setData] = React.useState(
    Array(20)
      .fill(0)
      .map(() => Math.random() * 100),
  )

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [...prev.slice(1), Math.random() * 100])
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg bg-black/30 backdrop-blur-md p-6 border border-[#00ff9d]/20"
      style={{ boxShadow: theme.colors.neon.green }}
    >
      <h2 className="text-2xl font-bold mb-4 text-[#00ff9d]">Neural Activity</h2>
      <Chart
        options={{
          chart: {
            type: "area",
            background: "transparent",
            animations: {
              enabled: true,
              easing: "linear",
              speed: 500,
            },
            toolbar: { show: false },
          },
          grid: {
            borderColor: "#00ff9d20",
            strokeDashArray: 5,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.3,
              stops: [0, 90, 100],
              colorStops: [
                {
                  offset: 0,
                  color: "#00ff9d",
                  opacity: 0.4,
                },
                {
                  offset: 100,
                  color: "#00ff9d",
                  opacity: 0,
                },
              ],
            },
          },
          colors: ["#00ff9d"],
          xaxis: {
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
          },
          yaxis: {
            labels: {
              style: { colors: "#00ff9d80" },
            },
          },
          tooltip: {
            theme: "dark",
          },
        }}
        series={[{ name: "Activity", data }]}
        type="area"
        height={250}
      />
    </motion.div>
  )
}

