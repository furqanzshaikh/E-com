"use client"

import React, { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const TimeUnitBox = ({ value, label }) => {
  return (
    <div className="bg-white text-black rounded-xl p-3 sm:p-2 w-16 h-16  lg:w-34 lg:h-24 flex flex-col items-center justify-center">
      <span className="text-xl sm:text-2xl font-bold">{value}</span>
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
  )
}

const TimerSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="md:px-8 px-2 mb-8"> {/* Added wrapper with horizontal padding */}
      <div
        className="relative w-full rounded-xl text-white mt-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/timerimg.jpg')" }}
      >
        <div className="relative z-10 py-10 sm:px-10 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-brightness-50 rounded-xl">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Best Deals
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Top value-for-money laptops at <br className="hidden sm:block" /> unbeatable prices.
            </p>
            <button className="inline-flex items-center text-white hover:underline font-medium">
              Shop Now <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
            <TimeUnitBox value={timeLeft.days} label="Days" />
            <TimeUnitBox value={timeLeft.hours} label="Hours" />
            <TimeUnitBox value={timeLeft.minutes} label="Minutes" />
            <TimeUnitBox value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerSection
