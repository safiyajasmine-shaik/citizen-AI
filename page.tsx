"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  MessageSquare,
  Star,
  Send,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  LogOut,
  Filter,
  Download,
  Eye,
  Calendar,
} from "lucide-react"
import { Home, Car, GraduationCap, Heart, Building } from "lucide-react"

export default function GovernmentDashboard() {
  const [selectedFeedback, setSelectedFeedback] = useState(null)
  const [replyText, setReplyText] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  // Check authentication on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null")
    if (!user || user.userType !== "government") {
      // Redirect to login if not authenticated as government user
      window.location.href = "/login?type=government"
      return
    }
    setCurrentUser(user)
  }, [])

  // Mock data for citizen feedback
  const [citizenFeedback, setCitizenFeedback] = useState([
    {
      id: 1,
      citizenName: "John Smith",
      email: "john.smith@email.com",
      service: "Housing Services",
      serviceId: "HS-2024-001",
      rating: 5,
      feedback:
        "The housing application process was smooth and the AI assistant was very helpful. Got approval within 3 days!",
      date: new Date("2024-01-15"),
      status: "pending",
      priority: "medium",
      serviceStatus: "approved",
    },
    {
      id: 2,
      citizenName: "Sarah Johnson",
      email: "sarah.j@email.com",
      service: "Transportation",
      serviceId: "TR-2024-002",
      rating: 4,
      feedback: "Parking permit application was easy but took longer than expected. Could use faster processing.",
      date: new Date("2024-01-14"),
      status: "pending",
      priority: "low",
      serviceStatus: "approved",
    },
    {
      id: 3,
      citizenName: "Mike Davis",
      email: "mike.davis@email.com",
      service: "Health Services",
      serviceId: "HS-2024-003",
      rating: 2,
      feedback: "Had trouble booking vaccination appointment. System was slow and confusing. Need better interface.",
      date: new Date("2024-01-13"),
      status: "pending",
      priority: "high",
      serviceStatus: "pending",
    },
    {
      id: 4,
      citizenName: "Emma Wilson",
      email: "emma.w@email.com",
      service: "Business Permits",
      serviceId: "BP-2024-004",
      rating: 5,
      feedback: "Excellent service! Business license approved quickly. The document upload feature worked perfectly.",
      date: new Date("2024-01-12"),
      status: "replied",
      priority: "medium",
      serviceStatus: "approved",
      reply: "Thank you for your positive feedback! We're glad the process was smooth for you.",
    },
  ])

  // Mock data for service requests that includes citizen applications
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: "HS-2024-005",
      citizenName: "Alice Brown",
      email: "alice.brown@email.com",
      service: "Housing Services",
      requestType: "Emergency Housing Assistance",
      description:
        "Single mother with 2 children facing immediate eviction. Lost job due to company closure and need urgent housing assistance.",
      submittedDate: new Date("2024-01-16"),
      status: "pending",
      priority: "urgent",
      urgentIssue: "Eviction notice expires in 3 days - family will be homeless",
      applicationDetails: {
        familySize: "3 (mother + 2 children ages 5 and 8)",
        currentIncome: "$0 (recently unemployed)",
        currentHousing: "Rental apartment - eviction pending",
        assistanceNeeded: "Emergency housing placement",
        timeframe: "Immediate (within 72 hours)",
      },
      documents: ["eviction_notice.pdf", "termination_letter.pdf", "children_school_records.pdf", "id_documents.pdf"],
      serviceIcon: Home,
    },
    {
      id: "TR-2024-006",
      citizenName: "Robert Wilson",
      email: "robert.w@email.com",
      service: "Transportation",
      requestType: "Commercial Food Truck Permit",
      description:
        "Applying for permit to operate food truck in downtown business district. Family business serving authentic Mexican cuisine.",
      submittedDate: new Date("2024-01-15"),
      status: "pending",
      priority: "medium",
      urgentIssue: "Business loan payment due soon - need to start operations",
      applicationDetails: {
        businessName: "Wilson's Authentic Tacos",
        vehicleType: "2020 Ford Transit Food Truck",
        operatingHours: "11 AM - 8 PM, Monday-Saturday",
        proposedLocation: "Downtown Business District",
        expectedCustomers: "50-100 per day",
      },
      documents: ["business_license.pdf", "vehicle_inspection.pdf", "health_permit.pdf", "insurance_cert.pdf"],
      serviceIcon: Car,
    },
    {
      id: "ED-2024-007",
      citizenName: "Maria Garcia",
      email: "maria.g@email.com",
      service: "Education Services",
      requestType: "Special Education Services",
      description:
        "Requesting special education evaluation and services for 7-year-old son with learning disabilities.",
      submittedDate: new Date("2024-01-14"),
      status: "approved",
      priority: "high",
      urgentIssue: "Child falling behind in current grade level",
      applicationDetails: {
        studentName: "Carlos Garcia",
        studentAge: "7 years old",
        currentGrade: "2nd Grade",
        concernedAreas: "Reading comprehension, attention span",
        requestedServices: "Educational assessment, IEP development",
      },
      documents: ["medical_records.pdf", "teacher_reports.pdf", "previous_assessments.pdf"],
      serviceIcon: GraduationCap,
    },
  ])

  // State for citizen problems (reported issues)
  const [citizenProblems, setCitizenProblems] = useState([])

  // Add this useEffect after the existing state declarations
  useEffect(() => {
    // Load applications from localStorage (simulating backend data)
    const loadApplicationsFromStorage = () => {
      const storedApplications = JSON.parse(localStorage.getItem("citizenApplications") || "[]")
      const storedProblems = JSON.parse(localStorage.getItem("citizenProblems") || "[]")

      if (storedApplications.length > 0) {
        // Convert stored applications to the format expected by the government dashboard
        const formattedApplications = storedApplications.map((app) => ({
          ...app,
          submittedDate: new Date(app.submittedDate),
          serviceIcon: getServiceIcon(app.service),
        }))

        // Add new applications to existing ones (avoiding duplicates)
        setServiceRequests((prev) => {
          const existingIds = prev.map((req) => req.id)
          const newApplications = formattedApplications.filter((app) => !existingIds.includes(app.id))
          return [...newApplications, ...prev]
        })
      }

      // Load citizen problems
      if (storedProblems.length > 0) {
        setCitizenProblems(
          storedProblems.map((problem) => ({
            ...problem,
            submittedDate: new Date(problem.submittedDate),
          })),
        )
      }
    }

    // Load applications on component mount
    loadApplicationsFromStorage()

    // Set up polling to check for new applications every 10 seconds
    const interval = setInterval(loadApplicationsFromStorage, 10000)

    return () => clearInterval(interval)
  }, [])

  // Helper function to get service icon
  const getServiceIcon = (serviceName) => {
    switch (serviceName) {
      case "Housing Services":
        return Home
      case "Transportation":
        return Car
      case "Education Services":
        return GraduationCap
      case "Health Services":
        return Heart
      case "Business Permits":
        return Building
      default:
        return Building
    }
  }

  const handleFeedbackReply = (feedbackId: number) => {
    setCitizenFeedback((prev) =>
      prev.map((feedback) =>
        feedback.id === feedbackId ? { ...feedback, status: "replied", reply: replyText } : feedback,
      ),
    )
    setReplyText("")
    setSelectedFeedback(null)
    alert("Reply sent successfully!")
  }

  const handleServiceRequest = (requestId: string, action: "approve" | "reject") => {
    setServiceRequests((prev) =>
      prev.map((request) =>
        request.id === requestId ? { ...request, status: action === "approve" ? "approved" : "rejected" } : request,
      ),
    )
    alert(`Service request ${action}d successfully! Citizen will be notified via email.`)
  }

  const handleProblemResponse = (problemId: number, response: string) => {
    setCitizenProblems((prev) =>
      prev.map((problem) =>
        problem.id === problemId ? { ...problem, status: "responded", response: response } : problem,
      ),
    )
    alert("Response sent to citizen successfully!")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "replied":
        return "bg-blue-100 text-blue-800"
      case "responded":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      case "urgent":
        return "bg-red-500 text-white"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    window.location.href = "/login?type=government"
  }

  // Show loading if user not loaded yet
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Citizen AI - Government Portal</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>
                  {currentUser.firstName?.[0]}
                  {currentUser.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
                <p className="text-gray-500">{currentUser.department} Department</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {serviceRequests.filter((r) => r.status === "pending").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Reported Problems</p>
                  <p className="text-2xl font-bold text-red-600">
                    {citizenProblems.filter((p) => p.status === "pending").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New Feedback</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {citizenFeedback.filter((f) => f.status === "pending").length}
                  </p>
                </div>
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved Today</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {serviceRequests.filter((r) => r.status === "approved").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add this after the existing stats cards, before the main tabs */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-900">Real-Time Updates</h3>
              <p className="text-xs text-blue-700">
                New citizen applications and problems appear automatically. Last updated:{" "}
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="problems" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-lg">
            <TabsTrigger value="problems">Citizen Problems</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="services">Service Requests</TabsTrigger>
          </TabsList>

          {/* Citizen Problems Tab */}
          <TabsContent value="problems" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Citizen Reported Problems</h2>
                <p className="text-gray-600">Review and respond to problems reported by citizens</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Priority
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {citizenProblems.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Problems Reported</h3>
                    <p className="text-gray-600">
                      When citizens report problems with their service applications, they will appear here for review.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                citizenProblems.map((problem) => (
                  <Card key={problem.id} className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>
                              {problem.citizenName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{problem.citizenName}</p>
                            <p className="text-sm text-gray-600">{problem.email}</p>
                            <p className="text-xs text-gray-500">Application ID: {problem.applicationId}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getPriorityColor(problem.priority)}>{problem.priority}</Badge>
                          <Badge className={getStatusColor(problem.status)}>{problem.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Service: {problem.service}</p>
                          <p className="text-xs text-gray-500">
                            Reported: {problem.submittedDate.toLocaleDateString()} at{" "}
                            {problem.submittedDate.toLocaleTimeString()}
                          </p>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">Reported Problem:</span>
                          </div>
                          <p className="text-sm text-red-700">{problem.problemDescription}</p>
                        </div>

                        {problem.status === "pending" && (
                          <div className="border-t pt-4">
                            <Label htmlFor={`response-${problem.id}`} className="text-sm font-medium">
                              Government Response
                            </Label>
                            <div className="mt-2 space-y-3">
                              <Textarea
                                id={`response-${problem.id}`}
                                placeholder="Provide a detailed response addressing the citizen's problem..."
                                className="min-h-[100px]"
                              />
                              <div className="flex space-x-2">
                                <Button
                                  onClick={(e) => {
                                    const textarea = e.target.closest(".space-y-3").querySelector("textarea")
                                    if (textarea.value.trim()) {
                                      handleProblemResponse(problem.id, textarea.value)
                                      textarea.value = ""
                                    } else {
                                      alert("Please enter a response message.")
                                    }
                                  }}
                                  className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                  <Send className="w-4 h-4 mr-2" />
                                  Send Response
                                </Button>
                                <Button
                                  onClick={() => {
                                    setCitizenProblems((prev) =>
                                      prev.map((p) => (p.id === problem.id ? { ...p, status: "acknowledged" } : p)),
                                    )
                                    alert("Problem acknowledged! Citizen will be notified that we're working on it.")
                                  }}
                                  variant="outline"
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Acknowledge Problem
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}

                        {problem.response && (
                          <div className="border-t pt-4">
                            <p className="text-sm font-medium text-gray-600 mb-2">Your Response:</p>
                            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                              <p className="text-sm text-emerald-800">{problem.response}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Citizen Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Citizen Feedback Management</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {citizenFeedback.map((feedback) => (
                <Card key={feedback.id} className="border-l-4 border-l-emerald-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {feedback.citizenName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{feedback.citizenName}</p>
                          <p className="text-sm text-gray-600">{feedback.email}</p>
                          <p className="text-xs text-gray-500">Service ID: {feedback.serviceId}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(feedback.priority)}>{feedback.priority}</Badge>
                        <Badge className={getStatusColor(feedback.status)}>{feedback.status}</Badge>
                        <Badge className={getStatusColor(feedback.serviceStatus)}>
                          Service: {feedback.serviceStatus}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">Service: {feedback.service}</span>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= feedback.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">({feedback.rating}/5)</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">{feedback.feedback}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Submitted: {feedback.date.toLocaleDateString()} at {feedback.date.toLocaleTimeString()}
                        </p>
                      </div>

                      {feedback.status === "pending" && (
                        <div className="border-t pt-4">
                          <Label htmlFor={`reply-${feedback.id}`} className="text-sm font-medium">
                            Reply to Citizen
                          </Label>
                          <div className="flex space-x-2 mt-2">
                            <Textarea
                              id={`reply-${feedback.id}`}
                              placeholder="Type your response to the citizen..."
                              value={selectedFeedback === feedback.id ? replyText : ""}
                              onChange={(e) => {
                                setSelectedFeedback(feedback.id)
                                setReplyText(e.target.value)
                              }}
                              className="flex-1"
                              rows={3}
                            />
                            <div className="flex flex-col space-y-2">
                              <Button
                                onClick={() => handleFeedbackReply(feedback.id)}
                                disabled={!replyText.trim()}
                                className="bg-emerald-600 hover:bg-emerald-700"
                                size="sm"
                              >
                                <Send className="w-4 h-4 mr-1" />
                                Send Reply
                              </Button>
                              <Button
                                onClick={() => {
                                  setCitizenFeedback((prev) =>
                                    prev.map((f) => (f.id === feedback.id ? { ...f, status: "acknowledged" } : f)),
                                  )
                                  alert("Feedback acknowledged!")
                                }}
                                variant="outline"
                                size="sm"
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Acknowledge
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {feedback.reply && (
                        <div className="border-t pt-4">
                          <p className="text-sm font-medium text-gray-600 mb-2">Your Reply:</p>
                          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                            <p className="text-sm text-emerald-800">{feedback.reply}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Service Requests Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Service Request Management</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {serviceRequests.map((request) => (
                <Card
                  key={request.id}
                  className="border-l-4"
                  style={{ borderLeftColor: request.priority === "urgent" ? "#dc2626" : "#3b82f6" }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {request.citizenName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{request.citizenName}</p>
                          <p className="text-sm text-gray-600">{request.email}</p>
                          <p className="text-xs text-gray-500">Request ID: {request.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Service Type</p>
                          <p className="text-gray-900">{request.service}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Request Type</p>
                          <p className="text-gray-900">{request.requestType}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Description</p>
                        <p className="text-gray-700">{request.description}</p>
                      </div>

                      {request.urgentIssue && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-1">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">Urgent Issue Reported:</span>
                          </div>
                          <p className="text-sm text-red-700">{request.urgentIssue}</p>
                        </div>
                      )}

                      {request.problemReport && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-1">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">Problem Reported by Citizen:</span>
                          </div>
                          <p className="text-sm text-amber-700">{request.problemReport}</p>
                        </div>
                      )}

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-600 mb-2">Application Details:</p>
                        <div className="grid md:grid-cols-2 gap-2 text-sm">
                          {Object.entries(request.applicationDetails).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-medium text-gray-700">
                                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                              </span>
                              <span className="text-gray-600 ml-2">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Submitted Documents:</p>
                        <div className="flex flex-wrap gap-2">
                          {request.documents.map((doc, index) => (
                            <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                              <Eye className="w-3 h-3 mr-1" />
                              {doc}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Submitted: {request.submittedDate.toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {Math.ceil(
                              (new Date().getTime() - request.submittedDate.getTime()) / (1000 * 60 * 60 * 24),
                            )}{" "}
                            days ago
                          </div>
                        </div>
                      </div>

                      {request.status === "pending" && (
                        <div className="flex space-x-3 pt-4 border-t">
                          <Button
                            onClick={() => handleServiceRequest(request.id, "approve")}
                            className="bg-green-600 hover:bg-green-700 flex-1"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve Request
                          </Button>
                          <Button
                            onClick={() => handleServiceRequest(request.id, "reject")}
                            variant="destructive"
                            className="flex-1"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject Request
                          </Button>
                        </div>
                      )}

                      {request.status === "approved" && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-800">
                              Request Approved - Citizen has been notified
                            </span>
                          </div>
                        </div>
                      )}

                      {request.status === "rejected" && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">
                              Request Rejected - Citizen has been notified
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
