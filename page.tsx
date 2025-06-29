import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, BarChart3, Brain, CheckCircle, ArrowRight, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Citizen AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#scenarios" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Scenarios
            </Link>
            <Link href="#demo" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Demo
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Login
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            Powered by IBM Granite & Watson AI
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Intelligent Citizen
            <span className="text-emerald-600"> Engagement</span>
            <br />
            Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Revolutionize government-citizen interactions with AI-driven responses, real-time sentiment analysis, and
            data-driven insights for enhanced public service delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-gray-300 hover:bg-gray-50">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Instant AI responses to citizen inquiries around the clock</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enhanced Trust</h3>
              <p className="text-gray-600">Transparent, data-driven governance builds public confidence</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Improved Efficiency</h3>
              <p className="text-gray-600">Automate routine interactions and streamline service delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Scenarios */}
      <section id="scenarios" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Scenarios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four powerful AI-driven scenarios designed to transform citizen-government interactions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Scenario 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <Badge variant="secondary">Scenario 1</Badge>
                </div>
                <CardTitle className="text-xl">Real-Time Conversational AI Assistant</CardTitle>
                <CardDescription className="text-base">
                  Natural language interface powered by IBM Granite models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Citizens can engage with public services naturally by typing questions or requests. The system
                  provides instant, human-like responses for information access, support, and task completion like issue
                  reporting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Instant AI-powered responses
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    24/7 availability
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Natural language processing
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Scenario 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <Badge variant="secondary">Scenario 2</Badge>
                </div>
                <CardTitle className="text-xl">Citizen Sentiment Analysis</CardTitle>
                <CardDescription className="text-base">
                  AI-powered sentiment tracking and public mood analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analyzes citizen feedback to classify sentiment as Positive, Neutral, or Negative. Helps government
                  quickly identify areas of satisfaction or concern for improved service delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Real-time sentiment classification
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Public mood tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Issue identification
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Scenario 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <Badge variant="secondary">Scenario 3</Badge>
                </div>
                <CardTitle className="text-xl">Dynamic Dashboard</CardTitle>
                <CardDescription className="text-base">
                  Real-time insights and analytics for government officials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Central hub for real-time citizen feedback insights, visualizing sentiment trends, interaction
                  patterns, and service ratings to enable data-driven decision making.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Real-time visualizations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Trend analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Actionable insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Scenario 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-emerald-600" />
                  </div>
                  <Badge variant="secondary">Scenario 4</Badge>
                </div>
                <CardTitle className="text-xl">Personalized & Contextual Response System</CardTitle>
                <CardDescription className="text-base">Advanced NLU for tailored citizen interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Powered by IBM Granite models with advanced natural language understanding, providing relevant,
                  tailored responses that understand context and specific citizen needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Context-aware responses
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Personalized interactions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Advanced NLU capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Powered by Leading AI Technology</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">IBM Granite</div>
            <div className="text-2xl font-bold text-gray-700">IBM Watson</div>
            <div className="text-2xl font-bold text-gray-700">Flask</div>
            <div className="text-2xl font-bold text-gray-700">Natural Language Processing</div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Access Your Account</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign in to access the Citizen AI platform and start engaging with government services or managing your
            dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/login" className="flex-1">
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Citizen Login
              </Button>
            </Link>
            <Link href="/login?type=government" className="flex-1">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                Government Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Citizen Engagement?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking governments using AI to improve public service delivery and build stronger citizen
            relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3">
              Schedule Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Citizen AI</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing government-citizen interactions through intelligent AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Scenarios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Citizen AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
