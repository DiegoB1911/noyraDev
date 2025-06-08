"use client"

import { Users, Shield, Key, Plus, MoreHorizontal, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const accounts = [
  {
    id: "main-treasury",
    name: "Main Treasury",
    balance: "$2,450,000.00",
    threshold: "3 of 5",
    signers: 5,
    status: "active",
    lastActivity: "2 hours ago",
  },
  {
    id: "operations",
    name: "Operations Fund",
    balance: "$350,000.00",
    threshold: "2 of 3",
    signers: 3,
    status: "active",
    lastActivity: "1 day ago",
  },
  {
    id: "emergency",
    name: "Emergency Reserve",
    balance: "$47,392.50",
    threshold: "4 of 5",
    signers: 5,
    status: "locked",
    lastActivity: "1 week ago",
  },
]

const signers = [
  {
    id: "1",
    name: "Alice Johnson",
    role: "CEO",
    email: "alice@company.com",
    status: "active",
    lastSeen: "Online",
    permissions: ["treasury", "operations", "emergency"],
    avatar: "AJ",
  },
  {
    id: "2",
    name: "Bob Smith",
    role: "CFO",
    email: "bob@company.com",
    status: "active",
    lastSeen: "2 hours ago",
    permissions: ["treasury", "operations"],
    avatar: "BS",
  },
  {
    id: "3",
    name: "Carol Davis",
    role: "CTO",
    email: "carol@company.com",
    status: "active",
    lastSeen: "1 day ago",
    permissions: ["operations"],
    avatar: "CD",
  },
  {
    id: "4",
    name: "David Wilson",
    role: "Legal",
    email: "david@company.com",
    status: "pending",
    lastSeen: "Never",
    permissions: ["emergency"],
    avatar: "DW",
  },
  {
    id: "5",
    name: "Eve Brown",
    role: "Security",
    email: "eve@company.com",
    status: "active",
    lastSeen: "30 minutes ago",
    permissions: ["treasury", "emergency"],
    avatar: "EB",
  },
]

export function NoyraAccounts() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Accounts & Multi-signature</h1>
          <p className="text-gray-600 mt-1">Manage multi-signature accounts and signer permissions</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Account
        </Button>
      </div>

      {/* Accounts Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <div
            key={account.id}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    account.status === "active"
                      ? "bg-green-100 text-green-600"
                      : account.status === "locked"
                        ? "bg-red-100 text-red-600"
                        : "bg-amber-100 text-amber-600",
                  )}
                >
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{account.name}</h3>
                  <p className="text-sm text-gray-500">Threshold: {account.threshold}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">{account.balance}</div>
                <div className="text-sm text-gray-500">Current Balance</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{account.signers} signers</span>
                </div>
                <div
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    account.status === "active"
                      ? "bg-green-100 text-green-700"
                      : account.status === "locked"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700",
                  )}
                >
                  {account.status}
                </div>
              </div>

              <div className="text-xs text-gray-500">Last activity: {account.lastActivity}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Signers Management */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Authorized Signers</h2>
          <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
            <Plus className="w-4 h-4 mr-2" />
            Add Signer
          </Button>
        </div>

        <div className="space-y-4">
          {signers.map((signer, index) => (
            <div
              key={signer.id}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50/80 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                  {signer.avatar}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{signer.name}</div>
                  <div className="text-sm text-gray-500">
                    {signer.role} • {signer.email}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex space-x-1">
                      {signer.permissions.map((permission, i) => (
                        <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div
                    className={cn(
                      "flex items-center space-x-1 text-sm",
                      signer.status === "active"
                        ? "text-green-600"
                        : signer.status === "pending"
                          ? "text-amber-600"
                          : "text-gray-500",
                    )}
                  >
                    {signer.status === "active" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : signer.status === "pending" ? (
                      <Clock className="w-4 h-4" />
                    ) : (
                      <AlertTriangle className="w-4 h-4" />
                    )}
                    <span className="capitalize">{signer.status}</span>
                  </div>
                  <div className="text-xs text-gray-500">{signer.lastSeen}</div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Key className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Threshold Configuration</h3>
              <p className="text-blue-700 text-sm">Manage signature requirements</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-blue-700">Main Treasury</span>
              <span className="text-blue-900 font-medium">3 of 5 required</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700">Operations</span>
              <span className="text-blue-900 font-medium">2 of 3 required</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700">Emergency</span>
              <span className="text-blue-900 font-medium">4 of 5 required</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Security Features</h3>
              <p className="text-green-700 text-sm">Active protection measures</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-green-700">Hardware Wallet Support</span>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-700">Time-locked Transactions</span>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-700">Audit Logging</span>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
