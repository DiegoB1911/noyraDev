"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Mail, ArrowRight, Users, Shield, Zap, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Users,
    label: "Early Adopters",
    value: "2,500+",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Shield,
    label: "Security First",
    value: "100%",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    icon: Zap,
    label: "Launch Ready",
    value: "Q1 2025",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
]

const benefits = [
  { text: "Priority access to beta features", icon: "🚀" },
  { text: "Exclusive community Discord", icon: "💬" },
  { text: "Direct feedback channel", icon: "📞" },
  { text: "Early bird pricing discounts", icon: "💰" },
]

export function WhitelistSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [focusedInput, setFocusedInput] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header outside the box */}
        <div
          className={cn(
            "text-center mb-12 space-y-6 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 via-indigo-100 to-purple-100 border border-transparent text-gray-800 text-sm font-semibold shadow-lg relative overflow-hidden">
            {/* Rainbow animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 opacity-60 animate-pulse"></div>
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-red-50 via-yellow-50 via-green-50 via-blue-50 via-indigo-50 to-purple-50"></div>

            <div className="relative z-10 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-purple-600 animate-pulse" />
              <span className="bg-gradient-to-r from-red-600 via-yellow-600 via-green-600 via-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                Join the Revolution
              </span>
              <div className="ml-2 w-2 h-2 bg-gradient-to-r from-red-500 to-purple-500 rounded-full animate-ping"></div>
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
            Be Among the First to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Experience the Future
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of forward-thinking organizations already on our waitlist. Get exclusive early access,
            priority support, and shape the future of crypto wallet technology.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-5 rounded-2xl transition-all duration-300 cursor-pointer",
                "bg-white/90 backdrop-blur-md border border-white/60 shadow-md",
                "hover:shadow-lg hover:-translate-y-1",
                isVisible && `delay-${(index + 1) * 100}`,
              )}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200/50 via-indigo-200/50 to-purple-200/50 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-sm scale-105"></div>

              {/* Remove these floating particles */}
              {/* <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-indigo-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div> */}

              <div className="relative z-10 text-center">
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300",
                    "bg-gradient-to-br from-white to-gray-50/80 shadow-sm border border-gray-100",
                    "group-hover:scale-105",
                    "relative overflow-hidden",
                  )}
                >
                  {/* Icon background glow */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                      stat.bgColor,
                    )}
                  ></div>

                  <stat.icon
                    className={cn(
                      "w-10 h-10 transition-all duration-500 relative z-10",
                      stat.color,
                      "group-hover:scale-110",
                    )}
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-full group-hover:animate-shimmer"></div>
                </div>

                <div className="space-y-2">
                  <div
                    className={cn(
                      "text-2xl font-bold text-gray-900 mb-2 transition-all duration-300",
                      stat.color.replace("text-", "group-hover:text-"),
                    )}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-base font-semibold tracking-wide">{stat.label}</div>
                </div>
              </div>

              {/* Simplified hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Remove the subtle inner glow div completely */}
            </div>
          ))}
        </div>

        {/* Enhanced Gradient box with form */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl blur-xl opacity-20 scale-105"></div>

          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-center text-white overflow-hidden">
            {/* Enhanced background elements */}
            <div className="absolute inset-0">
              {/* Floating orbs */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-20 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-16 left-1/3 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse delay-500"></div>

              {/* Enhanced rainbow grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(255, 0, 0, 0.7) 1px, transparent 0),
      radial-gradient(circle at 1px 31px, rgba(255, 165, 0, 0.7) 1px, transparent 0),
      radial-gradient(circle at 31px 1px, rgba(255, 255, 0, 0.7) 1px, transparent 0),
      radial-gradient(circle at 31px 31px, rgba(0, 128, 0, 0.7) 1px, transparent 0),
      radial-gradient(circle at 16px 16px, rgba(0, 0, 255, 0.7) 1px, transparent 0),
      radial-gradient(circle at 46px 16px, rgba(75, 0, 130, 0.7) 1px, transparent 0),
      radial-gradient(circle at 16px 46px, rgba(238, 130, 238, 0.7) 1px, transparent 0)
    `,
                  backgroundSize: "60px 60px",
                }}
              ></div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full animate-shimmer"></div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            {/* Enhanced floating particles */}
            {isVisible && (
              <>
                <div className="absolute top-8 left-8 w-2 h-2 bg-white/80 rounded-full animate-ping"></div>
                <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce delay-700"></div>
                <div className="absolute bottom-12 right-8 w-2 h-2 bg-white/80 rounded-full animate-ping delay-1000"></div>
              </>
            )}

            <div className="relative z-10 space-y-8">
              {/* Form or Success State */}
              {!isSubmitted ? (
                <div
                  className={cn(
                    "space-y-8 transition-all duration-1000 delay-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  )}
                >
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">Join Our Exclusive Waitlist</h3>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                      Be the first to access revolutionary crypto wallet technology
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 relative group">
                        <div
                          className={cn(
                            "absolute inset-0 rounded-full transition-all duration-300",
                            focusedInput
                              ? "bg-gradient-to-r from-white/30 to-blue-200/30 scale-105 shadow-lg"
                              : "bg-white/10",
                          )}
                        ></div>
                        <Mail
                          className={cn(
                            "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300",
                            focusedInput ? "text-white scale-110" : "text-gray-300",
                          )}
                        />
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedInput(true)}
                          onBlur={() => setFocusedInput(false)}
                          className={cn(
                            "relative pl-12 pr-4 py-4 text-lg rounded-full border-0 transition-all duration-300",
                            "bg-white/90 backdrop-blur-sm text-gray-900 placeholder:text-gray-500",
                            "focus:bg-white focus:scale-105 focus:shadow-2xl",
                            focusedInput && "ring-2 ring-white/50",
                          )}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className={cn(
                          "bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-bold group disabled:opacity-50 transition-all duration-300",
                          "hover:scale-105 hover:shadow-2xl shadow-lg",
                          isLoading && "animate-pulse",
                        )}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                            Joining...
                          </div>
                        ) : (
                          <>
                            Join Waitlist
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>

                  {/* Enhanced Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center space-x-3 text-blue-100 transition-all duration-500 p-3 rounded-xl bg-white/5 backdrop-blur-sm",
                          isVisible && `delay-${600 + index * 100}`,
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
                          "hover:bg-white/10 hover:scale-105",
                        )}
                      >
                        <div className="text-xl">{benefit.icon}</div>
                        <span className="text-sm font-medium">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className={cn("space-y-6 transition-all duration-1000", "animate-in fade-in slide-in-from-bottom-4")}
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-green-400 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold">Welcome to the Future!</h3>
                  <p className="text-blue-100 max-w-lg mx-auto text-lg">
                    You're now on our exclusive waitlist. We'll notify you as soon as Numo is ready for early access.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                    <Users className="w-4 h-4 mr-2" />
                    You're #2,501 on the waitlist
                  </div>
                </div>
              )}

              {/* Enhanced Trust indicators */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 text-blue-100 transition-all duration-1000 delay-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
              >
                <div className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">No spam, ever</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-sm font-medium">Unsubscribe anytime</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-600"></div>
                  <span className="text-sm font-medium">Early access priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
