import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Miraj Fitness Club - Transform Your Body, Mind & Life | Sangli-Miraj",
  description:
    "Join Miraj's most results-driven gym. Expert trainers, proven programs, and amazing transformations. Start your 7-day free trial today!",
  generator: "v0.app",
  keywords: "gym Miraj, fitness club Sangli, personal training, weight loss, muscle gain, CrossFit Miraj",
  openGraph: {
    title: "Miraj Fitness Club - Stronger Every Day",
    description: "Transform your life at Miraj's premier fitness destination. Expert coaching, proven results.",
    type: "website",
    locale: "en_IN",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Miraj Fitness Club",
      description:
        "Premier fitness club in Sangli-Miraj offering personal training, group classes, and specialized programs",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sangli-Miraj",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      telephone: "+919876543210",
      email: "info@mirajfitness.com",
      url: "https://mirajfitnessclub.com",
      priceRange: "₹₹",
      openingHours: ["Mo-Sa 05:00-22:00", "Su 06:00-20:00"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "150",
      },
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
