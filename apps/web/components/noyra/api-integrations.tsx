"use client"

import { Key, Plus, Code, Webhook, Globe, Shield, Copy, Eye, EyeOff, RefreshCw, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const apiKeys = [
  {
    id: "key-001",
    name: "Production API Key",
    description: "Main production environment access",
    key: "noyra_live_sk_1234567890abcdef",
    permissions: ["read", "write", "admin"],
    lastUsed: "2 hours ago",
    requests: "1.2M",
    status: "active",
    created: "2024-01-01",
  },
  {
    id: "key-002",
    name: "Development API Key",
    description: "Testing and development environment",
    key: "noyra_test_sk_abcdef1234567890",
    permissions: ["read", "write"],
    lastUsed: "1 day ago",
    requests: "45K",
    status: "active",
    created: "2024-01-10",
  },
  {
    id: "key-003",
    name: "Analytics Read-Only",
    description: "Third-party analytics integration",
    key: "noyra_ro_sk_fedcba0987654321",
    permissions: ["read"],
    lastUsed: "1 week ago",
    requests: "892",
    status: "inactive",
    created: "2024-01-05",
  },
]

const webhooks = [
  {
    id: "webhook-001",
    name: "Transaction Notifications",
    url: "https://api.company.com/webhooks/transactions",
    events: ["transaction.created", "transaction.completed", "transaction.failed"],
    status: "active",
    lastDelivery: "2 minutes ago",
    successRate: "99.8%",
    created: "2024-01-01",
  },
  {
    id: "webhook-002",
    name: "Account Updates",
    url: "https://internal.company.com/api/account-sync",
    events: ["account.created", "account.updated", "signer.added"],
    status: "active",
    lastDelivery: "1 hour ago",
    successRate: "100%",
    created: "2024-01-15",
  },
  {
    id: "webhook-003",
    name: "Security Alerts",
    url: "https://security.company.com/alerts",
    events: ["security.login_failed", "security.suspicious_activity"],
    status: "paused",
    lastDelivery: "3 days ago",
    successRate: "95.2%",
    created: "2024-01-08",
  },
]

const integrations = [
  {
    name: "Slack",
    description: "Real-time notifications and alerts",
    status: "connected",
    icon: "💬",
    lastSync: "5 minutes ago",
    features: ["Notifications", "Alerts", "Commands"],
  },
  {
    name: "QuickBooks",
    description: "Automated accounting and bookkeeping",
    status: "connected",
    icon: "📊",
    lastSync: "1 hour ago",
    features: ["Transaction Sync", "Reports", "Tax Data"],
  },
  {
    name: "Zapier",
    description: "Workflow automation platform",
    status: "available",
    icon: "⚡",
    lastSync: null,
    features: ["Automation", "Triggers", "Actions"],
  },
  {
    name: "Microsoft Excel",
    description: "Spreadsheet data export and analysis",
    status: "available",
    icon: "📈",
    lastSync: null,
    features: ["Data Export", "Templates", "Analysis"],
  },
]

export function NoyraApiIntegrations() {
  const [showApiKey, setShowApiKey] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">API & Integrations</h1>
          <p className="text-gray-600 mt-1">Manage API keys, webhooks, and third-party integrations</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            <Code className="w-4 h-4 mr-2" />
            View Docs
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create API Key
          </Button>
        </div>
      </div>

      {/* API Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "API Requests", value: "1.2M", icon: Zap, color: "text-blue-600", bgColor: "bg-blue-50" },
          { label: "Active Keys", value: "2", icon: Key, color: "text-green-600", bgColor: "bg-green-50" },
          { label: "Webhooks", value: "3", icon: Webhook, color: "text-purple-600", bgColor: "bg-purple-50" },
          { label: "Integrations", value: "2", icon: Globe, color: "text-amber-600", bgColor: "bg-amber-50" },
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

      {/* API Keys Management */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">API Keys</h2>
          <Button variant="outline" size="sm" className="border-green-200 text-green-600">
            <Plus className="w-4 h-4 mr-2" />
            Generate New Key
          </Button>
        </div>

        <div className="space-y-4">
          {apiKeys.map((apiKey, index) => (
            <div
              key={apiKey.id}
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{apiKey.name}</h3>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        apiKey.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                      )}
                    >
                      {apiKey.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{apiKey.description}</p>

                  <div className="flex items-center space-x-2 mb-3">
                    <code className="text-sm bg-gray-100 px-3 py-1 rounded font-mono">
                      {showApiKey === apiKey.id ? apiKey.key : `${apiKey.key.slice(0, 20)}...`}
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-200 p-1"
                      onClick={() => setShowApiKey(showApiKey === apiKey.id ? null : apiKey.id)}
                    >
                      {showApiKey === apiKey.id ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-200 p-1">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {apiKey.permissions.map((permission, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {permission}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Last used: {apiKey.lastUsed}</span>
                    <span>•</span>
                    <span>{apiKey.requests} requests</span>
                    <span>•</span>
                    <span>Created: {apiKey.created}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-amber-200 text-amber-600">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-200 text-red-600">
                    Revoke
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Webhooks */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Webhooks</h2>
          <Button variant="outline" size="sm" className="border-purple-200 text-purple-600">
            <Webhook className="w-4 h-4 mr-2" />
            Add Webhook
          </Button>
        </div>

        <div className="space-y-4">
          {webhooks.map((webhook, index) => (
            <div
              key={webhook.id}
              className="p-4 rounded-xl border border-gray-200 hover:border-purple-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{webhook.name}</h3>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        webhook.status === "active"
                          ? "bg-green-100 text-green-700"
                          : webhook.status === "paused"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-100 text-gray-700",
                      )}
                    >
                      {webhook.status}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded">{webhook.url}</code>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {webhook.events.map((event, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {event}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Last delivery: {webhook.lastDelivery}</span>
                    <span>•</span>
                    <span>Success rate: {webhook.successRate}</span>
                    <span>•</span>
                    <span>Created: {webhook.created}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
                    Test
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third-party Integrations */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Third-party Integrations</h2>
          <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-600">
            <Globe className="w-4 h-4 mr-2" />
            Browse Marketplace
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl">
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                    <p className="text-sm text-gray-600">{integration.description}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    integration.status === "connected" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                  )}
                >
                  {integration.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {integration.features.map((feature, i) => (
                  <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {integration.lastSync ? `Last sync: ${integration.lastSync}` : "Not connected"}
                </div>
                <Button
                  size="sm"
                  className={cn(
                    integration.status === "connected"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-indigo-600 hover:bg-indigo-700",
                    "text-white",
                  )}
                >
                  {integration.status === "connected" ? "Configure" : "Connect"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Resources */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Developer Resources</h3>
              <p className="text-blue-700 text-sm">Documentation and tools</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">API Documentation</div>
              <div className="text-sm text-blue-700">Complete API reference</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">SDK Libraries</div>
              <div className="text-sm text-blue-700">JavaScript, Python, Go SDKs</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Code Examples</div>
              <div className="text-sm text-blue-700">Sample implementations</div>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Security & Limits</h3>
              <p className="text-green-700 text-sm">API security and rate limits</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-green-700">Rate Limit</span>
              <span className="text-green-900 font-medium">1000/hour</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Current Usage</span>
              <span className="text-green-900 font-medium">245/hour</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Authentication</span>
              <span className="text-green-900 font-medium">API Key + HMAC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Encryption</span>
              <span className="text-green-900 font-medium">TLS 1.3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
