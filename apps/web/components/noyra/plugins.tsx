"use client"

import { Puzzle, Download, Settings, Shield, Zap, Users, Globe, BarChart3, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const availablePlugins = [
  {
    id: "kyc-compliance",
    name: "KYC Compliance Suite",
    description: "Advanced identity verification and compliance monitoring for regulatory requirements",
    category: "Compliance",
    version: "2.1.0",
    developer: "Noyra Labs",
    price: "$299/month",
    rating: 4.8,
    downloads: "2.3k",
    status: "available",
    features: ["Identity Verification", "AML Screening", "Risk Assessment", "Compliance Reports"],
    icon: Shield,
  },
  {
    id: "defi-automation",
    name: "DeFi Automation Engine",
    description: "Automated yield farming, liquidity provision, and portfolio rebalancing on Stellar DEX",
    category: "DeFi",
    version: "1.5.2",
    developer: "StellarDeFi",
    price: "$199/month",
    rating: 4.6,
    downloads: "1.8k",
    status: "available",
    features: ["Auto Yield Farming", "Liquidity Management", "Portfolio Rebalancing", "Risk Controls"],
    icon: Zap,
  },
  {
    id: "team-management",
    name: "Advanced Team Management",
    description: "Enhanced user roles, permissions, and workflow management for large organizations",
    category: "Management",
    version: "3.0.1",
    developer: "Noyra Labs",
    price: "$149/month",
    rating: 4.9,
    downloads: "3.1k",
    status: "available",
    features: ["Role-based Access", "Workflow Automation", "Team Analytics", "Audit Trails"],
    icon: Users,
  },
  {
    id: "cross-chain-bridge",
    name: "Cross-chain Bridge",
    description: "Seamless asset transfers between Stellar and other major blockchain networks",
    category: "Interoperability",
    version: "1.2.0",
    developer: "ChainLink Labs",
    price: "$399/month",
    rating: 4.4,
    downloads: "956",
    status: "beta",
    features: ["Ethereum Bridge", "Polygon Support", "BSC Integration", "Atomic Swaps"],
    icon: Globe,
  },
  {
    id: "analytics-pro",
    name: "Analytics Pro Dashboard",
    description: "Advanced analytics, reporting, and business intelligence for financial operations",
    category: "Analytics",
    version: "2.3.1",
    developer: "DataViz Inc",
    price: "$249/month",
    rating: 4.7,
    downloads: "1.4k",
    status: "available",
    features: ["Custom Reports", "Real-time Analytics", "Predictive Insights", "Export Tools"],
    icon: BarChart3,
  },
]

const installedPlugins = [
  {
    id: "kyc-compliance",
    name: "KYC Compliance Suite",
    status: "active",
    version: "2.1.0",
    lastUpdated: "2 days ago",
    usage: "High",
  },
  {
    id: "team-management",
    name: "Advanced Team Management",
    status: "active",
    version: "3.0.1",
    lastUpdated: "1 week ago",
    usage: "Medium",
  },
  {
    id: "analytics-pro",
    name: "Analytics Pro Dashboard",
    status: "inactive",
    version: "2.2.0",
    lastUpdated: "2 weeks ago",
    usage: "Low",
  },
]

export function NoyraPlugins() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Plugins & Extensions</h1>
          <p className="text-gray-600 mt-1">Extend Noyra's functionality with modular plugins</p>
        </div>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Browse Marketplace
        </Button>
      </div>

      {/* Plugin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Installed Plugins", value: "3", icon: Puzzle, color: "text-blue-600", bgColor: "bg-blue-50" },
          { label: "Active Plugins", value: "2", icon: CheckCircle, color: "text-green-600", bgColor: "bg-green-50" },
          { label: "Available Updates", value: "1", icon: Download, color: "text-amber-600", bgColor: "bg-amber-50" },
          { label: "Marketplace Plugins", value: "24", icon: Globe, color: "text-purple-600", bgColor: "bg-purple-50" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.bgColor)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Installed Plugins */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Installed Plugins</h2>
          <Button variant="outline" size="sm" className="border-gray-200">
            <Settings className="w-4 h-4 mr-2" />
            Manage All
          </Button>
        </div>

        <div className="space-y-4">
          {installedPlugins.map((plugin, index) => (
            <div
              key={plugin.id}
              className="p-4 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      plugin.status === "active" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600",
                    )}
                  >
                    <Puzzle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{plugin.name}</div>
                    <div className="text-sm text-gray-500">
                      Version {plugin.version} • Updated {plugin.lastUpdated}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          plugin.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                        )}
                      >
                        {plugin.status}
                      </span>
                      <span className="text-xs text-gray-500">Usage: {plugin.usage}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-gray-200">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      plugin.status === "active"
                        ? "border-red-200 text-red-600 hover:bg-red-50"
                        : "border-green-200 text-green-600 hover:bg-green-50",
                    )}
                  >
                    {plugin.status === "active" ? "Disable" : "Enable"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Plugins Marketplace */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Plugin Marketplace</h2>
          <div className="flex space-x-2">
            {["All", "Compliance", "DeFi", "Analytics", "Management"].map((filter) => (
              <button
                key={filter}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  filter === "All" ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-100",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {availablePlugins.map((plugin, index) => (
            <div
              key={plugin.id}
              className="group p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <plugin.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {plugin.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{plugin.developer}</span>
                      <span>•</span>
                      <span>v{plugin.version}</span>
                    </div>
                  </div>
                </div>
                <div
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    plugin.status === "available"
                      ? "bg-green-100 text-green-700"
                      : plugin.status === "beta"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100 text-gray-700",
                  )}
                >
                  {plugin.status}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{plugin.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Category</span>
                  <span className="font-medium text-gray-900">{plugin.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Price</span>
                  <span className="font-medium text-gray-900">{plugin.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-gray-900">{plugin.rating}</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-400">({plugin.downloads})</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-gray-900 mb-2">Key Features</div>
                <div className="flex flex-wrap gap-1">
                  {plugin.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                  {plugin.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{plugin.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Install
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200">
                  Preview
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plugin Development */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Puzzle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-indigo-900">Plugin Development</h3>
            <p className="text-indigo-700 text-sm">Build custom plugins for your organization</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="text-left p-4 rounded-lg hover:bg-indigo-100/50 transition-colors">
            <div className="font-medium text-indigo-900">Developer SDK</div>
            <div className="text-sm text-indigo-700">Access development tools and APIs</div>
          </button>
          <button className="text-left p-4 rounded-lg hover:bg-indigo-100/50 transition-colors">
            <div className="font-medium text-indigo-900">Plugin Templates</div>
            <div className="text-sm text-indigo-700">Start with pre-built templates</div>
          </button>
          <button className="text-left p-4 rounded-lg hover:bg-indigo-100/50 transition-colors">
            <div className="font-medium text-indigo-900">Submit Plugin</div>
            <div className="text-sm text-indigo-700">Publish to the marketplace</div>
          </button>
        </div>
      </div>
    </div>
  )
}
