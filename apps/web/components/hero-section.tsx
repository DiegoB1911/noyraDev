"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"
import { AnimatedWallet } from "./animated-wallet"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background with geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-200/40 to-blue-300/40 rounded-full blur-lg"></div>

        {/* Floating geometric elements */}
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-indigo-400/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400/60 rounded-full animate-ping"></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200/50 shadow-sm">
              <Zap className="w-4 h-4" />
              <span>Built for Stellar Blockchain</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Modular Crypto
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Wallet for Teams
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Empower your organization with advanced multisig capabilities, DAO governance, and seamless DeFi
              integration on Stellar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-4 text-lg font-semibold border-2 hover:bg-white/80 backdrop-blur-sm bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden hover:border-blue-300"
            >
              <span className="relative z-10">View Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="flex items-center space-x-2 text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-medium">Bank-grade Security</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Multi-signature</span>
            </div>
          </div>
        </div>

        {/* Right Animated Card */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          <AnimatedWallet />
        </div>
      </div>

      {/* Wave separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
