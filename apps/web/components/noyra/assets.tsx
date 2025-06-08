"use client"

import { Coins, TrendingUp, TrendingDown, Plus, Star, ExternalLink, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const assets = [
  {
    symbol: "XLM",
    name: "Stellar Lumens",
    balance: "125,000.00",
    value: "$12,500.00",
    change: "+5.2%",
    trend: "up",
    price: "$0.10",
    icon: "⭐",
    type: "native",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "500,000.00",
    value: "$500,000.00",
    change: "+0.1%",
    trend: "up",
    price: "$1.00",
    icon: "💵",
    type: "token",
  },
  {
    symbol: "BTC",
    name: "Bitcoin (Anchor)",
    balance: "2.45",
    value: "$122,500.00",
    change: "-2.3%",
    trend: "down",
    price: "$50,000.00",
    icon: "₿",
    type: "token",
  },
  {
    symbol: "ETH",
    name: "Ethereum (Anchor)",
    balance: "15.8",
    value: "$39,500.00",
    change: "+3.7%",
    trend: "up",
    price: "$2,500.00",
    icon: "Ξ",
    type: "token",
  },
  {
    symbol: "CORP",
    name: "Company Token",
    balance: "1,000,000.00",
    value: "$50,000.00",
    change: "+0.0%",
    trend: "neutral",
    price: "$0.05",
    icon: "🏢",
    type: "custom",
  },
]

const nfts = [
  {
    id: "nft-001",
    name: "Corporate Certificate #001",
    collection: "Legal Documents",
    description: "Official incorporation certificate",
    image: "/placeholder.svg?height=200&width=200",
    value: "N/A",
    rarity: "Unique",
  },
  {
    id: "nft-002",
    name: "Employee Badge #024",
    collection: "Access Tokens",
    description: "Senior developer access badge",
    image: "/placeholder.svg?height=200&width=200",
    value: "N/A",
    rarity: "Common",
  },
  {
    id: "nft-003",
    name: "Partnership Agreement #007",
    collection: "Legal Documents",
    description: "Strategic partnership with TechCorp",
    image: "/placeholder.svg?height=200&width=200",
    value: "N/A",
    rarity: "Rare",
  },
]

export function NoyraAssets() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assets Management</h1>
          <p className="text-gray-600 mt-1">View and manage tokens, custom assets, and NFTs</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            <Plus className="w-4 h-4 mr-2" />
            Add Asset
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
            <Coins className="w-4 h-4 mr-2" />
            Issue Token
          </Button>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Coins className="w-6 h-6 text-green-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">$724,500.00</div>
          <div className="text-gray-600 text-sm">Total Portfolio Value</div>
          <div className="text-green-600 text-sm font-medium mt-2">+4.2% (24h)</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">5 assets</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">5</div>
          <div className="text-gray-600 text-sm">Active Assets</div>
          <div className="text-blue-600 text-sm font-medium mt-2">2 custom tokens</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">3 NFTs</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
          <div className="text-gray-600 text-sm">NFT Collection</div>
          <div className="text-purple-600 text-sm font-medium mt-2">Legal & Access</div>
        </div>
      </div>

      {/* Assets List */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Token Holdings</h2>
          <div className="flex space-x-2">
            {["All", "Native", "Tokens", "Custom"].map((filter) => (
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
          {assets.map((asset, index) => (
            <div
              key={asset.symbol}
              className="p-4 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl">
                    {asset.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900">{asset.symbol}</span>
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          asset.type === "native"
                            ? "bg-blue-100 text-blue-700"
                            : asset.type === "token"
                              ? "bg-green-100 text-green-700"
                              : "bg-purple-100 text-purple-700",
                        )}
                      >
                        {asset.type}
                      </span>
                    </div>
                    <div className="text-gray-600">{asset.name}</div>
                    <div className="text-sm text-gray-500">Price: {asset.price}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{asset.balance}</div>
                  <div className="text-gray-600">{asset.value}</div>
                  <div
                    className={cn(
                      "flex items-center justify-end space-x-1 text-sm font-medium",
                      asset.trend === "up"
                        ? "text-green-600"
                        : asset.trend === "down"
                          ? "text-red-600"
                          : "text-gray-500",
                    )}
                  >
                    {asset.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : asset.trend === "down" ? (
                      <TrendingDown className="w-4 h-4" />
                    ) : null}
                    <span>{asset.change}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NFT Collection */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">NFT Collection</h2>
          <Button variant="outline" size="sm" className="border-purple-200 text-purple-600">
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Explorer
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <div
              key={nft.id}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-square bg-white rounded-xl mb-4 overflow-hidden">
                <img
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">{nft.name}</h3>
                  <span
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      nft.rarity === "Unique"
                        ? "bg-purple-100 text-purple-700"
                        : nft.rarity === "Rare"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-700",
                    )}
                  >
                    {nft.rarity}
                  </span>
                </div>
                <div className="text-sm text-gray-600">{nft.collection}</div>
                <div className="text-xs text-gray-500">{nft.description}</div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-gray-900">{nft.value}</span>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Asset Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Token Management</h3>
              <p className="text-blue-700 text-sm">Issue and manage custom tokens</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Issue New Token</div>
              <div className="text-sm text-blue-700">Create custom organizational tokens</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Manage Supply</div>
              <div className="text-sm text-blue-700">Mint or burn existing tokens</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Set Trustlines</div>
              <div className="text-sm text-blue-700">Configure asset trustlines</div>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-purple-900">NFT Operations</h3>
              <p className="text-purple-700 text-sm">Manage digital certificates and badges</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-purple-100/50 transition-colors">
              <div className="font-medium text-purple-900">Mint NFT</div>
              <div className="text-sm text-purple-700">Create new digital certificates</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-purple-100/50 transition-colors">
              <div className="font-medium text-purple-900">Transfer NFT</div>
              <div className="text-sm text-purple-700">Send to team members</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-purple-100/50 transition-colors">
              <div className="font-medium text-purple-900">Verify Authenticity</div>
              <div className="text-sm text-purple-700">Check certificate validity</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
