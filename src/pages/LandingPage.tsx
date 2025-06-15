import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Truck,
  Users,
  Route,
  Smartphone,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  Star,
  DollarSign,
  BarChart3,
  Mail,
  Phone,
  MessageSquare,
  Play,
  TrendingUp,
  Award,
  Target,
  Layers,
} from "lucide-react"
import {Link} from "react-router-dom"
import LiveChatWidget from "./components/LiveChatWidget"
import LanguageDropdown from "./components/LanguageDropdown"
import ThemeToggle from "./components/ThemeToggle"
import { LanguageProvider, useLanguage } from "./components/LanguageProvider"
import { ThemeProvider } from "./components/ThemeProvider"
import { useState } from "react"

function LandingPageContent() {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-blue-500 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-6000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 sm:p-6 lg:px-8 backdrop-blur-sm bg-black/10 dark:bg-black/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Truck className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-lg sm:text-2xl font-bold text-white">FleetConnect</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-300 hover:text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link to="#features" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            {t("nav.features")}
          </Link>
          <Link to="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            {t("nav.howItWorks")}
          </Link>
          <Link to="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            {t("nav.pricing")}
          </Link>
          <Link to="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            {t("nav.reviews")}
          </Link>
          <Link to="#contact" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            {t("nav.contact")}
          </Link>
          <ThemeToggle />
          <LanguageDropdown />
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm lg:text-base px-4 lg:px-6">
            {t("nav.getStarted")}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="#features"
                className="block text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.features")}
              </Link>
              <Link
                to="#how-it-works"
                className="block text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.howItWorks")}
              </Link>
              <Link
                to="#pricing"
                className="block text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.pricing")}
              </Link>
              <Link
                to="#testimonials"
                className="block text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.reviews")}
              </Link>
              <Link
                to="#contact"
                className="block text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <ThemeToggle />
                <LanguageDropdown />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.getStarted")}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-32">
        <div className="mx-auto max-w-7xl text-center">
          <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 dark:text-blue-200 border-blue-500/30 text-xs sm:text-sm px-3 py-1">
            {t("hero.badge")}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
            {t("hero.title.connect")}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              {t("hero.title.deliver")}
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-300 dark:text-gray-200 max-w-2xl lg:max-w-3xl mx-auto px-4">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              {t("hero.startConnecting")}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-gray-600 hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t("hero.watchDemo")}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">10K+</div>
              <div className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm">{t("stats.activeTrucks")}</div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">50K+</div>
              <div className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm">{t("stats.deliveriesMade")}</div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">98%</div>
              <div className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm">{t("stats.onTimeDelivery")}</div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm">{t("stats.supportAvailable")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("howItWorks.title")}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                {t("howItWorks.step1.title")}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-200">{t("howItWorks.step1.desc")}</p>
            </div>

            <div className="text-center group px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                {t("howItWorks.step2.title")}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-200">{t("howItWorks.step2.desc")}</p>
            </div>

            <div className="text-center group px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                {t("howItWorks.step3.title")}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 dark:text-gray-200">{t("howItWorks.step3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/20 dark:bg-black/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("features.title")}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{t("features.matching.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("features.matching.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Route className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{t("features.routing.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("features.routing.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{t("features.fleet.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("features.fleet.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{t("features.analytics.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("features.analytics.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{t("features.security.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("features.security.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">{t("features.api.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">{t("features.api.desc")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="text-center mb-12 sm:mb-16 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("benefits.title")}</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t("benefits.revenue.title")}</h3>
                    <p className="text-gray-300 dark:text-gray-200">{t("benefits.revenue.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t("benefits.time.title")}</h3>
                    <p className="text-gray-300 dark:text-gray-200">{t("benefits.time.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t("benefits.costs.title")}</h3>
                    <p className="text-gray-300 dark:text-gray-200">{t("benefits.costs.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t("benefits.support.title")}</h3>
                    <p className="text-gray-300 dark:text-gray-200">{t("benefits.support.desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-600/20 dark:to-purple-700/20 rounded-2xl backdrop-blur-lg border border-white/20 dark:border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin-slow">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t("benefits.dashboard.title")}</h3>
                  <p className="text-gray-300 dark:text-gray-200">{t("benefits.dashboard.desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/20 dark:bg-black/30"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("testimonials.title")}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 dark:text-gray-200 text-base">
                  "FleetConnect transformed our logistics operations. We've reduced costs by 30% and improved delivery
                  times significantly. The platform is intuitive and the support team is exceptional."
                </CardDescription>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">John Davis</div>
                    <div className="text-gray-400 dark:text-gray-300 text-sm">CEO, Davis Logistics</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 dark:text-gray-200 text-base">
                  "As an independent truck owner, finding consistent loads was always a challenge. FleetConnect's
                  matching system has kept my truck busy and profitable. Highly recommended!"
                </CardDescription>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Maria Rodriguez</div>
                    <div className="text-gray-400 dark:text-gray-300 text-sm">Independent Truck Owner</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 dark:text-gray-200 text-base">
                  "The route optimization feature alone has saved us thousands in fuel costs. The real-time tracking
                  gives our customers confidence and keeps us competitive in the market."
                </CardDescription>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">RT</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Robert Thompson</div>
                    <div className="text-gray-400 dark:text-gray-300 text-sm">Fleet Manager, Swift Transport</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("pricing.title")}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Starter Plan */}
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 relative">
              <CardHeader>
                <CardTitle className="text-white text-xl">{t("pricing.starter.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("pricing.starter.desc")}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="text-gray-300 dark:text-gray-200">{t("pricing.month")}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 dark:text-gray-200">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 trucks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic route optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Load matching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  {t("nav.getStarted")}
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                {t("pricing.mostPopular")}
              </Badge>
              <CardHeader>
                <CardTitle className="text-white text-xl">{t("pricing.professional.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("pricing.professional.desc")}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$149</span>
                  <span className="text-gray-300 dark:text-gray-200">{t("pricing.month")}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 dark:text-gray-200">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 25 trucks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced route optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority load matching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Phone & chat support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  {t("nav.getStarted")}
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10 relative">
              <CardHeader>
                <CardTitle className="text-white text-xl">{t("pricing.enterprise.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("pricing.enterprise.desc")}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">{t("pricing.custom")}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 dark:text-gray-200">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited trucks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    AI-powered optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 priority support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  {t("pricing.contactSales")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/20 dark:bg-black/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 text-yellow-300 dark:text-yellow-200 border-yellow-500/30">
              {t("comingSoon.badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("comingSoon.title")}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200 max-w-3xl mx-auto">
              {t("comingSoon.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-600/10 dark:to-purple-700/10 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader className="text-center">
                <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">{t("comingSoon.mobile.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("comingSoon.mobile.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 dark:from-purple-600/10 dark:to-pink-700/10 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">{t("comingSoon.gps.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("comingSoon.gps.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 dark:from-green-600/10 dark:to-emerald-700/10 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">{t("comingSoon.time.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("comingSoon.time.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 dark:from-yellow-600/10 dark:to-orange-700/10 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-white">{t("comingSoon.safety.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  {t("comingSoon.safety.desc")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("faq.title")}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200">{t("faq.subtitle")}</p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-white">How does the matching system work?</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  Our AI-powered algorithm considers factors like location, truck capacity, delivery timeline, and
                  driver preferences to create optimal matches between shippers and carriers. The system learns from
                  successful matches to improve over time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-white">What are the setup requirements?</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  Getting started is simple - you just need an internet connection and a device (computer, tablet, or
                  smartphone). For trucks, we recommend installing our GPS tracking device for optimal route
                  optimization and real-time monitoring.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Is there a contract commitment?</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  No long-term contracts required. All our plans are month-to-month, and you can upgrade, downgrade, or
                  cancel at any time. We believe in earning your business through great service, not binding contracts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-white">How secure is my data?</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200">
                  We use enterprise-grade security with end-to-end encryption, regular security audits, and compliance
                  with industry standards. Your data is stored in secure, redundant data centers with 24/7 monitoring.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/20 dark:bg-black/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("contact.title")}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border-white/20 dark:border-white/10">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">{t("contact.form.title")}</CardTitle>
                <CardDescription className="text-gray-300 dark:text-gray-200 text-sm sm:text-base">
                  {t("contact.form.subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={t("contact.firstName")}
                    className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 text-sm sm:text-base"
                  />
                  <Input
                    placeholder={t("contact.lastName")}
                    className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 text-sm sm:text-base"
                  />
                </div>
                <Input
                  placeholder={t("contact.email")}
                  type="email"
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 text-sm sm:text-base"
                />
                <Input
                  placeholder={t("contact.company")}
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 text-sm sm:text-base"
                />
                <Textarea
                  placeholder={t("contact.message")}
                  className="bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/10 text-white placeholder:text-gray-400 dark:placeholder:text-gray-300 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                />
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm sm:text-base py-2 sm:py-3">
                  {t("contact.sendMessage")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 px-4 lg:px-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{t("contact.info.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{t("contact.phone")}</div>
                      <div className="text-gray-300 dark:text-gray-200 text-sm">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{t("contact.email")}</div>
                      <div className="text-gray-300 dark:text-gray-200 text-sm">hello@fleetconnect.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{t("contact.liveChat")}</div>
                      <div className="text-gray-300 dark:text-gray-200 text-sm">Available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{t("contact.businessHours")}</h3>
                <div className="space-y-2 text-gray-300 dark:text-gray-200 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-right">8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-right">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-right">Emergency Support Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-700/20 dark:to-purple-700/20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("cta.title")}</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 dark:text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4"
            >
              {t("cta.startTrial")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-gray-600 hover:bg-white/10 text-lg px-8 py-4"
            >
              {t("cta.scheduleDemo")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 dark:border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">FleetConnect</span>
              </div>
              <p className="text-gray-400 dark:text-gray-300 text-xs sm:text-sm">{t("footer.tagline")}</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.product")}</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-xs sm:text-sm">
                <li>
                  <Link to="#features" className="hover:text-white transition-colors">
                    {t("nav.features")}
                  </Link>
                </li>
                <li>
                  <Link to="#pricing" className="hover:text-white transition-colors">
                    {t("nav.pricing")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.company")}</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-xs sm:text-sm">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    {t("footer.blog")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    {t("footer.careers")}
                  </Link>
                </li>
                <li>
                  <Link to="#contact" className="hover:text-white transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.support")}</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-xs sm:text-sm">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    {t("footer.helpCenter")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    {t("footer.documentation")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    {t("footer.status")}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    {t("footer.community")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/10 dark:border-white/5 space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <Link
                to="#"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="#"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                {t("footer.terms")}
              </Link>
              <Link
                to="#"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                {t("footer.cookies")}
              </Link>
            </div>
            <div className="text-center text-gray-400 dark:text-gray-300 text-xs sm:text-sm">
              <p>&copy; 2024 FleetConnect. {t("footer.rights")}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Live Chat Widget */}
      <LiveChatWidget />
    </div>
  )
}

export default function LandingPage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LandingPageContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}