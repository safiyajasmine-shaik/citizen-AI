"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Brain, ArrowLeft, Eye, EyeOff, Shield, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const searchParams = useSearchParams()
  const userType = searchParams.get("type") || "citizen"

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const userData = Object.fromEntries(formData.entries())

    // Validate passwords match
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!")
      setIsLoading(false)
      return
    }

    // Simulate registration process
    setTimeout(() => {
      // Store user data in localStorage (in real app, this would be sent to backend)
      const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

      // Check if user already exists
      const userExists = existingUsers.some((user: any) => user.email === userData.email && user.userType === userType)

      if (userExists) {
        alert("An account with this email already exists!")
        setIsLoading(false)
        return
      }

      const newUser = {
        id: Date.now().toString(),
        ...userData,
        userType,
        createdAt: new Date().toISOString(),
      }

      existingUsers.push(newUser)
      localStorage.setItem("registeredUsers", JSON.stringify(existingUsers))

      setIsLoading(false)
      setRegistrationSuccess(true)
    }, 2000)
  }

  if (registrationSuccess) {
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
          </div>
        </header>

        {/* Success Message */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-green-800">Account Created Successfully!</CardTitle>
              <CardDescription>
                Your {userType} account has been created. You can now sign in to access the platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/login?type=${userType}`}>
                <Button className="w-full h-11 bg-emerald-600 hover:bg-emerald-700">Sign In to Your Account</Button>
              </Link>
              <div className="mt-4 text-center">
                <Link href="/" className="text-sm text-gray-600 hover:text-emerald-600">
                  Return to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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
          <Link href="/login" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign In
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join Citizen AI to access government services</p>
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
                  <CardTitle className="text-xl">Citizen Registration</CardTitle>
                  <CardDescription>Create your account to access government services</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="John" required className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" required className="h-11" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="citizen-email">Email Address</Label>
                      <Input
                        id="citizen-email"
                        name="email"
                        type="email"
                        placeholder="john.doe@email.com"
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="123 Main St, City, State 12345"
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
                          placeholder="Create a strong password"
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
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          required
                          className="h-11 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" required className="rounded border-gray-300" />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link href="/terms" className="text-emerald-600 hover:text-emerald-700">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-emerald-600 hover:bg-emerald-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Citizen Account"}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <Separator className="my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                          href="/login?type=citizen"
                          className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          Sign In
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
                  <CardTitle className="text-xl">Government Registration</CardTitle>
                  <CardDescription>Create your government account to manage citizen services</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gov-firstName">First Name</Label>
                        <Input id="gov-firstName" name="firstName" placeholder="Jane" required className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gov-lastName">Last Name</Label>
                        <Input id="gov-lastName" name="lastName" placeholder="Smith" required className="h-11" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gov-email">Official Email Address</Label>
                      <Input
                        id="gov-email"
                        name="email"
                        type="email"
                        placeholder="jane.smith@cityai.gov"
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employeeId">Employee ID</Label>
                      <Input id="employeeId" name="employeeId" placeholder="EMP-2024-001" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <select
                        id="department"
                        name="department"
                        className="w-full h-11 px-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="health">Health Services</option>
                        <option value="transport">Transportation</option>
                        <option value="education">Education</option>
                        <option value="housing">Housing</option>
                        <option value="business">Business & Permits</option>
                        <option value="admin">Administration</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position/Title</Label>
                      <Input
                        id="position"
                        name="position"
                        placeholder="Service Coordinator"
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
                          placeholder="Create a strong password"
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
                    <div className="space-y-2">
                      <Label htmlFor="gov-confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="gov-confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          required
                          className="h-11 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="gov-terms" required className="rounded border-gray-300" />
                      <label htmlFor="gov-terms" className="text-sm text-gray-600">
                        I agree to the government{" "}
                        <Link href="/terms" className="text-emerald-600 hover:text-emerald-700">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-emerald-600 hover:bg-emerald-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Government Account"}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <Separator className="my-4" />
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                          href="/login?type=government"
                          className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          Sign In
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
                <h3 className="text-sm font-medium text-blue-900">Secure Registration</h3>
                <p className="text-xs text-blue-700 mt-1">
                  Your information is encrypted and secure. All accounts are verified before activation.
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
