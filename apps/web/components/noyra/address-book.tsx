"use client"

import { BookOpen, Plus, Search, Star, Building, Users, Globe, MoreHorizontal, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const contacts = [
  {
    id: "contact-001",
    name: "TechCorp Vendor",
    type: "vendor",
    address: "GCKFBEIYTKP4RQVWSXGZRJSAYWDPZU6XLMVQMU",
    description: "Primary development vendor",
    tags: ["vendor", "development", "trusted"],
    lastUsed: "2 hours ago",
    totalTransactions: 45,
    totalVolume: "$2.4M",
    favorite: true,
    verified: true,
  },
  {
    id: "contact-002",
    name: "Alice Johnson (Personal)",
    type: "internal",
    address: "GDQVUOKLT4K2VBXJUR7NRTYUIOPASDFGHJKLZXC",
    description: "CEO personal wallet",
    tags: ["internal", "executive"],
    lastUsed: "1 day ago",
    totalTransactions: 12,
    totalVolume: "$156K",
    favorite: true,
    verified: true,
  },
  {
    id: "contact-003",
    name: "Exchange Hot Wallet",
    type: "exchange",
    address: "GBVFFRGWER2QWERTYUIOPASDFGHJKLZXCVBNM",
    description: "Binance hot wallet for trading",
    tags: ["exchange", "trading"],
    lastUsed: "3 days ago",
    totalTransactions: 89,
    totalVolume: "$890K",
    favorite: false,
    verified: true,
  },
  {
    id: "contact-004",
    name: "Legal Services LLC",
    type: "vendor",
    address: "GCXZASDQWE123QWERTYUIOPASDFGHJKLZXCVB",
    description: "Corporate legal services",
    tags: ["vendor", "legal", "compliance"],
    lastUsed: "1 week ago",
    totalTransactions: 8,
    totalVolume: "$75K",
    favorite: false,
    verified: true,
  },
  {
    id: "contact-005",
    name: "Marketing Agency",
    type: "vendor",
    address: "GDASDQWERTY456UIOPASDFGHJKLZXCVBNMQWE",
    description: "Digital marketing services",
    tags: ["vendor", "marketing"],
    lastUsed: "2 weeks ago",
    totalTransactions: 15,
    totalVolume: "$245K",
    favorite: false,
    verified: false,
  },
  {
    id: "contact-006",
    name: "Emergency Multisig",
    type: "internal",
    address: "GQWERTYUIOP789ASDFGHJKLZXCVBNMQWERTY",
    description: "Emergency fund multisig account",
    tags: ["internal", "emergency", "multisig"],
    lastUsed: "1 month ago",
    totalTransactions: 3,
    totalVolume: "$50K",
    favorite: true,
    verified: true,
  },
]

const contactTypes = [
  { name: "All", count: 156, icon: Globe },
  { name: "Internal", count: 24, icon: Users },
  { name: "Vendors", count: 89, icon: Building },
  { name: "Exchanges", count: 12, icon: ExternalLink },
  { name: "Favorites", count: 18, icon: Star },
]

export function NoyraAddressBook() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Address Book</h1>
          <p className="text-gray-600 mt-1">Manage contacts, vendors, and frequently used addresses</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Contact
        </Button>
      </div>

      {/* Contact Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Contacts", value: "156", icon: BookOpen, color: "text-blue-600", bgColor: "bg-blue-50" },
          { label: "Verified Addresses", value: "142", icon: Star, color: "text-green-600", bgColor: "bg-green-50" },
          { label: "Active This Month", value: "89", icon: Users, color: "text-purple-600", bgColor: "bg-purple-50" },
          { label: "Favorite Contacts", value: "18", icon: Star, color: "text-amber-600", bgColor: "bg-amber-50" },
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

      {/* Search and Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search contacts by name, address, or tags..."
              className="pl-10 bg-white border-gray-200"
            />
          </div>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700">
              <option>All Types</option>
              <option>Internal</option>
              <option>Vendors</option>
              <option>Exchanges</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700">
              <option>Sort by Name</option>
              <option>Sort by Last Used</option>
              <option>Sort by Volume</option>
            </select>
          </div>
        </div>

        {/* Contact Type Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {contactTypes.map((type, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                index === 0 ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-100",
              )}
            >
              <type.icon className="w-4 h-4" />
              <span>
                {type.name} ({type.count})
              </span>
            </button>
          ))}
        </div>

        {/* Contacts List */}
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className="p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-gray-50/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      contact.type === "internal"
                        ? "bg-blue-100 text-blue-600"
                        : contact.type === "vendor"
                          ? "bg-green-100 text-green-600"
                          : "bg-purple-100 text-purple-600",
                    )}
                  >
                    {contact.type === "internal" ? (
                      <Users className="w-6 h-6" />
                    ) : contact.type === "vendor" ? (
                      <Building className="w-6 h-6" />
                    ) : (
                      <ExternalLink className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      {contact.favorite && <Star className="w-4 h-4 text-amber-500 fill-current" />}
                      {contact.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                      <span
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          contact.type === "internal"
                            ? "bg-blue-100 text-blue-700"
                            : contact.type === "vendor"
                              ? "bg-green-100 text-green-700"
                              : "bg-purple-100 text-purple-700",
                        )}
                      >
                        {contact.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{contact.description}</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono">
                        {contact.address.slice(0, 20)}...
                      </code>
                      <Button variant="outline" size="sm" className="border-gray-200 p-1">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {contact.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Last used: {contact.lastUsed}</span>
                      <span>•</span>
                      <span>{contact.totalTransactions} transactions</span>
                      <span>•</span>
                      <span>Volume: {contact.totalVolume}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="border-blue-200 text-blue-600">
                    Send
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200 p-2">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">Showing 1-10 of 156 contacts</div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-gray-200">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="border-gray-200">
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Quick Add</h3>
              <p className="text-blue-700 text-sm">Add contacts from recent transactions</p>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Import from CSV</div>
              <div className="text-sm text-blue-700">Bulk import contact list</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Add from Transaction</div>
              <div className="text-sm text-blue-700">Create contact from recent TX</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-blue-100/50 transition-colors">
              <div className="font-medium text-blue-900">Scan QR Code</div>
              <div className="text-sm text-blue-700">Add contact via QR scan</div>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-green-900">Address Verification</h3>
              <p className="text-green-700 text-sm">Verify and validate addresses</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-green-700">Verified Addresses</span>
              <span className="text-green-900 font-medium">142/156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Pending Verification</span>
              <span className="text-green-900 font-medium">14</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-700">Verification Rate</span>
              <span className="text-green-900 font-medium">91%</span>
            </div>
            <button className="w-full text-left p-3 rounded-lg hover:bg-green-100/50 transition-colors mt-3">
              <div className="font-medium text-green-900">Verify All Pending</div>
              <div className="text-sm text-green-700">Run batch verification</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
