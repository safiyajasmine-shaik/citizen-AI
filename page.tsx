"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Brain,
  MessageSquare,
  FileText,
  Info,
  Star,
  Send,
  User,
  Bot,
  Home,
  Car,
  GraduationCap,
  Heart,
  Building,
  Phone,
  Mail,
  MapPin,
  Clock,
  LogOut,
  Menu,
  X,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

const getServiceForm = (serviceId) => {
  switch (serviceId) {
    case 1: // Housing Services
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" name="fullName" placeholder="John Doe" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" required className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Current Address</Label>
            <Input id="address" name="address" placeholder="123 Main St, City, State 12345" required className="mt-1" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="income">Monthly Income</Label>
              <Input id="income" name="income" type="number" placeholder="3000" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="family-size">Family Size</Label>
              <Input id="family-size" name="familySize" type="number" placeholder="4" required className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="housing-type">Housing Assistance Type</Label>
            <select
              id="housing-type"
              name="housingType"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select assistance type</option>
              <option value="rental">Rental Assistance</option>
              <option value="purchase">Home Purchase Assistance</option>
              <option value="emergency">Emergency Housing</option>
              <option value="senior">Senior Housing</option>
            </select>
          </div>
        </div>
      )
    case 2: // Transportation
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="driver-name">Driver Name</Label>
              <Input id="driver-name" name="driverName" placeholder="John Doe" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="license-number">License Number</Label>
              <Input id="license-number" name="licenseNumber" placeholder="D123456789" required className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="vehicle-info">Vehicle Information</Label>
            <Input
              id="vehicle-info"
              name="vehicleInfo"
              placeholder="2020 Toyota Camry - ABC123"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="permit-type">Permit Type</Label>
            <select
              id="permit-type"
              name="permitType"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select permit type</option>
              <option value="residential">Residential Parking</option>
              <option value="commercial">Commercial Vehicle</option>
              <option value="disabled">Disabled Parking</option>
              <option value="visitor">Visitor Permit</option>
            </select>
          </div>
          <div>
            <Label htmlFor="permit-address">Permit Address</Label>
            <Input
              id="permit-address"
              name="permitAddress"
              placeholder="123 Main St, City, State 12345"
              required
              className="mt-1"
            />
          </div>
        </div>
      )
    case 3: // Education Services
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="student-name">Student Name</Label>
              <Input id="student-name" name="studentName" placeholder="Jane Doe" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="student-age">Student Age</Label>
              <Input id="student-age" name="studentAge" type="number" placeholder="16" required className="mt-1" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parent-name">Parent/Guardian Name</Label>
              <Input id="parent-name" name="parentName" placeholder="John Doe" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="parent-phone">Parent Phone</Label>
              <Input id="parent-phone" name="parentPhone" placeholder="+1 (555) 123-4567" required className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="school-preference">School Preference</Label>
            <select
              id="school-preference"
              name="schoolPreference"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select school</option>
              <option value="central-high">Central High School</option>
              <option value="north-elementary">North Elementary</option>
              <option value="south-middle">South Middle School</option>
              <option value="west-academy">West Academy</option>
            </select>
          </div>
          <div>
            <Label htmlFor="grade-level">Grade Level</Label>
            <select
              id="grade-level"
              name="gradeLevel"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select grade</option>
              <option value="k">Kindergarten</option>
              <option value="1">1st Grade</option>
              <option value="2">2nd Grade</option>
              <option value="3">3rd Grade</option>
              <option value="4">4th Grade</option>
              <option value="5">5th Grade</option>
              <option value="6">6th Grade</option>
              <option value="7">7th Grade</option>
              <option value="8">8th Grade</option>
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade</option>
            </select>
          </div>
        </div>
      )
    case 4: // Health Services
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="patient-name">Patient Name</Label>
              <Input id="patient-name" name="patientName" placeholder="John Doe" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="patient-dob">Date of Birth</Label>
              <Input id="patient-dob" name="patientDob" type="date" required className="mt-1" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="insurance-id">Insurance ID</Label>
              <Input id="insurance-id" name="insuranceId" placeholder="INS123456789" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="emergency-contact">Emergency Contact</Label>
              <Input
                id="emergency-contact"
                name="emergencyContact"
                placeholder="+1 (555) 987-6543"
                required
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="service-type">Health Service Type</Label>
            <select
              id="service-type"
              name="serviceType"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select service</option>
              <option value="vaccination">Vaccination Appointment</option>
              <option value="health-permit">Health Permit</option>
              <option value="medical-records">Medical Records Request</option>
              <option value="wellness-program">Wellness Program Enrollment</option>
            </select>
          </div>
          <div>
            <Label htmlFor="preferred-date">Preferred Appointment Date</Label>
            <Input id="preferred-date" name="preferredDate" type="date" required className="mt-1" />
          </div>
        </div>
      )
    case 5: // Business Permits
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" name="businessName" placeholder="ABC Restaurant" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="owner-name">Owner Name</Label>
              <Input id="owner-name" name="ownerName" placeholder="John Doe" required className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="business-address">Business Address</Label>
            <Input
              id="business-address"
              name="businessAddress"
              placeholder="456 Business Ave, City, State 12345"
              required
              className="mt-1"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="business-type">Business Type</Label>
              <select
                id="business-type"
                name="businessType"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              >
                <option value="">Select business type</option>
                <option value="restaurant">Restaurant</option>
                <option value="retail">Retail Store</option>
                <option value="service">Service Business</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>
            <div>
              <Label htmlFor="employees">Number of Employees</Label>
              <Input id="employees" name="employees" type="number" placeholder="5" required className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="permit-type-business">Permit Type</Label>
            <select
              id="permit-type-business"
              name="permitTypeBusiness"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select permit type</option>
              <option value="business-license">Business License</option>
              <option value="food-service">Food Service Permit</option>
              <option value="liquor-license">Liquor License</option>
              <option value="signage">Signage Permit</option>
              <option value="construction">Construction Permit</option>
            </select>
          </div>
        </div>
      )
    default:
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="general-name">Full Name</Label>
            <Input id="general-name" name="fullName" placeholder="Your Name" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="general-email">Email Address</Label>
            <Input
              id="general-email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="general-phone">Phone Number</Label>
            <Input id="general-phone" name="phone" placeholder="+1 (555) 123-4567" required className="mt-1" />
          </div>
        </div>
      )
  }
}

