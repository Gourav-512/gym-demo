"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Star,
  Dumbbell,
  Users,
  Trophy,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
} from "lucide-react"

export default function MirajFitnessClub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const programs = [
    {
      title: "Strength Training",
      icon: <Dumbbell className="w-8 h-8" />,
      benefits: ["Build muscle mass", "Increase bone density", "Boost metabolism", "Improve posture"],
    },
    {
      title: "Fat Loss",
      icon: <Trophy className="w-8 h-8" />,
      benefits: [
        "Burn calories efficiently",
        "Cardio + strength combo",
        "Nutrition guidance",
        "Body composition tracking",
      ],
    },
    {
      title: "CrossFit",
      icon: <Users className="w-8 h-8" />,
      benefits: ["High-intensity workouts", "Functional movements", "Community support", "Competitive training"],
    },
    {
      title: "Personal Training",
      icon: <Clock className="w-8 h-8" />,
      benefits: ["1-on-1 coaching", "Customized programs", "Form correction", "Faster results"],
    },
  ]

  const coaches = [
    {
      name: "Rajesh Patil",
      specialties: ["Strength Training", "Powerlifting"],
      image: "/fitness-trainer-male-indian.jpg",
      certified: true,
    },
    {
      name: "Priya Sharma",
      specialties: ["CrossFit", "HIIT"],
      image: "/fitness-trainer-female-indian.jpg",
      certified: true,
    },
    {
      name: "Amit Kulkarni",
      specialties: ["Fat Loss", "Nutrition"],
      image: "/fitness-trainer-male-indian-muscular.jpg",
      certified: true,
    },
  ]

  const testimonials = [
    {
      name: "Sneha Desai",
      text: "Lost 15kg in 6 months! The trainers here are amazing and really care about your progress.",
      rating: 5,
      before: "/before-transformation-woman.jpg",
      after: "/after-transformation-woman-fit.jpg",
    },
    {
      name: "Rohit Jadhav",
      text: "Gained 8kg of muscle and feel stronger than ever. Best gym in Miraj!",
      rating: 5,
      before: "/before-transformation-man-skinny.jpg",
      after: "/after-transformation-man-muscular.jpg",
    },
    {
      name: "Kavita Patil",
      text: "The community here is so supportive. I actually look forward to my workouts now!",
      rating: 5,
      before: "/before-transformation-woman-overweight.jpg",
      after: "/after-transformation-woman-athletic.jpg",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹1,499",
      period: "/month",
      features: ["Gym access", "Basic equipment", "Group classes", "Locker facility"],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹1,999",
      period: "/month",
      features: ["Everything in Starter", "Personal training (2 sessions)", "Diet consultation", "Progress tracking"],
      popular: true,
    },
    {
      name: "Elite",
      price: "₹2,499",
      period: "/month",
      features: ["Everything in Pro", "Unlimited personal training", "Supplement guidance", "Priority booking"],
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We're open Monday to Saturday from 5:00 AM to 10:00 PM, and Sunday from 6:00 AM to 8:00 PM.",
    },
    {
      question: "Do you offer trial memberships?",
      answer: "Yes! We offer a 7-day free trial so you can experience our facilities and training before committing.",
    },
    {
      question: "Are there separate timings for women?",
      answer: "We have dedicated women's hours from 10:00 AM to 12:00 PM and 3:00 PM to 5:00 PM on weekdays.",
    },
    {
      question: "Do you provide diet plans?",
      answer:
        "Yes, our certified nutritionists create personalized diet plans based on your fitness goals and dietary preferences.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have free parking available for all our members right outside the gym.",
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 2 months per year for medical reasons or travel.",
    },
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Simulate WhatsApp redirect
    setTimeout(() => {
      window.open(
        "https://wa.me/919876543210?text=Hi! I'm interested in joining Miraj Fitness Club. Can you help me get started?",
        "_blank",
      )
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glassmorphism border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-gradient">Miraj Fitness Club</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#programs" className="hover:text-primary transition-colors">
              Programs
            </a>
            <a href="#coaches" className="hover:text-primary transition-colors">
              Coaches
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#transformations" className="hover:text-primary transition-colors">
              Transformations
            </a>
            <a href="#faqs" className="hover:text-primary transition-colors">
              FAQs
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Talk on WhatsApp
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform animate-pulse-glow">
              Start 7-Day Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glassmorphism border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#programs" className="hover:text-primary transition-colors">
                Programs
              </a>
              <a href="#coaches" className="hover:text-primary transition-colors">
                Coaches
              </a>
              <a href="#pricing" className="hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#transformations" className="hover:text-primary transition-colors">
                Transformations
              </a>
              <a href="#faqs" className="hover:text-primary transition-colors">
                FAQs
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Talk on WhatsApp
                </Button>
                <Button className="bg-gradient-to-r from-primary to-secondary">Start 7-Day Trial</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animate-gradient" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Dumbbell className="w-16 h-16 text-primary/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <Trophy className="w-12 h-12 text-secondary/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Stronger <span className="text-gradient">Every Day</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join Miraj's most results-driven gym. Transform your body, mind, and life with our expert trainers and
              proven programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 animate-pulse-glow text-lg px-8 py-4"
              >
                Start 7-Day Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 bg-transparent"
              >
                Talk on WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="glassmorphism rounded-2xl p-8 animate-float">
              <img src="/athletic-person-silhouette-gym-equipment.jpg" alt="Fitness transformation" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our specialized programs designed to help you achieve your fitness goals faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="glassmorphism hover:scale-105 hover:rotate-1 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Expert Coaches</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified trainers are here to guide you every step of your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {coach.certified && <Badge className="absolute top-4 right-4 bg-primary">CERTIFIED</Badge>}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{coach.name}</CardTitle>
                  <CardDescription>{coach.specialties.join(" • ")}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your <span className="text-gradient">Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible membership options to fit your lifestyle and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-primary animate-pulse-glow" : ""} hover:scale-105 transition-transform duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-secondary" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="transformations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Amazing <span className="text-gradient">Transformations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real people. See what's possible with dedication and the right guidance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glassmorphism overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic">"{testimonials[activeTestimonial].text}"</blockquote>
                    <div className="font-semibold text-primary">- {testimonials[activeTestimonial].name}</div>

                    {/* Progress indicators */}
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeTestimonial ? "bg-primary w-8" : "bg-muted w-2"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <img
                        src={testimonials[activeTestimonial].before || "/placeholder.svg"}
                        alt="Before transformation"
                        className="w-32 h-40 object-cover rounded-lg mb-2"
                      />
                      <span className="text-sm text-muted-foreground">Before</span>
                    </div>
                    <div className="text-center">
                      <img
                        src={testimonials[activeTestimonial].after || "/placeholder.svg"}
                        alt="After transformation"
                        className="w-32 h-40 object-cover rounded-lg mb-2"
                      />
                      <span className="text-sm text-muted-foreground">After</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-sm opacity-90">Google Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Transformations</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers to help you get started on your fitness journey.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphism rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle>Get Your Free Consultation</CardTitle>
                <CardDescription>
                  Tell us about your fitness goals and we'll create a personalized plan for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We'll redirect you to WhatsApp to continue the conversation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="goal">Fitness Goal</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weight-loss">Weight Loss</SelectItem>
                          <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                          <SelectItem value="strength">Strength Training</SelectItem>
                          <SelectItem value="fitness">General Fitness</SelectItem>
                          <SelectItem value="sports">Sports Performance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you prefer to workout?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (5 AM - 10 AM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (10 AM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                          <SelectItem value="night">Night (8 PM - 10 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                      Get My Free Consultation
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map and Contact Info */}
            <div className="space-y-6">
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Interactive Map</p>
                      <p className="text-xs text-muted-foreground">Sangli-Miraj, Maharashtra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-4">
                <Card className="glassmorphism">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glassmorphism">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-muted-foreground">info@mirajfitness.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glassmorphism">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Instagram className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Follow Us</h4>
                      <p className="text-muted-foreground">@mirajfitnessclub</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Transformation Starts Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of members who have already transformed their lives at Miraj Fitness Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Your 7-Day Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">Miraj Fitness Club</span>
              </div>
              <p className="text-sm opacity-80 mb-4">Transforming lives through fitness in Sangli-Miraj since 2020.</p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#programs" className="hover:opacity-100">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#coaches" className="hover:opacity-100">
                    Coaches
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:opacity-100">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:opacity-100">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Mon - Sat: 5:00 AM - 10:00 PM</li>
                <li>Sunday: 6:00 AM - 8:00 PM</li>
                <li>Women's Hours: 10 AM - 12 PM, 3 PM - 5 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Sangli-Miraj, Maharashtra</li>
                <li>+91 98765 43210</li>
                <li>info@mirajfitness.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>
              &copy; 2024 Miraj Fitness Club. All rights reserved. |{" "}
              <a href="#" className="hover:opacity-100">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg animate-pulse-glow"
          onClick={() => window.open("https://wa.me/919876543210", "_blank")}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Button>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t z-40">
        <Button className="w-full bg-gradient-to-r from-primary to-secondary">Start 7-Day Free Trial</Button>
      </div>
    </div>
  )
}
