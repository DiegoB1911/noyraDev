"use client"

import { Settings, Shield, Users, Download, Upload, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const organizationSettings = {
  name: "TechCorp Industries",
  type: "Corporation",
  industry: "Technology",
  country: "United States",
  timezone: "UTC-8 (PST)",
  language: "English",
  currency: "USD",
}

const securitySettings = [
  {
    name: "Two-Factor Authentication",
    description: "Require 2FA for all user logins",
    enabled: true,
    critical: true,
  },
  {
    name: "Hardware Wallet Requirement",
    description: "Mandate hardware wallet for transaction signing",
    enabled: true,
    critical: true,
  },
  {
    name: "IP Whitelist",
    description: "Restrict access to approved IP addresses",
    enabled: false,
    critical: false,
  },
  {
    name: "Session Timeout",
    description: "Auto-logout after 30 minutes of inactivity",
    enabled: true,
    critical: false,
  },
  {
    name: "Transaction Limits",
    description: "Daily transaction amount limits per user",
    enabled: true,
    critical: false,
  },
]

const userRoles = [
  {
    name: "Administrator",
    description: "Full system access and user management",
    users: 2,
    permissions: ["All Permissions"],
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Treasury Manager",
    description: "Manage treasury accounts and high-value transactions",
    users: 3,
    permissions: ["Treasury Access", "High-Value Transactions", "Reporting"],
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Operations",
    description: "Handle day-to-day operational transactions",
    users: 8,
    permissions: ["Operations Account", "Standard Transactions", "View Reports"],
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Auditor",
    description: "Read-only access for compliance and auditing",
    users: 2,
    permissions: ["View All", "Export Data", "Audit Logs"],
    color: "bg-purple-100 text-purple-700",
  },
]

const auditLogs = [
  {
    action: "User Login",
    user: "alice@company.com",
    timestamp: "2024-01-15 14:30:00",
    ip: "192.168.1.100",
    status: "Success",
  },
  {
    action: "Transaction Signed",
    user: "bob@company.com",
    timestamp: "2024-01-15 14:25:00",
    ip: "192.168.1.101",
    status: "Success",
  },
  {
    action: "Settings Modified",
    user: "alice@company.com",
    timestamp: "2024-01-15 14:20:00",
    ip: "192.168.1.100",
    status: "Success",
  },
  {
    action: "Failed Login Attempt",
    user: "unknown@external.com",
    timestamp: "2024-01-15 14:15:00",
    ip: "203.0.113.1",
    status: "Failed",
  },
]

export function NoyraSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings & Access Control</h1>
          <p className="text-gray-600 mt-1">Manage organization profile, security, and user permissions</p>
        </div>
        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Export Settings
        </Button>
      </div>

      {/* Organization Profile */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Organization Profile</h2>
          <Button variant="outline" size="sm" className="border-gray-200">
            <Settings className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {Object.entries(organizationSettings)
              .slice(0, 4)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50/80 transition-colors"
                >
                  <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
          </div>
          <div className="space-y-4">
            {Object.entries(organizationSettings)
              .slice(4)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50/80 transition-colors"
                >
                  <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">Security Score: 95%</span>
          </div>
        </div>

        <div className="space-y-4">
          {securitySettings.map((setting, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:bg-gray-50/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    setting.critical ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600",
                  )}
                >
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{setting.name}</div>
                  <div className="text-sm text-gray-500">{setting.description}</div>
                  {setting.critical && (
                    <div className="text-xs text-red-600 font-medium mt-1">Critical Security Feature</div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    setting.enabled ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                  )}
                >
                  {setting.enabled ? "Enabled" : "Disabled"}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    setting.enabled
                      ? "border-red-200 text-red-600 hover:bg-red-50"
                      : "border-green-200 text-green-600 hover:bg-green-50",
                  )}
                >
                  {setting.enabled ? "Disable" : "Enable"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Roles & Permissions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">User Roles & Permissions</h2>
          <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-600">
            <Users className="w-4 h-4 mr-2" />
            Manage Roles
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {userRoles.map((role, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{role.name}</h3>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
                <div className={cn("px-2 py-1 rounded-full text-xs font-medium", role.color)}>{role.users} users</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">Permissions:</div>
                <div className="flex flex-wrap gap-1">
                  {role.permissions.map((permission, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Logs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Audit Logs</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-gray-200">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Button>
            <Button variant="outline" size="sm" className="border-gray-200">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {auditLogs.map((log, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50/80 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center",
                    log.status === "Success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600",
                  )}
                >
                  {log.status === "Success" ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{log.action}</div>
                  <div className="text-sm text-gray-500">
                    {log.user} • {log.ip}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">{log.timestamp}</div>
                <div
                  className={cn("text-xs font-medium", log.status === "Success" ? "text-green-600" : "text-red-600")}
                >
                  {log.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Management */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Data Export</h3>
              <p className="text-blue-700 text-sm">Export organization data and settings</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Export All Data</div>
              <div className="text-sm text-blue-700">Complete data export for backup</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Export Transactions</div>
              <div className="text-sm text-blue-700">Transaction history and records</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Export Audit Logs</div>
              <div className="text-sm text-blue-700">Security and access logs</div>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Upload className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Data Import</h3>
              <p className="text-green-700 text-sm">Import settings and configurations</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-green-100/50 transition-colors">
              <div className="font-medium text-green-900">Import Settings</div>
              <div className="text-sm text-green-700">Restore from backup file</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-green-100/50 transition-colors">
              <div className="font-medium text-green-900">Import Users</div>
              <div className="text-sm text-green-700">Bulk user import from CSV</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-green-100/50 transition-colors">
              <div className="font-medium text-green-900">Import Contacts</div>
              <div className="text-sm text-green-700">Import address book</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
