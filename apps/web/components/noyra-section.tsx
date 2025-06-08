"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Vote,
  ArrowUpDown,
  Coins,
  Puzzle,
  Settings,
  Bell,
  ChevronRight,
  Play,
  Monitor,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { NoyraOverview } from "./noyra/overview"
import { NoyraAccounts } from "./noyra/accounts"
import { NoyraGovernance } from "./noyra/governance"
import { NoyraTransactions } from "./noyra/transactions"
import { NoyraAssets } from "./noyra/assets"
import { NoyraPlugins } from "./noyra/plugins"
import { NoyraSettings } from "./noyra/settings"
import { NoyraNotifications } from "./noyra/notifications"

const dashboardSections = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutDashboard,
    component: NoyraOverview,
    description: "Dashboard & Analytics",
  },
  {
    id: "accounts",
    label: "Accounts",
    icon: Users,
    component: NoyraAccounts,
    description: "Multi-signature Setup",
  },
  {
    id: "governance",
    label: "Governance",
    icon: Vote,
    component: NoyraGovernance,
    description: "Proposals & Voting",
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: ArrowUpDown,
    component: NoyraTransactions,
    description: "Payments & Transfers",
  },
  {
    id: "assets",
    label: "Assets",
    icon: Coins,
    component: NoyraAssets,
    description: "Tokens & NFTs",
  },
  {
    id: "plugins",
    label: "Plugins",
    icon: Puzzle,
    component: NoyraPlugins,
    description: "Extensions & Modules",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    component: NoyraSettings,
    description: "Access Control",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    component: NoyraNotifications,
    description: "Alerts & Events",
  },
]

export function NoyraSection() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isVisible, setIsVisible] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
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

  const ActiveComponent = dashboardSections.find((section) => section.id === activeSection)?.component || NoyraOverview

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            "text-center space-y-6 mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            Noyra Dashboard Preview
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Stellar Wallet
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Noyra's intuitive dashboard designed for organizations, enterprises, and DAOs. Manage
            multi-signature accounts, governance, and high-volume transactions with ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => setShowDemo(!showDemo)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
            >
              <Monitor className="mr-2 w-5 h-5" />
              {showDemo ? "Hide" : "Explore"} Dashboard
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-8 py-4 text-lg font-semibold border-2 hover:bg-white/80 backdrop-blur-sm bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden hover:border-indigo-300"
            >
              <Play className="mr-2 w-5 h-5" />
              <span className="relative z-10">Watch Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>

        {/* Dashboard Demo */}
        {showDemo && (
          <div
            className={cn(
              "bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-1000",
              "animate-in fade-in slide-in-from-bottom-8",
            )}
          >
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Noyra Dashboard</h3>
                    <p className="text-indigo-100">Enterprise Stellar Wallet</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Connected to Stellar</span>
                </div>
              </div>
            </div>

            <div className="flex h-[800px]">
              {/* Sidebar Navigation */}
              <div className="w-80 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-slate-200 p-6">
                <div className="space-y-2">
                  {dashboardSections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={cn(
                        "w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left group",
                        activeSection === section.id
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                          : "hover:bg-white/80 text-gray-700 hover:shadow-md",
                      )}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                      }}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                          activeSection === section.id
                            ? "bg-white/20"
                            : "bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:scale-110",
                        )}
                      >
                        <section.icon
                          className={cn(
                            "w-5 h-5 transition-colors duration-300",
                            activeSection === section.id ? "text-white" : "text-indigo-600",
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{section.label}</div>
                        <div
                          className={cn(
                            "text-sm transition-colors duration-300",
                            activeSection === section.id ? "text-indigo-100" : "text-gray-500",
                          )}
                        >
                          {section.description}
                        </div>
                      </div>
                      {activeSection === section.id && <ChevronRight className="w-5 h-5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-8 overflow-auto">
                <div className="h-full">
                  <ActiveComponent />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Feature Highlights */}
        <div
          className={cn(
            "mt-20 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {[
            {
              icon: Users,
              title: "Multi-Signature Security",
              description: "Advanced threshold management with role-based permissions for enterprise security.",
              color: "from-blue-500 to-indigo-600",
            },
            {
              icon: Vote,
              title: "DAO Governance",
              description: "Built-in proposal system with transparent voting mechanisms for decentralized decisions.",
              color: "from-indigo-500 to-purple-600",
            },
            {
              icon: Puzzle,
              title: "Modular Architecture",
              description: "Extensible plugin system allowing custom integrations and feature expansion.",
              color: "from-purple-500 to-pink-600",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 hover:bg-white hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                  feature.color,
                )}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
