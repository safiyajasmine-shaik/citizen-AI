"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
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
  Building,
  Home,
  Car,
  GraduationCap,
  Heart,
} from "lucide-react"
import Link from "next/link"

export default function GovernmentDashboard() {
  const [selectedFeedback, setSelectedFeedback] = useState(null)
  const [replyText, setReplyText] = useState("")

  // Mock data for citizen feedback with issues
  const [citizenFeedback, setCitizenFeedback] = useState([
    {
      id: 1,
      citizenName: "John Smith",
      email: "john.smith@email.com",
      service: "Housing Services",
      serviceId: "HS-2024-001",
      rating: 2,
      feedback:
        "The housing application process was confusing and took too long. I had to visit the office multiple times because the online system kept crashing.",
      issue: "System crashes during application submission",
      date: new Date("2024-01-15"),
      status: "pending",
      priority: "high",
      urgency: "System technical issues affecting multiple users",
    },
    {
      id: 2,
      citizenName: "Sarah Johnson",
      email: "sarah.j@email.com",
      service: "Transportation",
      serviceId: "TR-2024-002",
      rating: 3,
      feedback:
        "Parking permit application was okay but the processing time was much longer than advertised. Website said 3 days but it took 2 weeks.",
      issue: "Processing delays beyond advertised timeframe",
      date: new Date("2024-01-14"),
      status: "pending",
      priority: "medium",
      urgency: "Processing time expectations not met",
    },
    {
      id: 3,
      citizenName: "Mike Davis",
      email: "mike.davis@email.com",
      service: "Health Services",
      serviceId: "HS-2024-003",
      rating: 1,
      feedback:
        "Terrible experience trying to book vaccination appointment. The system is completely broken and customer service was unhelpful.",
      issue: "Booking system malfunction and poor customer service",
      date: new Date("2024-01-13"),
      status: "pending",
      priority: "high",
      urgency: "Critical system failure affecting public health services",
    },
    {
      id: 4,
      citizenName: "Emma Wilson",
      email: "emma.w@email.com",
      service: "Business Permits",
      serviceId: "BP-2024-004",
      rating: 4,
      feedback:
        "Overall good experience but the document upload feature could be improved. Had some issues with file size limits.",
      issue: "Document upload limitations",
      date: new Date("2024-01-12"),
      status: "replied",
      priority: "low",
      urgency: "Minor technical improvement needed",
      reply:
        "Thank you for your feedback! We're working on increasing file size limits and improving the upload interface. We'll notify you when these improvements are implemented.",
    },
  ])

  // Mock data for service access requests that need approval
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
    {
      id: "HL-2024-008",
      citizenName: "David Kim",
      email: "david.kim@email.com",
      service: "Health Services",
      requestType: "Medical Assistance Program",
      description: "Applying for medical assistance due to chronic illness and inability to afford treatment.",
      submittedDate: new Date("2024-01-13"),
      status: "pending",
      priority: "urgent",
      urgentIssue: "Requires ongoing medication that is currently unaffordable",
      applicationDetails: {
        medicalCondition: "Type 1 Diabetes",
        monthlyMedicationCost: "$400",
        currentIncome: "$1,200/month",
        insuranceStatus: "Uninsured",
        treatmentUrgency: "Daily insulin required",
      },
      documents: ["medical_diagnosis.pdf", "prescription_records.pdf", "income_statement.pdf", "bank_statements.pdf"],
      serviceIcon: Heart,
    },
    {
      id: "BP-2024-009",
      citizenName: "Lisa Chen",
      email: "lisa.chen@email.com",
      service: "Business Permits",
      requestType: "Home Daycare License",
      description: "Applying for license to operate home-based daycare for up to 6 children in residential area.",
      submittedDate: new Date("2024-01-12"),
      status: "pending",
      priority: "medium",
      urgentIssue: "Parents already committed to enrollment starting next month",
      applicationDetails: {
        businessType: "Home-based childcare",
        maxChildren: "6 children (ages 2-5)",
        operatingHours: "7 AM - 6 PM, Monday-Friday",
        homeAddress: "123 Maple Street, Residential Zone",
        experience: "10 years childcare experience, Early Childhood Education degree",
      },
      documents: ["home_inspection.pdf", "background_check.pdf", "education_certificates.pdf", "references.pdf"],
      serviceIcon: Building,
    },
  ])

  const handleFeedbackReply = (feedbackId: number) => {
    if (!replyText.trim()) {
      alert("Please enter a reply message.")
      return
    }

    setCitizenFeedback((prev) =>
      prev.map((feedback) =>
        feedback.id === feedbackId ? { ...feedback, status: "replied", reply: replyText } : feedback,
      ),
    )
    setReplyText("")
    setSelectedFeedback(null)
    alert("Reply sent successfully! The citizen will be notified via email.")
  }

  const handleServiceRequest = (requestId: string, action: "approve" | "reject", reason?: string) => {
    setServiceRequests((prev) =>
      prev.map((request) =>
        request.id === requestId
          ? {
              ...request,
              status: action === "approve" ? "approved" : "rejected",
              actionReason:
                reason ||
                (action === "approve"
                  ? "Application meets all requirements"
                  : "Application requires additional documentation"),
            }
          : request,
      ),
    )

    const actionText = action === "approve" ? "approved" : "rejected"
    alert(`Service request ${actionText} successfully! Citizen will be notified via email with next steps.`)
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
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-300"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "low":
        return "bg-green-100 text-green-800 border-green-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
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
                <AvatarFallback>GA</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Government Admin</p>
                <p className="text-gray-500">Multi-Department Access</p>
              </div>
            </div>
            <Link href="/login">
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </Link>
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
                  <p className="text-sm font-medium text-gray-600">Pending Issues</p>
                  <p className="text-2xl font-bold text-red-600">
                    {citizenFeedback.filter((f) => f.status === "pending").length}
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
                  <p className="text-sm font-medium text-gray-600">Service Requests</p>
                  <p className="text-2xl font-bold text-yellow-600">
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
                  <p className="text-sm font-medium text-gray-600">Approved Today</p>
                  <p className="text-2xl font-bold text-green-600">
                    {serviceRequests.filter((r) => r.status === "approved").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Urgent Cases</p>
                  <p className="text-2xl font-bold text-red-600">
                    {serviceRequests.filter((r) => r.priority === "urgent").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="issues" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="issues">Citizen Issues & Feedback</TabsTrigger>
            <TabsTrigger value="approvals">Service Approvals</TabsTrigger>
          </TabsList>

          {/* Citizen Issues & Feedback Tab */}
          <TabsContent value="issues" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Citizen Issues & Feedback</h2>
                <p className="text-gray-600">Review and respond to citizen feedback and reported issues</p>
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
              {citizenFeedback.map((feedback) => (
                <Card key={feedback.id} className="border-l-4 border-l-red-500">
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
                        <Badge className={getPriorityColor(feedback.priority)} variant="outline">
                          {feedback.priority.toUpperCase()}
                        </Badge>
                        <Badge className={getStatusColor(feedback.status)}>{feedback.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Service and Rating */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Service: {feedback.service}</span>
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${star <= feedback.rating ? "text-red-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">({feedback.rating}/5)</span>
                        </div>
                      </div>

                      {/* Reported Issue */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-medium text-red-800">Reported Issue:</span>
                        </div>
                        <p className="text-sm text-red-700 font-medium">{feedback.issue}</p>
                        <p className="text-sm text-red-600 mt-1">{feedback.urgency}</p>
                      </div>

                      {/* Citizen Feedback */}
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Citizen Feedback:</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">{feedback.feedback}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Submitted: {feedback.date.toLocaleDateString()} at {feedback.date.toLocaleTimeString()}
                        </p>
                      </div>

                      {/* Reply Section */}
                      {feedback.status === "pending" && (
                        <div className="border-t pt-4">
                          <Label htmlFor={`reply-${feedback.id}`} className="text-sm font-medium">
                            Government Response
                          </Label>
                          <div className="mt-2 space-y-3">
                            <Textarea
                              id={`reply-${feedback.id}`}
                              placeholder="Provide a detailed response addressing the citizen's issue and feedback..."
                              value={selectedFeedback === feedback.id ? replyText : ""}
                              onChange={(e) => {
                                setSelectedFeedback(feedback.id)
                                setReplyText(e.target.value)
                              }}
                              className="min-h-[100px]"
                            />
                            <div className="flex space-x-2">
                              <Button
                                onClick={() => handleFeedbackReply(feedback.id)}
                                disabled={!replyText.trim()}
                                className="bg-emerald-600 hover:bg-emerald-700"
                              >
                                <Send className="w-4 h-4 mr-2" />
                                Send Response
                              </Button>
                              <Button
                                onClick={() => {
                                  setCitizenFeedback((prev) =>
                                    prev.map((f) => (f.id === feedback.id ? { ...f, status: "acknowledged" } : f)),
                                  )
                                  alert("Issue acknowledged! Citizen will be notified that we're working on it.")
                                }}
                                variant="outline"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Acknowledge Issue
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Existing Reply */}
                      {feedback.reply && (
                        <div className="border-t pt-4">
                          <p className="text-sm font-medium text-gray-600 mb-2">Your Response:</p>
                          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
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

          {/* Service Approvals Tab */}
          <TabsContent value="approvals" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Service Access Approvals</h2>
                <p className="text-gray-600">Review and approve citizen service applications</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Urgency
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Applications
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {serviceRequests.map((request) => (
                <Card key={request.id} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <request.serviceIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{request.citizenName}</p>
                          <p className="text-sm text-gray-600">{request.email}</p>
                          <p className="text-xs text-gray-500">Request ID: {request.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(request.priority)} variant="outline">
                          {request.priority.toUpperCase()}
                        </Badge>
                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Service Details */}
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

                      {/* Description */}
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Application Description</p>
                        <p className="text-gray-700">{request.description}</p>
                      </div>

                      {/* Urgent Issue */}
                      {request.urgentIssue && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">Urgent Situation:</span>
                          </div>
                          <p className="text-sm text-red-700">{request.urgentIssue}</p>
                        </div>
                      )}

                      {/* Application Details */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-600 mb-3">Application Details:</p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          {Object.entries(request.applicationDetails).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-medium text-gray-700">
                                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                              </span>
                              <p className="text-gray-600 mt-1">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Documents */}
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

                      {/* Timeline */}
                      <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
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
                            days pending
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {request.status === "pending" && (
                        <div className="flex space-x-3 pt-4 border-t">
                          <Button
                            onClick={() => handleServiceRequest(request.id, "approve")}
                            className="bg-green-600 hover:bg-green-700 flex-1"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve Application
                          </Button>
                          <Button
                            onClick={() => {
                              const reason = prompt("Please provide a reason for rejection (optional):")
                              handleServiceRequest(request.id, "reject", reason)
                            }}
                            variant="destructive"
                            className="flex-1"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject Application
                          </Button>
                        </div>
                      )}

                      {/* Status Messages */}
                      {request.status === "approved" && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-800">
                              Application Approved - Citizen notified with next steps
                            </span>
                          </div>
                        </div>
                      )}

                      {request.status === "rejected" && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">
                              Application Rejected - Citizen notified with reason and appeal process
                            </span>
                          </div>
                          {request.actionReason && (
                            <p className="text-sm text-red-700 mt-2">Reason: {request.actionReason}</p>
                          )}
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
