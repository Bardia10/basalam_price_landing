import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, BarChart3, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Lightning Fast Automation",
      description:
        "Automate repetitive tasks and workflows with our intelligent automation engine. Save hours every day and focus on what matters most.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your business operations with real-time analytics and customizable dashboards that drive data-driven decisions.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Seamless Collaboration",
      description:
        "Tools for your team and stakeholders to share feedback and iterate faster. Built-in communication and project management features.",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, SSO integration, and compliance with industry standards like SOC 2 and GDPR.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Faster iteration. <span className="text-accent">More innovation.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure
            with automated CI/CD, built-in testing, and integrated collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-colors">
              <CardContent className="p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Demo Section */}
        <div className="mt-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-balance">
                  Make teamwork seamless.{" "}
                  <span className="text-accent">
                    Tools for your team and stakeholders to share feedback and iterate faster.
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Streamline communication with built-in collaboration tools, real-time updates, and integrated project
                  management that keeps everyone aligned and productive.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-mono text-muted-foreground">workflow-automation</span>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium">Automation Engine</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Running automated workflows...</div>
                  </div>
                  <div className="text-xs text-muted-foreground">Select an automation to configure...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
