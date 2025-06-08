"use client"

import { FileText, Download, Filter, Search, Eye, Shield, Users, ArrowUpDown, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const auditLogs = [
  {
    id: "log-001",
    timestamp: "2024-01-15 14:30:25",
    event: "Transaction Signed",
    category: "transaction",
    user: "alice@company.com",
    details: "Signed payment to Vendor ABC ($45,000)",
    ip: "192.168.1.100",
    userAgent: "Chrome 120.0.0.0",
    severity: "info",
    txHash: "a1b2c3d4e5f6...",
  },
  {
    id: "log-002",
    timestamp: "2024-01-15 14:25:12",
    event: "User Login",
    category: "authentication",
    user: "bob@company.com",
    details: "Successful login with 2FA",
    ip: "192.168.1.101",
    userAgent: "Firefox 121.0.0.0",
    severity: "info",
    txHash: null,
  },
  {
    id: "log-003",
    timestamp: "2024-01-15 14:20:45",
    event: "Failed Login Attempt",
    category: "security",
    user: "unknown@external.com",
    details: "Invalid credentials - 3rd attempt",
    ip: "203.0.113.1",
    userAgent: "Unknown",
    severity: "warning",
    txHash: null,
  },
  {
    id: "log-004",
    timestamp: "2024-01-15 14:15:33",
    event: "Settings Modified",
    category: "configuration",
    user: "alice@company.com",
    details: "Updated transaction threshold for Operations account",
    ip: "192.168.1.100",
    userAgent: "Chrome 120.0.0.0",
    severity: "info",
    txHash: null,
  },
  {
    id: "log-005",
    timestamp: "2024-01-15 14:10:18",
    event: "Account Created",
    category: "account",
    user: "alice@company.com",
    details: "Created new multi-sig account: Emergency Reserve",
    ip: "192.168.1.100",
    userAgent: "Chrome 120.0.0.0",
    severity: "info",
    txHash: null,
  },
  {
    id: "log-006",
    timestamp: "2024-01-15 14:05:07",
    event: "Suspicious Activity",
    category: "security",
    user: "system",
    details: "Multiple failed login attempts from same IP",
    ip: "203.0.113.1",
    userAgent: "Automated",
    severity: "critical",
    txHash: null,
  },
]

const logCategories = [
  { name: "All", count: 156, color: "bg-gray-100 text-gray-700" },
  { name: "Transaction", count: 89, color: "bg-blue-100 text-blue-700" },
  { name: "Authentication", count: 34, color: "bg-green-100 text-green-700" },
  { name: "Security", count: 12, color: "bg-red-100 text-red-700" },
  { name: "Configuration", count: 21, color: "bg-purple-100 text-purple-700" },
]

export function NoyraAuditLogs() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
          <p className="text-gray-600 mt-1">Complete activity and security event logging</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filter
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export Logs
          </Button>
        </div>
      </div>

      {/* Log Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Events", value: "1,247", icon: FileText, color: "text-blue-600", bgColor: "bg-blue-50" },
          { label: "Security Alerts", value: "3", icon: Shield, color: "text-red-600", bgColor: "bg-red-50" },
          { label: "User Actions", value: "892", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
          { label: "System Events", value: "352", icon: Settings, color: "text-purple-600", bgColor: "bg-purple-50" },
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

      {/* Search and Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input placeholder="Search logs by event, user, or details..." className="pl-10 bg-white border-gray-200" />
          </div>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700">
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Custom range</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700">
              <option>All Severity</option>
              <option>Critical</option>
              <option>Warning</option>
              <option>Info</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {logCategories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                index === 0 ? category.color : "text-gray-600 hover:bg-gray-100",
              )}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Logs Table */}
        <div className="space-y-3">
          {auditLogs.map((log, index) => (
            <div
              key={log.id}
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center mt-1",
                      log.severity === "critical"
                        ? "bg-red-100 text-red-600"
                        : log.severity === "warning"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-blue-100 text-blue-600",
                    )}
                  >
                    {log.category === "transaction" ? (
                      <ArrowUpDown className="w-5 h-5" />
                    ) : log.category === "authentication" ? (
                      <Users className="w-5 h-5" />
                    ) : log.category === "security" ? (
                      <Shield className="w-5 h-5" />
                    ) : (
                      <Settings className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{log.event}</h3>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          log.category === "transaction"
                            ? "bg-blue-100 text-blue-700"
                            : log.category === "authentication"
                              ? "bg-green-100 text-green-700"
                              : log.category === "security"
                                ? "bg-red-100 text-red-700"
                                : "bg-purple-100 text-purple-700",
                        )}
                      >
                        {log.category}
                      </span>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          log.severity === "critical"
                            ? "bg-red-100 text-red-700"
                            : log.severity === "warning"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-gray-100 text-gray-700",
                        )}
                      >
                        {log.severity}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{log.details}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>User: {log.user}</span>
                      <span>•</span>
                      <span>IP: {log.ip}</span>
                      <span>•</span>
                      <span>{log.timestamp}</span>
                      {log.txHash && (
                        <>
                          <span>•</span>
                          <span>TX: {log.txHash}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-gray-200">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">Showing 1-10 of 1,247 events</div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-gray-200">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="border-gray-200">
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Log Retention & Export */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Log Retention</h3>
              <p className="text-green-700 text-sm">Automatic archival and compliance</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-green-700">Retention Period</span>
              <span className="text-green-900 font-medium">7 years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Archive Location</span>
              <span className="text-green-900 font-medium">Encrypted Cloud</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Compliance</span>
              <span className="text-green-900 font-medium">SOX, GDPR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Next Archive</span>
              <span className="text-green-900 font-medium">30 days</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Export Options</h3>
              <p className="text-blue-700 text-sm">Download logs in various formats</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">CSV Export</div>
              <div className="text-sm text-blue-700">Spreadsheet compatible format</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">JSON Export</div>
              <div className="text-sm text-blue-700">Machine readable format</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">PDF Report</div>
              <div className="text-sm text-blue-700">Formatted audit report</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
