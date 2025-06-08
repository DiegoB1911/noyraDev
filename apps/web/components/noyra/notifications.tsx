"use client"

import { Bell, CheckCircle, Clock, Users, Zap, Shield, Settings, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const notifications = [
  {
    id: "notif-001",
    type: "approval",
    title: "Transaction Approval Required",
    message: "Payment to Vendor ABC ($45,000) requires your signature",
    timestamp: "5 minutes ago",
    priority: "high",
    read: false,
    action: "Review Transaction",
    icon: Clock,
  },
  {
    id: "notif-002",
    type: "governance",
    title: "New Proposal: Q1 Budget Allocation",
    message: "Alice Johnson created a new proposal for Q1 2025 budget allocation",
    timestamp: "2 hours ago",
    priority: "medium",
    read: false,
    action: "View Proposal",
    icon: Users,
  },
  {
    id: "notif-003",
    type: "security",
    title: "Security Alert: New Login",
    message: "New login detected from IP 192.168.1.105 for user bob@company.com",
    timestamp: "4 hours ago",
    priority: "medium",
    read: true,
    action: "Review Activity",
    icon: Shield,
  },
  {
    id: "notif-004",
    type: "transaction",
    title: "Transaction Completed",
    message: "Salary distribution ($85,000) has been successfully processed",
    timestamp: "6 hours ago",
    priority: "low",
    read: true,
    action: "View Details",
    icon: CheckCircle,
  },
  {
    id: "notif-005",
    type: "system",
    title: "System Maintenance Scheduled",
    message: "Scheduled maintenance on January 20th from 2:00 AM to 4:00 AM UTC",
    timestamp: "1 day ago",
    priority: "low",
    read: false,
    action: "Learn More",
    icon: Settings,
  },
  {
    id: "notif-006",
    type: "approval",
    title: "Proposal Vote Required",
    message: "Emergency fund threshold change proposal is awaiting your vote",
    timestamp: "1 day ago",
    priority: "high",
    read: true,
    action: "Cast Vote",
    icon: Users,
  },
]

const notificationSettings = [
  {
    category: "Transaction Approvals",
    description: "Notifications for pending transaction signatures",
    email: true,
    push: true,
    sms: false,
  },
  {
    category: "Governance Proposals",
    description: "New proposals and voting reminders",
    email: true,
    push: true,
    sms: false,
  },
  {
    category: "Security Alerts",
    description: "Login attempts and security events",
    email: true,
    push: true,
    sms: true,
  },
  {
    category: "Transaction Confirmations",
    description: "Completed transaction notifications",
    email: false,
    push: true,
    sms: false,
  },
  {
    category: "System Updates",
    description: "Maintenance and system announcements",
    email: true,
    push: false,
    sms: false,
  },
]

export function NoyraNotifications() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications Center</h1>
          <p className="text-gray-600 mt-1">Manage alerts, approvals, and system events</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-gray-200">
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Unread", value: "3", icon: Bell, color: "text-red-600", bgColor: "bg-red-50" },
          { label: "Pending Approvals", value: "2", icon: Clock, color: "text-amber-600", bgColor: "bg-amber-50" },
          { label: "Security Alerts", value: "1", icon: Shield, color: "text-blue-600", bgColor: "bg-blue-50" },
          { label: "Total Today", value: "8", icon: Zap, color: "text-green-600", bgColor: "bg-green-50" },
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

      {/* Notifications List */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Notifications</h2>
          <div className="flex space-x-2">
            {["All", "Unread", "Approvals", "Security"].map((filter) => (
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

        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={cn(
                "p-4 rounded-xl border transition-all duration-300 cursor-pointer",
                notification.read
                  ? "border-gray-200 hover:border-gray-300 bg-white/50"
                  : "border-indigo-200 bg-indigo-50/50 hover:border-indigo-300",
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center mt-1",
                      notification.priority === "high"
                        ? "bg-red-100 text-red-600"
                        : notification.priority === "medium"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-green-100 text-green-600",
                    )}
                  >
                    <notification.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={cn("font-semibold", notification.read ? "text-gray-700" : "text-gray-900")}>
                        {notification.title}
                      </h3>
                      {!notification.read && <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>}
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          notification.priority === "high"
                            ? "bg-red-100 text-red-700"
                            : notification.priority === "medium"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700",
                        )}
                      >
                        {notification.priority}
                      </span>
                    </div>
                    <p className={cn("text-sm mb-2", notification.read ? "text-gray-500" : "text-gray-700")}>
                      {notification.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{notification.timestamp}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className={cn(
                          "text-xs",
                          notification.priority === "high"
                            ? "border-red-200 text-red-600 hover:bg-red-50"
                            : "border-indigo-200 text-indigo-600 hover:bg-indigo-50",
                        )}
                      >
                        {notification.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
          <Button variant="outline" size="sm" className="border-gray-200">
            <Settings className="w-4 h-4 mr-2" />
            Save Preferences
          </Button>
        </div>

        <div className="space-y-6">
          {notificationSettings.map((setting, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{setting.category}</h3>
                  <p className="text-sm text-gray-500">{setting.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={setting.email}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">Email</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={setting.push}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">Push</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={setting.sms}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">SMS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Notification Rules</h3>
              <p className="text-blue-700 text-sm">Customize notification triggers</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Transaction Thresholds</div>
              <div className="text-sm text-blue-700">Set amount-based alerts</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Time-based Rules</div>
              <div className="text-sm text-blue-700">Schedule notification times</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Priority Settings</div>
              <div className="text-sm text-blue-700">Configure alert priorities</div>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Notification History</h3>
              <p className="text-green-700 text-sm">View past notifications</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-green-700">This Week</span>
              <span className="text-green-900 font-medium">24 notifications</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">This Month</span>
              <span className="text-green-900 font-medium">156 notifications</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Response Rate</span>
              <span className="text-green-900 font-medium">94%</span>
            </div>
            <button className="w-full text-left p-3 rounded-lg hover:bg-green-100/50 transition-colors mt-3">
              <div className="font-medium text-green-900">View Full History</div>
              <div className="text-sm text-green-700">Access complete notification log</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
