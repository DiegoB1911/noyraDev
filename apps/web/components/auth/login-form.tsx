"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wallet, Eye, EyeOff, Shield, Fingerprint, Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [twoFactorCode, setTwoFactorCode] = useState("")
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (!showTwoFactor) {
      setShowTwoFactor(true)
      setIsLoading(false)
    } else {
      // Redirect to dashboard
      window.location.href = "/noyra"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Wallet className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Noyra
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your enterprise wallet</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {!showTwoFactor ? (
              <>
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alice@company.com"
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Two-Factor Authentication */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Two-Factor Authentication</h3>
                  <p className="text-gray-600 text-sm">Enter the 6-digit code from your authenticator app</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Authentication Code</label>
                  <Input
                    type="text"
                    value={twoFactorCode}
                    onChange={(e) => setTwoFactorCode(e.target.value)}
                    placeholder="000000"
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-center text-lg tracking-widest"
                    maxLength={6}
                    required
                  />
                </div>

                {/* Alternative 2FA Methods */}
                <div className="flex space-x-2">
                  <Button type="button" variant="outline" className="flex-1 border-gray-200">
                    <Smartphone className="w-4 h-4 mr-2" />
                    SMS Code
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 border-gray-200">
                    <Fingerprint className="w-4 h-4 mr-2" />
                    Biometric
                  </Button>
                </div>
              </>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {showTwoFactor ? "Verifying..." : "Signing in..."}
                </div>
              ) : (
                <>
                  {showTwoFactor ? "Verify & Sign In" : "Sign In"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {showTwoFactor && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowTwoFactor(false)}
                className="w-full border-gray-200"
              >
                Back to Password
              </Button>
            )}
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-2 text-blue-800">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise Security</span>
            </div>
            <p className="text-blue-700 text-xs mt-1">
              Your connection is encrypted and monitored for security. All login attempts are logged.
            </p>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              New to Noyra?{" "}
              <Link href="/auth/setup" className="text-blue-600 hover:text-blue-700 font-medium">
                Set up your wallet
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Protected by enterprise-grade security</p>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <span>🔒 256-bit encryption</span>
            <span>🛡️ Multi-factor auth</span>
            <span>📱 Hardware wallet support</span>
          </div>
        </div>
      </div>
    </div>
  )
}
