"use client"

import { Shield, Download, Upload, Eye, EyeOff, Copy, RefreshCw, HardDrive } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const seedPhraseWords = [
  "abandon",
  "ability",
  "able",
  "about",
  "above",
  "absent",
  "absorb",
  "abstract",
  "absurd",
  "abuse",
  "access",
  "accident",
]

const hardwareWallets = [
  {
    name: "Ledger Nano S Plus",
    status: "connected",
    address: "GCKFBEIYTKP...XLMVQMU",
    lastUsed: "2 hours ago",
    firmware: "1.1.0",
  },
  {
    name: "Ledger Nano X",
    status: "connected",
    address: "GDQVUOKLT4K...NRTYUIO",
    lastUsed: "1 day ago",
    firmware: "2.2.3",
  },
  {
    name: "Trezor Model T",
    status: "disconnected",
    address: "GBVFFRGWER...QWERTYUI",
    lastUsed: "1 week ago",
    firmware: "2.6.3",
  },
]

const backupHistory = [
  {
    type: "Full Backup",
    date: "2024-01-15 14:30:00",
    size: "2.4 MB",
    status: "completed",
    location: "Encrypted Cloud Storage",
  },
  {
    type: "Keys Only",
    date: "2024-01-10 09:15:00",
    size: "156 KB",
    status: "completed",
    location: "Local Encrypted File",
  },
  {
    type: "Configuration",
    date: "2024-01-05 16:45:00",
    size: "89 KB",
    status: "completed",
    location: "Secure USB Drive",
  },
]

export function NoyraSecurity() {
  const [showSeedPhrase, setShowSeedPhrase] = useState(false)
  const [seedPhraseRevealed, setSeedPhraseRevealed] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Security & Recovery</h1>
          <p className="text-gray-600 mt-1">Manage seed phrases, hardware wallets, and backup recovery</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          Create Backup
        </Button>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Security Score", value: "98%", icon: Shield, color: "text-green-600", bgColor: "bg-green-50" },
          { label: "Hardware Wallets", value: "2", icon: HardDrive, color: "text-blue-600", bgColor: "bg-blue-50" },
          {
            label: "Backup Status",
            value: "Current",
            icon: Download,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
          },
          { label: "Last Backup", value: "5 days", icon: RefreshCw, color: "text-amber-600", bgColor: "bg-amber-50" },
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

      {/* Seed Phrase Management */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Seed Phrase Management</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-amber-200 text-amber-600">
              <RefreshCw className="w-4 h-4 mr-2" />
              Generate New
            </Button>
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
              <Upload className="w-4 h-4 mr-2" />
              Import Existing
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-amber-900">Master Seed Phrase</h3>
              <p className="text-amber-700 text-sm">Your 12-word recovery phrase - keep this secure!</p>
            </div>
          </div>

          {!seedPhraseRevealed ? (
            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-4 text-center">
                <div className="text-gray-500 mb-4">Seed phrase is hidden for security</div>
                <Button
                  onClick={() => setSeedPhraseRevealed(true)}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Reveal Seed Phrase
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {seedPhraseWords.map((word, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center border border-amber-200">
                    <div className="text-xs text-amber-600 mb-1">{index + 1}</div>
                    <div className="font-medium text-gray-900">{word}</div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-amber-200 text-amber-600">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy to Clipboard
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-200"
                  onClick={() => setSeedPhraseRevealed(false)}
                >
                  <EyeOff className="w-4 h-4 mr-2" />
                  Hide
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-red-50 rounded-xl p-4 border border-red-200">
          <div className="flex items-center space-x-2 text-red-800">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Security Warning</span>
          </div>
          <p className="text-red-700 text-sm mt-2">
            Never share your seed phrase with anyone. Store it securely offline. Anyone with access to your seed phrase
            can control your funds.
          </p>
        </div>
      </div>

      {/* Hardware Wallets */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Hardware Wallets</h2>
          <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
            <HardDrive className="w-4 h-4 mr-2" />
            Connect Device
          </Button>
        </div>

        <div className="space-y-4">
          {hardwareWallets.map((wallet, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      wallet.status === "connected" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600",
                    )}
                  >
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{wallet.name}</div>
                    <div className="text-sm text-gray-500">
                      {wallet.address} • Firmware: {wallet.firmware}
                    </div>
                    <div className="text-xs text-gray-400">Last used: {wallet.lastUsed}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      wallet.status === "connected" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700",
                    )}
                  >
                    {wallet.status}
                  </div>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backup & Recovery */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Backup History</h2>
            <Button variant="outline" size="sm" className="border-green-200 text-green-600">
              <Download className="w-4 h-4 mr-2" />
              New Backup
            </Button>
          </div>

          <div className="space-y-4">
            {backupHistory.map((backup, index) => (
              <div key={index} className="p-4 rounded-xl border border-gray-200 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-900">{backup.type}</div>
                  <div
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      backup.status === "completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700",
                    )}
                  >
                    {backup.status}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-1">{backup.location}</div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{backup.date}</span>
                  <span>{backup.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Recovery Options</h3>
              <p className="text-blue-700 text-sm">Multiple recovery methods available</p>
            </div>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left p-4 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Seed Phrase Recovery</div>
              <div className="text-sm text-blue-700">Restore wallet using 12-word phrase</div>
            </button>
            <button className="w-full text-left p-4 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Hardware Wallet Recovery</div>
              <div className="text-sm text-blue-700">Restore from hardware device</div>
            </button>
            <button className="w-full text-left p-4 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Backup File Recovery</div>
              <div className="text-sm text-blue-700">Restore from encrypted backup</div>
            </button>
            <button className="w-full text-left p-4 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Multi-sig Recovery</div>
              <div className="text-sm text-blue-700">Emergency recovery with signers</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
