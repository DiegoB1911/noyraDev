"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Wallet,
  Key,
  Users,
  CheckCircle,
  Copy,
  Download,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const setupSteps = [
  { id: 1, title: "Organization Details", description: "Basic information about your organization" },
  { id: 2, title: "Security Setup", description: "Configure authentication and security" },
  { id: 3, title: "Seed Phrase", description: "Generate and backup your recovery phrase" },
  { id: 4, title: "Multi-signature", description: "Set up multi-signature accounts" },
  { id: 5, title: "Verification", description: "Verify your setup and complete onboarding" },
]

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

export function WalletSetup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    adminEmail: "",
    adminName: "",
    password: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    seedPhraseConfirmed: false,
    multisigThreshold: 3,
    multisigSigners: 5,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showSeedPhrase, setShowSeedPhrase] = useState(false)
  const [seedPhraseBackedUp, setSeedPhraseBackedUp] = useState(false)

  const nextStep = () => {
    if (currentStep < setupSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    // Redirect to dashboard
    window.location.href = "/noyra"
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Set Up Your Enterprise Wallet</h2>
          <p className="text-gray-600">Configure your organization's secure crypto wallet</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {setupSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                    currentStep >= step.id
                      ? "bg-blue-600 text-white"
                      : currentStep === step.id
                        ? "bg-blue-100 text-blue-600 border-2 border-blue-600"
                        : "bg-gray-200 text-gray-500",
                  )}
                >
                  {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                </div>
                {index < setupSteps.length - 1 && (
                  <div
                    className={cn(
                      "w-16 h-1 mx-2 transition-all",
                      currentStep > step.id ? "bg-blue-600" : "bg-gray-200",
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <h3 className="font-semibold text-gray-900">{setupSteps[currentStep - 1].title}</h3>
            <p className="text-gray-600 text-sm">{setupSteps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Setup Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
          {/* Step 1: Organization Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Organization Name</label>
                  <Input
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    placeholder="TechCorp Industries"
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Organization Type</label>
                  <select
                    value={formData.organizationType}
                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="corporation">Corporation</option>
                    <option value="llc">LLC</option>
                    <option value="partnership">Partnership</option>
                    <option value="dao">DAO</option>
                    <option value="nonprofit">Non-profit</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Administrator Name</label>
                  <Input
                    value={formData.adminName}
                    onChange={(e) => setFormData({ ...formData, adminName: e.target.value })}
                    placeholder="Alice Johnson"
                    className="bg-white border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Administrator Email</label>
                  <Input
                    type="email"
                    value={formData.adminEmail}
                    onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                    placeholder="alice@company.com"
                    className="bg-white border-gray-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Security Setup */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Master Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Create a strong password"
                    className="bg-white border-gray-200 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                <Input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm your password"
                  className="bg-white border-gray-200"
                />
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.twoFactorEnabled}
                    onChange={(e) => setFormData({ ...formData, twoFactorEnabled: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600"
                  />
                  <div>
                    <div className="font-medium text-blue-900">Enable Two-Factor Authentication</div>
                    <div className="text-blue-700 text-sm">Recommended for enterprise security</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Seed Phrase */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900">Your Recovery Seed Phrase</h3>
                    <p className="text-amber-700 text-sm">Write down these 12 words in order and store them safely</p>
                  </div>
                </div>

                {showSeedPhrase ? (
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
                        Copy
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-200 text-amber-600">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-500 mb-4">Seed phrase is hidden for security</div>
                    <Button
                      onClick={() => setShowSeedPhrase(true)}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Reveal Seed Phrase
                    </Button>
                  </div>
                )}
              </div>

              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <div className="flex items-center space-x-2 text-red-800 mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">Critical Security Warning</span>
                </div>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Never share your seed phrase with anyone</li>
                  <li>• Store it offline in a secure location</li>
                  <li>• Anyone with this phrase can access your funds</li>
                  <li>• Noyra cannot recover lost seed phrases</li>
                </ul>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={seedPhraseBackedUp}
                  onChange={(e) => setSeedPhraseBackedUp(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600"
                />
                <label className="text-sm text-gray-700">
                  I have safely backed up my seed phrase and understand the security implications
                </label>
              </div>
            </div>
          )}

          {/* Step 4: Multi-signature */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Multi-signature Configuration</h3>
                    <p className="text-blue-700 text-sm">Set up shared control over your organization's funds</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-900">Total Signers</label>
                    <select
                      value={formData.multisigSigners}
                      onChange={(e) => setFormData({ ...formData, multisigSigners: Number.parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white"
                    >
                      <option value={3}>3 signers</option>
                      <option value={5}>5 signers</option>
                      <option value={7}>7 signers</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-900">Required Signatures</label>
                    <select
                      value={formData.multisigThreshold}
                      onChange={(e) => setFormData({ ...formData, multisigThreshold: Number.parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white"
                    >
                      <option value={2}>2 of {formData.multisigSigners}</option>
                      <option value={3}>3 of {formData.multisigSigners}</option>
                      <option value={4}>4 of {formData.multisigSigners}</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-900 font-medium mb-2">Configuration Summary:</div>
                  <div className="text-blue-700 text-sm">
                    Your organization will require <strong>{formData.multisigThreshold}</strong> signatures out of{" "}
                    <strong>{formData.multisigSigners}</strong> total signers to approve transactions.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Verification */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Setup Complete!</h3>
                <p className="text-gray-600">Your enterprise wallet is ready to use</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-left">
                <h4 className="font-semibold text-gray-900 mb-4">Setup Summary:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Organization:</span>
                    <span className="font-medium">{formData.organizationName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Administrator:</span>
                    <span className="font-medium">{formData.adminEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Multi-sig:</span>
                    <span className="font-medium">
                      {formData.multisigThreshold} of {formData.multisigSigners} signatures
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">2FA:</span>
                    <span className="font-medium">{formData.twoFactorEnabled ? "Enabled" : "Disabled"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="border-gray-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < setupSteps.length ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  (currentStep === 3 && !seedPhraseBackedUp) ||
                  (currentStep === 1 && !formData.organizationName) ||
                  (currentStep === 2 && (!formData.password || formData.password !== formData.confirmPassword))
                }
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleComplete}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              >
                Complete Setup
                <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
