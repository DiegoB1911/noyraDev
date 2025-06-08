"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, Users, Zap, Globe, Lock, TrendingUp, ChevronRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Shield,
    title: "Multi-signature Security",
    description: "Advanced cryptographic security with customizable approval thresholds for team transactions.",
    benefits: ["Military-grade encryption", "Customizable thresholds"],
    color: "from-blue-500 to-indigo-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    glowColor: "shadow-blue-500/25",
  },
  {
    icon: Users,
    title: "DAO Governance",
    description: "Built-in proposal system and voting mechanisms for decentralized decision making.",
    benefits: ["Transparent voting", "Proposal management"],
    color: "from-purple-500 to-indigo-600",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
    glowColor: "shadow-purple-500/25",
  },
  {
    icon: Zap,
    title: "DeFi Integration",
    description: "Seamless access to Stellar DEX, Blend protocol, and yield farming opportunities.",
    benefits: ["One-click swaps", "Liquidity provision"],
    color: "from-amber-500 to-orange-600",
    textColor: "text-amber-600",
    bgColor: "bg-amber-50",
    glowColor: "shadow-amber-500/25",
  },
  {
    icon: Globe,
    title: "Cross-chain Bridge",
    description: "Connect Stellar with Ethereum, Solana, and other major blockchain networks.",
    benefits: ["Trustless transfers", "Multi-chain support"],
    color: "from-emerald-500 to-green-600",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    glowColor: "shadow-emerald-500/25",
  },
  {
    icon: Lock,
    title: "Hardware Wallet Support",
    description: "Compatible with Ledger and other hardware wallets for maximum security.",
    benefits: ["Cold storage integration", "Transaction signing"],
    color: "from-cyan-500 to-blue-600",
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
    glowColor: "shadow-cyan-500/25",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Comprehensive portfolio tracking and transaction analysis tools.",
    benefits: ["Real-time dashboards", "Performance metrics"],
    color: "from-rose-500 to-pink-600",
    textColor: "text-rose-600",
    bgColor: "bg-rose-50",
    glowColor: "shadow-rose-500/25",
  },
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(Array(features.length).fill(false))
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start revealing features with staggered timing
          const revealFeatures = () => {
            setVisibleFeatures((prev) => {
              const newState = [...prev]
              const nextIndex = newState.findIndex((visible) => !visible)
              if (nextIndex !== -1) {
                newState[nextIndex] = true
              }
              return newState
            })
          }

          // Initial reveal
          revealFeatures()

          // Staggered reveals
          const interval = setInterval(() => {
            setVisibleFeatures((prev) => {
              if (prev.every((v) => v)) {
                clearInterval(interval)
                return prev
              }
              const newState = [...prev]
              const nextIndex = newState.findIndex((visible) => !visible)
              if (nextIndex !== -1) {
                newState[nextIndex] = true
              }
              return newState
            })
          }, 150)

          return () => clearInterval(interval)
        }
      },
      { threshold: 0.1 },
    )

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current)
      }
    }
  }, [])

  return (
    <section id="features" className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Enterprise-Grade Features
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Everything Your Team Needs
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Noyra combines enterprise-grade security with intuitive design, giving your organization complete control
            over digital assets with powerful features built for teams.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 rounded-3xl transition-all duration-500 cursor-pointer",
                "bg-white/80 backdrop-blur-sm border border-white/50",
                "transform opacity-0 translate-y-8",
                visibleFeatures[index] && "opacity-100 translate-y-0",
                "hover:bg-white hover:-translate-y-2 hover:scale-[1.02]",
                activeFeature === index && "bg-white -translate-y-2 scale-[1.02]",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
                boxShadow:
                  activeFeature === index
                    ? `0 25px 50px -12px ${feature.glowColor.replace("shadow-", "").replace("/25", "")}, 0 0 0 1px ${feature.color.split(" ")[0].replace("from-", "").replace("-500", "-200")}`
                    : undefined,
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Animated gradient border */}
              <div
                className={cn(
                  "absolute inset-0 rounded-3xl opacity-0 transition-all duration-500",
                  "bg-gradient-to-br p-[2px]",
                  feature.color,
                  activeFeature === index && "opacity-100",
                )}
              >
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>

              {/* Content container */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500",
                    "bg-gradient-to-br",
                    feature.color,
                    "group-hover:scale-110 group-hover:rotate-3",
                    activeFeature === index && "scale-110 rotate-3 shadow-lg",
                  )}
                >
                  <feature.icon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3
                  className={cn(
                    "text-xl font-bold text-gray-900 mb-2 transition-colors duration-300",
                    activeFeature === index && feature.textColor,
                  )}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center transition-all duration-300",
                        activeFeature === index && "translate-x-1",
                      )}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full flex items-center justify-center mr-2 transition-all duration-300",
                          feature.bgColor,
                          activeFeature === index && "scale-110",
                        )}
                      >
                        <Check className={cn("w-2.5 h-2.5 transition-colors duration-300", feature.textColor)} />
                      </div>
                      <span className="text-gray-700 text-xs font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Learn more link */}
                <div
                  className={cn(
                    "mt-4 flex items-center font-semibold transition-all duration-500 text-sm",
                    feature.textColor,
                    "transform translate-y-4 opacity-0",
                    activeFeature === index && "translate-y-0 opacity-100",
                  )}
                >
                  <span>Learn more</span>
                  <ChevronRight
                    className={cn(
                      "w-3 h-3 ml-1 transition-all duration-300",
                      activeFeature === index && "translate-x-1 scale-110",
                    )}
                  />
                </div>
              </div>

              {/* Floating particles effect */}
              {activeFeature === index && (
                <>
                  <div
                    className={cn(
                      "absolute top-3 right-3 w-1.5 h-1.5 rounded-full animate-ping",
                      feature.bgColor.replace("bg-", "bg-").replace("-50", "-400"),
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute top-6 right-6 w-1 h-1 rounded-full animate-pulse",
                      feature.bgColor.replace("bg-", "bg-").replace("-50", "-300"),
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute bottom-3 left-3 w-1 h-1 rounded-full animate-bounce",
                      feature.bgColor.replace("bg-", "bg-").replace("-50", "-400"),
                    )}
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium cursor-pointer hover:shadow-lg transition-all hover:from-blue-700 hover:to-indigo-700 hover:scale-105 group">
            <span>Explore all features</span>
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  )
}
