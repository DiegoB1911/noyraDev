"use client"

import { useState } from "react"
import { Wifi, Shield, Globe, Zap, Users, ArrowUpRight, TrendingUp } from "lucide-react"

export function AnimatedWallet() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Wallet Container */}
      <div className="relative perspective-1000">
        {/* Wallet Stack */}
        <div
          className="relative w-96 h-64 cursor-pointer transition-all duration-500 transform-gpu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isHovered ? "rotateY(-15deg) rotateX(5deg)" : "rotateY(0deg) rotateX(0deg)",
          }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl scale-110"></div>

          {/* Main Card - Front */}
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl shadow-2xl border border-blue-500/20 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
              <div className="absolute top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Card content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-blue-300 text-sm font-medium mb-1">CRYPTO WALLET</div>
                  <div className="text-white text-3xl font-bold tracking-tight">NUMO</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Wifi className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Balance Section */}
              <div className="space-y-4">
                <div>
                  <div className="text-blue-200 text-sm font-medium">Total Balance</div>
                  <div className="text-white text-4xl font-bold">$24,589.42</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">+12.5%</span>
                    <span className="text-blue-200 text-sm">24h</span>
                  </div>
                </div>

                {/* Asset indicators */}
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">₿</span>
                    </div>
                    <span className="text-white text-sm">2.45 BTC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">Ξ</span>
                    </div>
                    <span className="text-white text-sm">15.8 ETH</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">★</span>
                    </div>
                    <span className="text-white text-sm">1.2K XLM</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-blue-200 text-xs">MULTI-SIG ENABLED</div>
                  <div className="text-white text-sm font-semibold">3 of 5 signatures</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-200 text-xs">STELLAR NETWORK</div>
                  <div className="text-white text-sm font-semibold">Enterprise Ready</div>
                </div>
              </div>
            </div>

            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full animate-shimmer"></div>
          </div>

          {/* Secondary cards behind */}
          <div className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl -z-10 transform rotate-2 opacity-60"></div>
          <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl -z-20 transform rotate-1 opacity-40"></div>
        </div>

        {/* Floating Stats */}
        {/* Portfolio Performance */}
        <div className="absolute -top-16 -right-32 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-float shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white/80 text-sm font-medium">Portfolio</div>
              <div className="text-white text-xl font-bold">+24.8%</div>
            </div>
          </div>
        </div>

        {/* Active Transactions */}
        <div className="absolute top-12 -left-32 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-float-delayed shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white/80 text-sm font-medium">Active</div>
              <div className="text-white text-xl font-bold">12 TXs</div>
            </div>
          </div>
        </div>

        {/* Security Status */}
        <div className="absolute -bottom-12 -left-28 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-float-slow shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white/80 text-sm font-medium">Security</div>
              <div className="text-white text-xl font-bold">Max</div>
            </div>
          </div>
        </div>

        {/* Global Access */}
        <div className="absolute -bottom-4 right-28 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-float shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white/80 text-sm font-medium">Global</div>
              <div className="text-white text-xl font-bold">24/7</div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="absolute -top-16 right-16 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-float-delayed shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white/80 text-sm font-medium">Team</div>
              <div className="text-white text-xl font-bold">8 Users</div>
            </div>
          </div>
        </div>

        {/* Interaction hint */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="text-black text-sm animate-pulse text-center">Hover to interact</div>
        </div>
      </div>
    </div>
  )
}
