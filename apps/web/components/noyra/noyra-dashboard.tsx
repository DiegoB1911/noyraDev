"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  ArrowUpDown,
  Coins,
  Puzzle,
  Settings,
  Bell,
  ChevronRight,
  Monitor,
  Wallet,
  LogOut,
  User,
  Shield,
  FileText,
  BookOpen,
  BarChart3,
  Key,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { NoyraOverview } from "./overview"
import { NoyraAccounts } from "./accounts"
import { NoyraTransactions } from "./transactions"
import { NoyraAssets } from "./assets"
import { NoyraPlugins } from "./plugins"
import { NoyraSettings } from "./settings"
import { NoyraNotifications } from "./notifications"
import { NoyraSecurity } from "./security"
import { NoyraAuditLogs } from "./audit-logs"
import { NoyraAddressBook } from "./address-book"
import { NoyraCompliance } from "./compliance"
import { NoyraApiIntegrations } from "./api-integrations"
import Link from "next/link"

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
    id: "security",
    label: "Security & Recovery",
    icon: Shield,
    component: NoyraSecurity,
    description: "Keys & Backup",
  },
  {
    id: "address-book",
    label: "Address Book",
    icon: BookOpen,
    component: NoyraAddressBook,
    description: "Contacts & Addresses",
  },
  {
    id: "audit-logs",
    label: "Audit Logs",
    icon: FileText,
    component: NoyraAuditLogs,
    description: "Activity & Security Logs",
  },
  {
    id: "compliance",
    label: "Compliance & Reports",
    icon: BarChart3,
    component: NoyraCompliance,
    description: "Tax & Regulatory",
  },
  {
    id: "api-integrations",
    label: "API & Integrations",
    icon: Key,
    component: NoyraApiIntegrations,
    description: "Developer Tools",
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

export function NoyraDashboard() {
  const [activeSection, setActiveSection] = useState("overview")

  const ActiveComponent = dashboardSections.find((section) => section.id === activeSection)?.component || NoyraOverview

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="w-80 bg-white/90 backdrop-blur-md border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Noyra</h1>
              <p className="text-sm text-gray-500">Enterprise Stellar Wallet</p>
            </div>
          </div>

          {/* Connection Status */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-700 font-medium">Connected to Stellar</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {dashboardSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left group",
                  activeSection === section.id
                    ? "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-lg"
                    : "hover:bg-gray-50 text-gray-700 hover:shadow-md",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                    activeSection === section.id
                      ? "bg-gradient-to-br from-blue-400/20 to-cyan-400/20"
                      : "bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:scale-110",
                  )}
                >
                  <section.icon
                    className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      activeSection === section.id ? "text-white" : "text-blue-600",
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{section.label}</div>
                  <div
                    className={cn(
                      "text-sm transition-colors duration-300",
                      activeSection === section.id ? "text-blue-200" : "text-gray-500",
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

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Alice Johnson</div>
                <div className="text-xs text-gray-500">CEO • Administrator</div>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Link
              href="/"
              className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Monitor className="w-4 h-4" />
              <span>Landing</span>
            </Link>
            <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {dashboardSections.find((section) => section.id === activeSection)?.label}
              </h2>
              <p className="text-gray-600">
                {dashboardSections.find((section) => section.id === activeSection)?.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$2.8M</div>
                <div className="text-sm text-gray-500">Total Balance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-sm text-gray-500">Active Signers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">7</div>
                <div className="text-sm text-gray-500">Pending</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto bg-gradient-to-br from-slate-50/50 via-blue-50/50 to-indigo-50/50">
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}