const handleFeedbackSubmit = (e) => {
  e.preventDefault()
  alert("Thank you for your feedback! Your input helps us improve our services.")
}

export default function CitizenDashboard() {
  const [activeTab, setActiveTab] = useState("services")
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm your AI assistant. How can I help you with government services today?",
      timestamp: new Date(),
    },
  ])
  const [chatInput, setChatInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [feedbackRating, setFeedbackRating] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  // Check authentication on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null")
    if (!user || user.userType !== "citizen") {
      // Redirect to login if not authenticated as citizen
      window.location.href = "/login?type=citizen"
      return
    }
    setCurrentUser(user)
  }, [])

  const services = [
    {
      id: 1,
      title: "Housing Services",
      description: "Apply for housing assistance, permits, and property services",
      icon: Home,
      status: "Available",
      category: "Housing",
    },
    {
      id: 2,
      title: "Transportation",
      description: "Public transport info, parking permits, and traffic services",
      icon: Car,
      status: "Available",
      category: "Transport",
    },
    {
      id: 3,
      title: "Education Services",
      description: "School enrollment, educational programs, and student services",
      icon: GraduationCap,
      status: "Available",
      category: "Education",
    },
    {
      id: 4,
      title: "Health Services",
      description: "Healthcare programs, vaccination schedules, and health permits",
      icon: Heart,
      status: "Available",
      category: "Health",
    },
    {
      id: 5,
      title: "Business Permits",
      description: "Business registration, licenses, and commercial permits",
      icon: Building,
      status: "Available",
      category: "Business",
    },
  ]

  const [selectedService, setSelectedService] = useState(null)
  const [serviceFormData, setServiceFormData] = useState({})
  const [problemReport, setProblemReport] = useState("")

  const ServiceCard = ({ service }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [serviceFeedback, setServiceFeedback] = useState("")
    const [serviceRating, setServiceRating] = useState(0)

    const handleServiceAccess = () => {
      setShowDetails(true)
    }

    const handleApplyService = () => {
      setShowForm(true)
    }

    const handleFormSubmit = (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Remove the 500-character validation - allow any length or empty
      // Get form data
      const formData = new FormData(e.target)
      const applicationData = Object.fromEntries(formData.entries())

      // Generate request ID
      const requestId = `${service.category.substring(0, 2).toUpperCase()}-2024-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`

      // Create application with problem report
      const newApplication = {
        id: requestId,
        citizenName: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "John Doe",
        email: currentUser ? currentUser.email : "john.doe@email.com",
        service: service.title,
        requestType: service.title + " Application",
        description: `Application for ${service.title} submitted through citizen portal`,
        submittedDate: new Date().toISOString(),
        status: "pending",
        priority: problemReport.trim() ? "high" : "medium",
        urgentIssue: problemReport.trim() || "Standard application - requires review",
        applicationDetails: applicationData,
        documents: ["application_form.pdf", "supporting_documents.pdf"],
        problemReport: problemReport, // Store the problem report
      }

      // Store application
      const existingApplications = JSON.parse(localStorage.getItem("citizenApplications") || "[]")
      existingApplications.push(newApplication)
      localStorage.setItem("citizenApplications", JSON.stringify(existingApplications))

      // If there's any problem report, store it separately for government dashboard
      if (problemReport.trim()) {
        const existingProblems = JSON.parse(localStorage.getItem("citizenProblems") || "[]")
        const newProblem = {
          id: Date.now(),
          applicationId: requestId,
          citizenName: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "John Doe",
          email: currentUser ? currentUser.email : "john.doe@email.com",
          service: service.title,
          problemDescription: problemReport.trim(),
          submittedDate: new Date().toISOString(),
          status: "pending",
          priority: "high",
        }
        existingProblems.push(newProblem)
        localStorage.setItem("citizenProblems", JSON.stringify(existingProblems))
      }

      // Show success message
      alert(
        `${service.title} application submitted successfully! You will receive a confirmation email shortly. Your request ID is: ${requestId}${
          problemReport.trim()
            ? "\n\nYour problem report has been included and will be reviewed by government officials."
            : ""
        }`,
      )

      setShowForm(false)
      setShowDetails(false)
      setServiceFormData({})
      setProblemReport("")
    }

    const getServiceDetails = () => {
      switch (service.id) {
        case 1: // Housing Services
          return {
            description: "Comprehensive housing assistance programs for citizens in need",
            features: [
              "Low-income housing assistance",
              "Emergency housing support",
              "Housing voucher programs",
              "First-time homebuyer assistance",
              "Rental assistance programs",
            ],
            requirements: [
              "Valid government ID",
              "Proof of income (last 3 months)",
              "Proof of residence",
              "Family composition documentation",
            ],
            processingTime: "5-10 business days",
            fees: "No application fees",
            contact: "housing@cityai.gov | (555) 123-4567",
          }
        case 2: // Transportation
          return {
            description: "Transportation services and permits for citizens and businesses",
            features: [
              "Residential parking permits",
              "Commercial vehicle permits",
              "Disabled parking permits",
              "Visitor parking passes",
              "Public transit information",
            ],
            requirements: [
              "Valid driver's license",
              "Vehicle registration",
              "Proof of residence (for residential permits)",
              "Insurance documentation",
            ],
            processingTime: "3-5 business days",
            fees: "Residential: $25/year, Commercial: $150/year",
            contact: "transport@cityai.gov | (555) 234-5678",
          }
        case 3: // Education Services
          return {
            description: "Educational programs and school enrollment services",
            features: [
              "Public school enrollment",
              "Special education services",
              "Adult education programs",
              "School transfer requests",
              "Educational support services",
            ],
            requirements: [
              "Student birth certificate",
              "Immunization records",
              "Proof of residence",
              "Previous school records (if applicable)",
            ],
            processingTime: "7-14 business days",
            fees: "No enrollment fees",
            contact: "education@cityai.gov | (555) 345-6789",
          }
        case 4: // Health Services
          return {
            description: "Public health services and medical assistance programs",
            features: [
              "Vaccination appointments",
              "Health permits and certificates",
              "Public health programs",
              "Medical assistance enrollment",
              "Health screenings",
            ],
            requirements: [
              "Valid government ID",
              "Insurance information (if applicable)",
              "Medical history (for some services)",
              "Emergency contact information",
            ],
            processingTime: "1-3 business days",
            fees: "Varies by service",
            contact: "health@cityai.gov | (555) 456-7890",
          }
        case 5: // Business Permits
          return {
            description: "Business licensing and permit services for entrepreneurs",
            features: [
              "Business license applications",
              "Food service permits",
              "Liquor licenses",
              "Signage permits",
              "Construction permits",
            ],
            requirements: [
              "Business plan",
              "Proof of business location",
              "Owner identification",
              "Insurance documentation",
              "Zoning compliance",
            ],
            processingTime: "10-15 business days",
            fees: "Basic license: $100, Specialized permits: $200-500",
            contact: "business@cityai.gov | (555) 567-8901",
          }
        default:
          return null
      }
    }

    const serviceDetails = getServiceDetails()

    if (showForm) {
      return (
        <Card className="col-span-full max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">{service.title} Application</CardTitle>
                  <CardDescription>Fill out the form below to submit your request</CardDescription>
                </div>
              </div>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {getServiceForm(service.id)}

              <Separator />

              <div>
                <Label htmlFor="problem-report">Report a Problem (Optional)</Label>
                <Textarea
                  id="problem-report"
                  name="problemReport"
                  placeholder="Describe any issues, urgent circumstances, or problems you're experiencing that relate to this service request. Please provide as much detail as possible to help government officials understand and address your concerns effectively."
                  value={problemReport}
                  onChange={(e) => setProblemReport(e.target.value)}
                  className="mt-1 min-h-[120px]"
                  rows={6}
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <p className="text-xs text-gray-600">
                      Problem reports are flagged for priority review by government officials
                    </p>
                  </div>
                  <div className="text-xs text-gray-500">{problemReport.length} characters</div>
                </div>
                {problemReport.trim() && (
                  <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-xs text-blue-600">
                      <strong>✓ Problem report ready:</strong> Your report will be included with your application and
                      flagged for government review.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                  Submit Application
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )
    }

    if (showDetails) {
      return (
        <Card className="col-span-full max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{serviceDetails.description}</CardDescription>
                </div>
              </div>
              <Button variant="outline" onClick={() => setShowDetails(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Available Services</h3>
                <ul className="space-y-2">
                  {serviceDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {serviceDetails.requirements.map((req, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <FileText className="w-4 h-4 text-gray-400 mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Processing Time</p>
                <p className="text-sm text-gray-900">{serviceDetails.processingTime}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Fees</p>
                <p className="text-sm text-gray-900">{serviceDetails.fees}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Contact</p>
                <p className="text-sm text-gray-900">{serviceDetails.contact}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button onClick={handleApplyService} className="bg-emerald-600 hover:bg-emerald-700">
                Apply for Service
              </Button>
              <Button variant="outline" onClick={() => setShowDetails(false)}>
                Back to Services
              </Button>
            </div>

            <Separator />

            {/* Feedback Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Share Your Experience</h3>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Rate this service</Label>
                  <div className="flex space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setServiceRating(star)}
                        className={`p-1 ${star <= serviceRating ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="service-feedback">Your feedback</Label>
                  <Textarea
                    id="service-feedback"
                    placeholder="Share your experience with this service..."
                    value={serviceFeedback}
                    onChange={(e) => setServiceFeedback(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!serviceFeedback.trim() || serviceRating === 0}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Submit Feedback
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <service.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {service.category}
                </Badge>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">{service.status}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Button onClick={handleServiceAccess} className="w-full bg-emerald-600 hover:bg-emerald-700">
            Access Service
          </Button>
        </CardContent>
      </Card>
    )
  }

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      type: "user",
      message: chatInput,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setChatInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        type: "bot",
        message: generateAIResponse(chatInput),
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (input: string) => {
    const responses = {
      housing:
        "I can help you with housing services! You can apply for housing assistance, check permit status, or get information about property services. Would you like me to guide you through any specific housing-related process?",
      transport:
        "For transportation services, I can help you with public transport schedules, parking permit applications, or traffic-related inquiries. What specific transportation service do you need assistance with?",
      health:
        "I'm here to help with health services! You can get information about vaccination schedules, health permits, or healthcare programs. What health service are you looking for?",
      education:
        "I can assist you with education services including school enrollment, educational programs, and student services. What educational service do you need help with?",
      business:
        "For business services, I can help you with business registration, license applications, and commercial permits. What type of business service are you interested in?",
      default:
        "I'm here to help you with any government services. You can ask me about housing, transportation, health services, education, business permits, or any other government-related questions. How can I assist you today?",
    }

    const lowerInput = input.toLowerCase()
    if (lowerInput.includes("housing") || lowerInput.includes("home")) return responses.housing
    if (lowerInput.includes("transport") || lowerInput.includes("car") || lowerInput.includes("bus"))
      return responses.transport
    if (lowerInput.includes("health") || lowerInput.includes("medical")) return responses.health
    if (lowerInput.includes("education") || lowerInput.includes("school")) return responses.education
    if (lowerInput.includes("business") || lowerInput.includes("permit")) return responses.business
    return responses.default
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    window.location.href = "/login?type=citizen"
  }

  const navigationItems = [
    { id: "services", label: "Services", icon: FileText },
    { id: "chat", label: "AI Assistant", icon: MessageSquare },
    { id: "about", label: "About", icon: Info },
    { id: "feedback", label: "Feedback", icon: Star },
  ]

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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Citizen AI</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>
                {currentUser.firstName?.[0]}
                {currentUser.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-gray-900">
                {currentUser.firstName} {currentUser.lastName}
              </p>
              <p className="text-sm text-gray-500">Citizen Portal</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id)
                setSidebarOpen(false)
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === item.id ? "bg-emerald-100 text-emerald-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-4 py-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">
                {navigationItems.find((item) => item.id === activeTab)?.label || "Dashboard"}
              </h1>
            </div>
            <Badge className="bg-emerald-100 text-emerald-800">Online</Badge>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-4 lg:p-6">
          {activeTab === "services" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Available Services</h2>
                <p className="text-gray-600">Access government services and submit applications online.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "chat" && (
            <div className="max-w-4xl mx-auto">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Bot className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle>AI Assistant</CardTitle>
                      <CardDescription>Get instant help with government services</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-full p-4">
                    <div className="space-y-4">
                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                              message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                            }`}
                          >
                            <Avatar className="w-8 h-8">
                              {message.type === "user" ? (
                                <AvatarFallback className="bg-emerald-100 text-emerald-600">
                                  <User className="w-4 h-4" />
                                </AvatarFallback>
                              ) : (
                                <AvatarFallback className="bg-blue-100 text-blue-600">
                                  <Bot className="w-4 h-4" />
                                </AvatarFallback>
                              )}
                            </Avatar>
                            <div
                              className={`rounded-lg px-3 py-2 ${
                                message.type === "user" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-900"
                              }`}
                            >
                              <p className="text-sm">{message.message}</p>
                              <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-blue-100 text-blue-600">
                                <Bot className="w-4 h-4" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="bg-gray-100 rounded-lg px-3 py-2">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>

                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask me about government services..."
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} className="bg-emerald-600 hover:bg-emerald-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "about" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Citizen AI</CardTitle>
                  <CardDescription>Your intelligent government services platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Citizen AI is an intelligent citizen engagement platform designed to revolutionize how you interact
                    with government services. Our platform leverages advanced AI technology to provide instant,
                    personalized assistance for all your civic needs.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <MessageSquare className="w-4 h-4 text-emerald-600 mr-2" />
                          24/7 AI Assistant
                        </li>
                        <li className="flex items-center">
                          <FileText className="w-4 h-4 text-emerald-600 mr-2" />
                          Online Service Applications
                        </li>
                        <li className="flex items-center">
                          <Clock className="w-4 h-4 text-emerald-600 mr-2" />
                          Real-time Status Updates
                        </li>
                        <li className="flex items-center">
                          <Star className="w-4 h-4 text-emerald-600 mr-2" />
                          Feedback & Rating System
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-emerald-600 mr-2" />
                          1-800-CITIZEN (1-800-248-4936)
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-emerald-600 mr-2" />
                          support@citizenai.gov
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
                          123 Government Plaza, City Hall
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-emerald-600 mr-2" />
                          24/7 Online Support
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">How do I apply for services?</h4>
                    <p className="text-sm text-gray-600">
                      You can apply for services through the Services tab or by asking our AI assistant for guidance.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Is my data secure?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, all data is encrypted and protected according to federal security standards.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">How can I track my application status?</h4>
                    <p className="text-sm text-gray-600">
                      Application status updates are available in your dashboard and via email notifications.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "feedback" && (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Feedback</CardTitle>
                  <CardDescription>Help us improve our services by sharing your experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                    <div>
                      <Label className="text-base font-medium">Overall Experience</Label>
                      <div className="flex space-x-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFeedbackRating(star)}
                            className={`p-1 ${star <= feedbackRating ? "text-yellow-400" : "text-gray-300"}`}
                          >
                            <Star className="w-6 h-6 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service-used">Which service did you use?</Label>
                      <select
                        id="service-used"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select a service</option>
                        <option value="housing">Housing Services</option>
                        <option value="transport">Transportation</option>
                        <option value="education">Education Services</option>
                        <option value="health">Health Services</option>
                        <option value="business">Business Permits</option>
                        <option value="ai-chat">AI Assistant</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="feedback-text">Your Feedback</Label>
                      <Textarea
                        id="feedback-text"
                        placeholder="Please share your experience, suggestions, or any issues you encountered..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact-email">Email (Optional)</Label>
                      <Input id="contact-email" type="email" placeholder="your.email@example.com" className="mt-1" />
                      <p className="text-xs text-gray-500 mt-1">
                        We'll only use this to follow up on your feedback if needed
                      </p>
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Recent Feedback Display */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Community Feedback</CardTitle>
                  <CardDescription>See what other citizens are saying</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">Housing Services</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "The AI assistant helped me navigate the housing application process quickly. Very impressed!"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">- Anonymous Citizen, 2 days ago</p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-500">Transportation</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Easy to use platform. The parking permit application was straightforward."
                    </p>
                    <p className="text-xs text-gray-500 mt-1">- Anonymous Citizen, 1 week ago</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
