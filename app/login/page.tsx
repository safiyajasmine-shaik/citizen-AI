"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Brain, ArrowLeft, Eye, EyeOff, Shield, Users } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const userType = searchParams.get("type") || "citizen"

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const loginData = Object.fromEntries(formData.entries())

    // Simulate login process
    setTimeout(() => {
      // Check if user exists in localStorage
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
      const user = registeredUsers.find((u: any) => u.email === loginData.email && u.userType === userType)

      if (!user) {
        alert("Account not found. Please create an account first.")
        setIsLoading(false)
        return
      }

      if (user.password !== loginData.password) {
        alert("Invalid password. Please try again.")
        setIsLoading(false)
        return
      }

      // Store current user session
      localStorage.setItem("currentUser", JSON.stringify(user))

      setIsLoading(false)
      // Redirect to appropriate dashboard after successful login
      if (userType === "citizen") {
        window.location.href = "/dashboard"
      } else {
        window.location.href = "/government"
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Citizen AI</span>
          </Link>
          <Link href="/" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your Citizen AI account</p>
          </div>

          <Tabs defaultValue={userType} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="citizen" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Citizen</span>
              </TabsTrigger>
              <TabsTrigger value="government" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Government</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="citizen">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">Citizen Portal</CardTitle>
                  <CardDescription>Access government services and submit inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="citizen-email">Email Address</Label>
                      <Input
                        id="citizen-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="citizen-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="citizen-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          required
                          className="h-11 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-gray-600">Remember me</span>
                      </label>
                      <Link href="#" className="text-emerald-600 hover:text-emerald-700">
                        Forgot password?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-emerald-600 hover:bg-emerald-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <Separator className="my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        {"Don't have an account? "}
                        <Link
                          href="/register?type=citizen"
                          className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          Create Account
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="government">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">Government Dashboard</CardTitle>
                  <CardDescription>Access analytics and manage citizen interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="gov-email">Official Email Address</Label>
                      <Input
                        id="gov-email"
                        name="email"
                        type="email"
                        placeholder="Enter your government email"
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gov-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="gov-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          required
                          className="h-11 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-gray-600">Remember me</span>
                      </label>
                      <Link href="#" className="text-emerald-600 hover:text-emerald-700">
                        Forgot password?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-emerald-600 hover:bg-emerald-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Access Dashboard"}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <Separator className="my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Need access?
                        <Link
                          href="/register?type=government"
                          className="text-emerald-600 hover:text-emerald-700 font-medium ml-1"
                        >
                          Create Government Account
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-blue-900">Secure Access</h3>
                <p className="text-xs text-blue-700 mt-1">
                  Your connection is encrypted and secure. All government data is protected according to federal
                  security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t bg-white">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>
            &copy; 2024 Citizen AI. All rights reserved. |
            <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
