"use client"

import {
  ArrowUpDown,
  Send,
  Calendar,
  Filter,
  Download,
  Clock,
  CheckCircle,
  AlertTriangle,
  X,
  BookOpen,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const transactions = [
  {
    id: "tx-001",
    type: "outgoing",
    description: "Payment to Vendor ABC",
    amount: "-$45,000.00",
    recipient: "GCKFBEIYTKP...XLMVQMU",
    status: "completed",
    signatures: "3/3",
    timestamp: "2024-01-15 14:30:00",
    fee: "$0.50",
  },
  {
    id: "tx-002",
    type: "incoming",
    description: "Client Payment - Project Delta",
    amount: "+$125,000.00",
    recipient: "GDQVUOKLT4K...NRTYUIO",
    status: "completed",
    signatures: "N/A",
    timestamp: "2024-01-15 09:15:00",
    fee: "$0.00",
  },
  {
    id: "tx-003",
    type: "outgoing",
    description: "Salary Distribution - January",
    amount: "-$85,000.00",
    recipient: "Multiple Recipients",
    status: "pending",
    signatures: "2/3",
    timestamp: "2024-01-15 08:00:00",
    fee: "$2.50",
  },
  {
    id: "tx-004",
    type: "outgoing",
    description: "Office Rent - Q1 2024",
    amount: "-$15,000.00",
    recipient: "GBVFFRGWER...QWERTYUI",
    status: "failed",
    signatures: "1/3",
    timestamp: "2024-01-14 16:45:00",
    fee: "$0.50",
  },
]

const scheduledTransactions = [
  {
    id: "sched-001",
    description: "Monthly Salary Distribution",
    amount: "$85,000.00",
    frequency: "Monthly",
    nextExecution: "2024-02-01",
    status: "active",
  },
  {
    id: "sched-002",
    description: "Quarterly Tax Payment",
    amount: "$25,000.00",
    frequency: "Quarterly",
    nextExecution: "2024-03-31",
    status: "active",
  },
  {
    id: "sched-003",
    description: "Vendor Retainer - TechCorp",
    amount: "$10,000.00",
    frequency: "Monthly",
    nextExecution: "2024-02-15",
    status: "paused",
  },
]

export function NoyraTransactions() {
  const [showSendPayment, setShowSendPayment] = useState(false)
  const [sendForm, setSendForm] = useState({
    recipient: "",
    amount: "",
    asset: "XLM",
    memo: "",
    priority: "standard",
    schedule: false,
    scheduleDate: "",
  })
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transaction Center</h1>
          <p className="text-gray-600 mt-1">Send payments, manage transfers, and schedule operations</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Payment
          </Button>
          <Button
            onClick={() => setShowSendPayment(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Payment
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Today's Volume",
            value: "$170,000",
            change: "+12%",
            icon: ArrowUpDown,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
          },
          {
            label: "Pending Approvals",
            value: "3",
            change: "-1",
            icon: Clock,
            color: "text-amber-600",
            bgColor: "bg-amber-50",
          },
          {
            label: "Completed Today",
            value: "8",
            change: "+3",
            icon: CheckCircle,
            color: "text-green-600",
            bgColor: "bg-green-50",
          },
          {
            label: "Failed Transactions",
            value: "1",
            change: "0",
            icon: AlertTriangle,
            color: "text-red-600",
            bgColor: "bg-red-50",
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
              <span className="text-sm font-medium text-gray-500">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Transaction History */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-gray-200">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-gray-200">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div
              key={tx.id}
              className="p-4 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      tx.type === "outgoing" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600",
                    )}
                  >
                    <ArrowUpDown className={cn("w-6 h-6", tx.type === "outgoing" ? "rotate-90" : "-rotate-90")} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{tx.description}</div>
                    <div className="text-sm text-gray-500">
                      To: {tx.recipient} • Fee: {tx.fee}
                    </div>
                    <div className="text-xs text-gray-400">{tx.timestamp}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className={cn("text-lg font-bold", tx.type === "outgoing" ? "text-red-600" : "text-green-600")}>
                    {tx.amount}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        tx.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "pending"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700",
                      )}
                    >
                      {tx.status}
                    </span>
                    {tx.signatures !== "N/A" && <span className="text-xs text-gray-500">{tx.signatures} sigs</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled Transactions */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Scheduled Payments</h2>
            <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-600">
              Manage All
            </Button>
          </div>

          <div className="space-y-4">
            {scheduledTransactions.map((scheduled, index) => (
              <div
                key={scheduled.id}
                className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-900">{scheduled.description}</div>
                  <div
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      scheduled.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                    )}
                  >
                    {scheduled.status}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{scheduled.amount}</div>
                    <div className="text-sm text-gray-500">{scheduled.frequency}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Next: {scheduled.nextExecution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Analytics */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <ArrowUpDown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-indigo-900">Transaction Analytics</h3>
              <p className="text-indigo-700 text-sm">This month's overview</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-indigo-700">Total Volume</span>
              <span className="text-indigo-900 font-medium">$2.4M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-700">Transactions</span>
              <span className="text-indigo-900 font-medium">156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-700">Average Amount</span>
              <span className="text-indigo-900 font-medium">$15,384</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-700">Success Rate</span>
              <span className="text-indigo-900 font-medium">98.7%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-700">Total Fees</span>
              <span className="text-indigo-900 font-medium">$78.50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Send Payment Modal */}
      {showSendPayment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Send Payment</h2>
              <button
                onClick={() => setShowSendPayment(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form className="space-y-6">
              {/* Recipient Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Recipient</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Stellar address or select from contacts"
                    value={sendForm.recipient}
                    onChange={(e) => setSendForm({ ...sendForm, recipient: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700"
                  >
                    <BookOpen className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex space-x-2">
                  {["Recent", "Contacts", "Saved"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount and Asset Section */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={sendForm.amount}
                    onChange={(e) => setSendForm({ ...sendForm, amount: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Asset</label>
                  <select
                    value={sendForm.asset}
                    onChange={(e) => setSendForm({ ...sendForm, asset: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="XLM">XLM - Stellar Lumens</option>
                    <option value="USDC">USDC - USD Coin</option>
                    <option value="BTC">BTC - Bitcoin</option>
                    <option value="ETH">ETH - Ethereum</option>
                  </select>
                </div>
              </div>

              {/* Available Balance */}
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">Available Balance</span>
                  <span className="font-bold text-blue-900">125,000.00 XLM</span>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 mt-1"
                  onClick={() => setSendForm({ ...sendForm, amount: "125000" })}
                >
                  Use Max
                </button>
              </div>

              {/* Memo Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Memo (Optional)</label>
                <textarea
                  placeholder="Add a note for this transaction"
                  value={sendForm.memo}
                  onChange={(e) => setSendForm({ ...sendForm, memo: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Transaction Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Transaction Priority</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "low", label: "Low", fee: "$0.10", time: "~5 min" },
                    { value: "standard", label: "Standard", fee: "$0.50", time: "~2 min" },
                    { value: "high", label: "High", fee: "$1.00", time: "~30 sec" },
                  ].map((priority) => (
                    <button
                      key={priority.value}
                      type="button"
                      onClick={() => setSendForm({ ...sendForm, priority: priority.value })}
                      className={cn(
                        "p-3 rounded-xl border-2 transition-all",
                        sendForm.priority === priority.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300",
                      )}
                    >
                      <div className="font-medium text-gray-900">{priority.label}</div>
                      <div className="text-sm text-gray-500">{priority.fee}</div>
                      <div className="text-xs text-gray-400">{priority.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Payment Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-medium text-gray-900">Schedule Payment</div>
                  <div className="text-sm text-gray-500">Send this payment at a later time</div>
                </div>
                <button
                  type="button"
                  onClick={() => setSendForm({ ...sendForm, schedule: !sendForm.schedule })}
                  className={cn(
                    "w-12 h-6 rounded-full transition-colors relative",
                    sendForm.schedule ? "bg-blue-600" : "bg-gray-300",
                  )}
                >
                  <div
                    className={cn(
                      "w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform",
                      sendForm.schedule ? "translate-x-6" : "translate-x-0.5",
                    )}
                  />
                </button>
              </div>

              {/* Schedule Date (if enabled) */}
              {sendForm.schedule && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Date & Time</label>
                  <input
                    type="datetime-local"
                    value={sendForm.scheduleDate}
                    onChange={(e) => setSendForm({ ...sendForm, scheduleDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}

              {/* Multi-signature Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-amber-900">Multi-signature Required</span>
                </div>
                <div className="text-sm text-amber-700">
                  This transaction requires 3 of 5 signatures from authorized signers.
                </div>
              </div>

              {/* Transaction Summary */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="font-medium text-gray-900 mb-3">Transaction Summary</div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium">
                    {sendForm.amount || "0.00"} {sendForm.asset}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Network Fee</span>
                  <span className="font-medium">
                    {sendForm.priority === "low" ? "$0.10" : sendForm.priority === "standard" ? "$0.50" : "$1.00"}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>
                      {sendForm.amount || "0.00"} {sendForm.asset} + Fee
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowSendPayment(false)} className="flex-1">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  {sendForm.schedule ? "Schedule Payment" : "Send Payment"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
