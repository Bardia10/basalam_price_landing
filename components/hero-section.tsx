import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6">
            The complete platform to <span className="text-accent">streamline</span> your business.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best
            business operations with StreamLine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-border hover:bg-secondary bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-1">50+ hours</div>
              <div className="text-sm text-muted-foreground">saved per month</div>
              <div className="text-xs text-muted-foreground mt-2 font-mono">ACME Corp</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-1">98% faster</div>
              <div className="text-sm text-muted-foreground">deployment time</div>
              <div className="text-xs text-muted-foreground mt-2 font-mono">TechFlow</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-1">300% increase</div>
              <div className="text-sm text-muted-foreground">in productivity</div>
              <div className="text-xs text-muted-foreground mt-2 font-mono">InnovateCo</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-accent mb-1">5x faster</div>
              <div className="text-sm text-muted-foreground">to build + deploy</div>
              <div className="text-xs text-muted-foreground mt-2 font-mono">StartupXYZ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
