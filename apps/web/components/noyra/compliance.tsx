"use client"

import {
  BarChart3,
  Download,
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const complianceReports = [
  {
    id: "report-001",
    name: "Q4 2024 Tax Report",
    type: "tax",
    period: "Q4 2024",
    status: "completed",
    generatedDate: "2024-01-15",
    fileSize: "2.4 MB",
    transactions: 156,
    totalVolume: "$2.4M",
  },
  {
    id: "report-002",
    name: "Annual Financial Summary",
    type: "financial",
    period: "2024",
    status: "in_progress",
    generatedDate: "2024-01-10",
    fileSize: "1.8 MB",
    transactions: 892,
    totalVolume: "$12.8M",
  },
  {
    id: "report-003",
    name: "AML Compliance Report",
    type: "aml",
    period: "December 2024",
    status: "completed",
    generatedDate: "2024-01-05",
    fileSize: "856 KB",
    transactions: 45,
    totalVolume: "$890K",
  },
  {
    id: "report-004",
    name: "Regulatory Filing - Form 8300",
    type: "regulatory",
    period: "Q4 2024",
    status: "pending",
    generatedDate: null,
    fileSize: null,
    transactions: 12,
    totalVolume: "$156K",
  },
]

const complianceAlerts = [
  {
    id: "alert-001",
    type: "threshold",
    severity: "warning",
    title: "Large Transaction Alert",
    description: "Transaction exceeds $10,000 threshold - reporting required",
    amount: "$45,000",
    dueDate: "2024-01-20",
    status: "pending",
  },
  {
    id: "alert-002",
    type: "kyc",
    severity: "info",
    title: "KYC Renewal Required",
    description: "Customer verification expires in 30 days",
    amount: null,
    dueDate: "2024-02-15",
    status: "pending",
  },
  {
    id: "alert-003",
    type: "audit",
    severity: "critical",
    title: "Audit Trail Gap",
    description: "Missing transaction documentation for compliance",
    amount: "$25,000",
    dueDate: "2024-01-18",
    status: "overdue",
  },
]

const taxCategories = [
  {
    category: "Business Income",
    amount: "$2,450,000",
    percentage: 65,
    transactions: 156,
    color: "bg-green-500",
  },
  {
    category: "Capital Gains",
    amount: "$890,000",
    percentage: 23,
    transactions: 45,
    color: "bg-blue-500",
  },
  {
    category: "Investment Income",
    amount: "$320,000",
    percentage: 8,
    transactions: 23,
    color: "bg-purple-500",
  },
  {
    category: "Other Income",
    amount: "$150,000",
    percentage: 4,
    transactions: 12,
    color: "bg-amber-500",
  },
]

export function NoyraCompliance() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compliance & Reports</h1>
          <p className="text-gray-600 mt-1">Tax reporting, regulatory compliance, and financial analysis</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Report
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Compliance Score",
            value: "96%",
            icon: CheckCircle,
            color: "text-green-600",
            bgColor: "bg-green-50",
          },
          { label: "Pending Reports", value: "3", icon: FileText, color: "text-amber-600", bgColor: "bg-amber-50" },
          { label: "Tax Liability", value: "$245K", icon: DollarSign, color: "text-blue-600", bgColor: "bg-blue-50" },
          {
            label: "Audit Readiness",
            value: "98%",
            icon: BarChart3,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
          },
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

      {/* Compliance Alerts */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Compliance Alerts</h2>
          <Button variant="outline" size="sm" className="border-gray-200">
            View All Alerts
          </Button>
        </div>

        <div className="space-y-4">
          {complianceAlerts.map((alert, index) => (
            <div
              key={alert.id}
              className={cn(
                "p-4 rounded-xl border transition-all duration-300",
                alert.severity === "critical"
                  ? "border-red-200 bg-red-50/50"
                  : alert.severity === "warning"
                    ? "border-amber-200 bg-amber-50/50"
                    : "border-blue-200 bg-blue-50/50",
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      alert.severity === "critical"
                        ? "bg-red-100 text-red-600"
                        : alert.severity === "warning"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-blue-100 text-blue-600",
                    )}
                  >
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          alert.severity === "critical"
                            ? "bg-red-100 text-red-700"
                            : alert.severity === "warning"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-blue-100 text-blue-700",
                        )}
                      >
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{alert.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {alert.amount && <span>Amount: {alert.amount}</span>}
                      <span>Due: {alert.dueDate}</span>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          alert.status === "overdue" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700",
                        )}
                      >
                        {alert.status}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className={cn(
                    alert.severity === "critical" ? "bg-red-600 hover:bg-red-700" : "bg-amber-600 hover:bg-amber-700",
                    "text-white",
                  )}
                >
                  Resolve
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reports and Tax Analysis */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Generated Reports */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Generated Reports</h2>
            <Button variant="outline" size="sm" className="border-green-200 text-green-600">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>

          <div className="space-y-4">
            {complianceReports.map((report, index) => (
              <div
                key={report.id}
                className="p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-gray-50/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{report.name}</h3>
                  <div
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      report.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : report.status === "in_progress"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-700",
                    )}
                  >
                    {report.status.replace("_", " ")}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {report.period} • {report.transactions} transactions • {report.totalVolume}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {report.generatedDate ? `Generated: ${report.generatedDate}` : "Not generated"}
                    {report.fileSize && ` • ${report.fileSize}`}
                  </div>
                  {report.status === "completed" && (
                    <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tax Analysis */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Tax Analysis 2024</h2>
            <Button variant="outline" size="sm" className="border-purple-200 text-purple-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>

          <div className="space-y-4">
            {taxCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{category.category}</span>
                  <span className="text-sm font-bold text-gray-900">{category.amount}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={cn("h-2 rounded-full", category.color)}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{category.percentage}%</span>
                </div>
                <div className="text-xs text-gray-400">{category.transactions} transactions</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Total Taxable Income</span>
              <span className="text-lg font-bold text-gray-900">$3,810,000</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-600">Estimated Tax Liability</span>
              <span className="text-sm font-medium text-red-600">$245,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Compliance */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Regulatory Status</h3>
              <p className="text-green-700 text-sm">Current compliance standing</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-green-700">AML Compliance</span>
              <span className="text-green-900 font-medium">✓ Current</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">KYC Requirements</span>
              <span className="text-green-900 font-medium">✓ Verified</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Tax Reporting</span>
              <span className="text-green-900 font-medium">✓ Up to Date</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Audit Trail</span>
              <span className="text-green-900 font-medium">✓ Complete</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Report Templates</h3>
              <p className="text-blue-700 text-sm">Pre-configured compliance reports</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Form 8300 (Large Cash)</div>
              <div className="text-sm text-blue-700">Transactions over $10,000</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">SAR Filing</div>
              <div className="text-sm text-blue-700">Suspicious activity reports</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Annual Summary</div>
              <div className="text-sm text-blue-700">Year-end financial summary</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
