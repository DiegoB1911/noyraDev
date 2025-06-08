"use client"

import { TrendingUp, TrendingDown, Users, Shield, Zap, DollarSign, Activity, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Total Balance",
    value: "$2,847,392.50",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    label: "Active Signers",
    value: "24",
    change: "+3",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    label: "Pending Approvals",
    value: "7",
    change: "-2",
    trend: "down",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    label: "Security Score",
    value: "98%",
    change: "+1%",
    trend: "up",
    icon: Shield,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

const recentActivity = [
  {
    type: "transfer",
    description: "Payment to Vendor ABC",
    amount: "-$45,000.00",
    status: "completed",
    time: "2 hours ago",
    signers: "3/5",
  },
  {
    type: "proposal",
    description: "Budget Allocation Q1 2025",
    amount: "$500,000.00",
    status: "voting",
    time: "4 hours ago",
    signers: "2/5",
  },
  {
    type: "approval",
    description: "New Signer Addition",
    amount: "",
    status: "pending",
    time: "6 hours ago",
    signers: "1/5",
  },
  {
    type: "transfer",
    description: "Salary Distribution",
    amount: "-$125,000.00",
    status: "completed",
    time: "1 day ago",
    signers: "5/5",
  },
]

export function NoyraOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Monitor your organization's financial activity and security status</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Activity className="w-4 h-4" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.bgColor)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div
                className={cn(
                  "flex items-center text-sm font-medium",
                  stat.trend === "up" ? "text-green-600" : "text-red-600",
                )}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">View All</button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50/80 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      activity.type === "transfer"
                        ? "bg-blue-100 text-blue-600"
                        : activity.type === "proposal"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-amber-100 text-amber-600",
                    )}
                  >
                    {activity.type === "transfer" ? (
                      <Zap className="w-5 h-5" />
                    ) : activity.type === "proposal" ? (
                      <Users className="w-5 h-5" />
                    ) : (
                      <Shield className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{activity.description}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-2">
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span>Signers: {activity.signers}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {activity.amount && (
                    <div
                      className={cn(
                        "font-semibold",
                        activity.amount.startsWith("-") ? "text-red-600" : "text-green-600",
                      )}
                    >
                      {activity.amount}
                    </div>
                  )}
                  <div
                    className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      activity.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : activity.status === "voting"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-amber-100 text-amber-700",
                    )}
                  >
                    {activity.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {[
                { label: "Send Payment", icon: Zap, color: "bg-blue-600" },
                { label: "Create Proposal", icon: Users, color: "bg-purple-600" },
                { label: "Add Signer", icon: Shield, color: "bg-green-600" },
              ].map((action, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 transition-colors text-left group"
                >
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white", action.color)}>
                    <action.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-green-900">Security Status</h3>
                <p className="text-green-700 text-sm">All systems secure</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700">Multi-sig Active</span>
                <span className="text-green-900 font-medium">✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Hardware Wallets</span>
                <span className="text-green-900 font-medium">3/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Last Audit</span>
                <span className="text-green-900 font-medium">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
