"use client"

import { ArrowRight, Zap } from "lucide-react";


export default function HeroSection() {
    
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-64px)] py-12 lg:py-20">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="bg-muted rounded-3xl p-8 sm:p-10 lg:p-12 space-y-6 shadow-xl border border-border/50">
              {/* Pre-header */}
              <div className="inline-flex items-center gap-2 w-fit">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  AI-Powered Code Generation
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Write Better Code, Faster Than Ever
              </h1>

              {/* Body Text */}
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-md">
                Aura AI is your intelligent coding assistant. Get smart code suggestions, automated refactoring, and
                real-time debugging insights across all your projects.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* Primary Button */}
                  <button 
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-colors h-11 px-6 
                                 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg w-full sm:w-auto"
                  >
                    Start Your Free Trial
                  </button>
                  
                  {/* Secondary Button */}
                  <button 
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-colors h-11 px-6 
                                 bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border w-full sm:w-auto"
                  >
                    See Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex order-1 lg:order-2 items-center justify-center min-h-[400px]">
            <div className="relative w-full aspect-square max-w-lg">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-900">
                  <img
                    src="/hero-image.jpg"
                    alt="AI Code Writing Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>

          {/* Mobile Visual */}
          <div className="lg:hidden order-1 w-full mb-8 pt-4"> 
            <div className="w-full p-5 sm:p-6 text-center rounded-2xl shadow-xl flex flex-col items-center justify-center bg-card dark:bg-card border border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-3">
                    Trusted by developers from
                </p>
                <div className="flex justify-center space-x-4 md:space-x-6">
                    {/* Placeholder logos */}
                    <span className="text-lg font-bold text-foreground/80">CodeCorp</span>
                    <span className="text-lg font-bold text-foreground/80 opacity-70">DevLink</span>
                    <span className="text-lg font-bold text-foreground/80">SoftGen</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 w-full flex justify-center items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <p className="text-xs text-muted-foreground">Boost productivity by 40% instantly.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}