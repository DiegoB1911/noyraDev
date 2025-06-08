"use client"

import { Vote, CheckCircle, XCircle, Users, Plus, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const proposals = [
  {
    id: "prop-001",
    title: "Q1 2025 Budget Allocation",
    description: "Approve budget distribution for marketing, development, and operations for Q1 2025",
    amount: "$500,000",
    proposer: "Alice Johnson",
    status: "active",
    votesFor: 3,
    votesAgainst: 1,
    totalVoters: 5,
    timeLeft: "2 days",
    category: "budget",
  },
  {
    id: "prop-002",
    title: "Add New Treasury Signer",
    description: "Proposal to add David Wilson as an authorized signer for the main treasury account",
    amount: "",
    proposer: "Bob Smith",
    status: "active",
    votesFor: 2,
    votesAgainst: 0,
    totalVoters: 5,
    timeLeft: "5 days",
    category: "governance",
  },
  {
    id: "prop-003",
    title: "Emergency Fund Threshold Change",
    description: "Reduce emergency fund signature requirement from 4/5 to 3/5 for faster response",
    amount: "",
    proposer: "Carol Davis",
    status: "passed",
    votesFor: 4,
    votesAgainst: 1,
    totalVoters: 5,
    timeLeft: "Completed",
    category: "security",
  },
  {
    id: "prop-004",
    title: "Vendor Payment Authorization",
    description: "Approve payment to TechCorp for Q4 development services",
    amount: "$75,000",
    proposer: "Eve Brown",
    status: "rejected",
    votesFor: 1,
    votesAgainst: 3,
    totalVoters: 5,
    timeLeft: "Completed",
    category: "payment",
  },
]

const votingHistory = [
  {
    proposal: "Q1 2025 Budget Allocation",
    voter: "Alice Johnson",
    vote: "for",
    timestamp: "2 hours ago",
  },
  {
    proposal: "Q1 2025 Budget Allocation",
    voter: "Bob Smith",
    vote: "for",
    timestamp: "4 hours ago",
  },
  {
    proposal: "Add New Treasury Signer",
    voter: "Carol Davis",
    vote: "for",
    timestamp: "1 day ago",
  },
  {
    proposal: "Emergency Fund Threshold Change",
    voter: "Eve Brown",
    vote: "against",
    timestamp: "2 days ago",
  },
]

export function NoyraGovernance() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">DAO Governance</h1>
          <p className="text-gray-600 mt-1">Create and vote on organizational proposals</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create Proposal
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Proposals", value: "2", icon: Vote, color: "text-blue-600", bgColor: "bg-blue-50" },
          { label: "Total Voters", value: "5", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
          {
            label: "Passed This Month",
            value: "8",
            icon: CheckCircle,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
          },
          {
            label: "Participation Rate",
            value: "94%",
            icon: TrendingUp,
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

      {/* Proposals List */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Proposals</h2>
          <div className="flex space-x-2">
            {["All", "Active", "Passed", "Rejected"].map((filter) => (
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
          {proposals.map((proposal, index) => (
            <div
              key={proposal.id}
              className="p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{proposal.title}</h3>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        proposal.category === "budget"
                          ? "bg-blue-100 text-blue-700"
                          : proposal.category === "governance"
                            ? "bg-purple-100 text-purple-700"
                            : proposal.category === "security"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700",
                      )}
                    >
                      {proposal.category}
                    </span>
                    {proposal.amount && <span className="text-lg font-bold text-gray-900">{proposal.amount}</span>}
                  </div>
                  <p className="text-gray-600 mb-3">{proposal.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Proposed by {proposal.proposer}</span>
                    <span>•</span>
                    <span>{proposal.timeLeft}</span>
                  </div>
                </div>

                <div
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    proposal.status === "active"
                      ? "bg-blue-100 text-blue-700"
                      : proposal.status === "passed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700",
                  )}
                >
                  {proposal.status}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">{proposal.votesFor} For</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-medium text-gray-900">{proposal.votesAgainst} Against</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {proposal.votesFor + proposal.votesAgainst}/{proposal.totalVoters} voted
                  </div>
                </div>

                {proposal.status === "active" && (
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      Vote For
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                      Vote Against
                    </Button>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Voting Progress</span>
                  <span>{Math.round(((proposal.votesFor + proposal.votesAgainst) / proposal.totalVoters) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((proposal.votesFor + proposal.votesAgainst) / proposal.totalVoters) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Voting Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Voting Activity</h2>
          <div className="space-y-4">
            {votingHistory.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50/80 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      activity.vote === "for" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600",
                    )}
                  >
                    {activity.vote === "for" ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{activity.voter}</div>
                    <div className="text-sm text-gray-500">
                      Voted <span className="font-medium">{activity.vote}</span> on "{activity.proposal}"
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">{activity.timestamp}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Vote className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-indigo-900">Governance Stats</h3>
              <p className="text-indigo-700 text-sm">This month's activity</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-indigo-700">Proposals Created</span>
              <span className="text-indigo-900 font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-700">Average Participation</span>
              <span className="text-indigo-900 font-medium">94%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-700">Fastest Decision</span>
              <span className="text-indigo-900 font-medium">2 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-indigo-700">Success Rate</span>
              <span className="text-indigo-900 font-medium">75%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
