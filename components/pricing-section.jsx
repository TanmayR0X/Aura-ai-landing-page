"use client"

import { Check } from "lucide-react"
import CustomButton from "../components/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for individuals getting started with AI-powered coding",
    features: [
      "10,000 code completions/month",
      "Basic code suggestions",
      "Email support",
      "Single project",
      "Standard models access",
    ],
    cta: "Start Free",
  },
  {
    name: "Professional",
    price: 29,
    description: "For developers who need advanced features and priority support",
    features: [
      "Unlimited code completions",
      "Advanced refactoring tools",
      "Priority email support",
      "Up to 10 projects",
      "Access to latest models",
      "Custom code style templates",
    ],
    cta: "Upgrade Now",
    highlighted: true,
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For teams that need complete control and dedicated support",
    features: [
      "Everything in Professional",
      "24/7 phone + chat support",
      "Unlimited projects",
      "Team collaboration tools",
      "Custom security features",
      "Dedicated account manager",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Simple, Transparent Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Plans for Every Developer
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan for your coding needs. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative flex flex-col transition-all duration-300 hover:shadow-lg ${
                tier.highlighted
                  ? "md:scale-105 border-primary/30 bg-linear-to-br from-primary/5 via-background to-background"
                  : "hover:border-primary/20"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">{tier.badge}</Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">${tier.price}</span>
                  {tier.price > 0 && <span className="text-foreground/70">/month</span>}
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CustomButton
                  label={tier.cta}
                  variant={tier.highlighted ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-sm text-foreground/50">
            Questions?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
