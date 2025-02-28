"use client"

import { useEffect, useState } from "react"

export default function ClientParticleBackground() {
  const [particles, setParticles] = useState<Array<{ top: string; left: string; animation: string }>>([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `float ${Math.random() * 10 + 5}s linear infinite`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
          style={{
            top: particle.top,
            left: particle.left,
            animation: particle.animation,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  )
} 