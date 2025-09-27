import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      content:
        "StreamLine transformed our operations completely. We've reduced manual work by 80% and our team can now focus on innovation instead of repetitive tasks.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director",
      company: "InnovateCorp",
      content:
        "The analytics dashboard gives us insights we never had before. We can make data-driven decisions in real-time and our productivity has increased by 300%.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "StartupXYZ",
      content:
        "As a startup, we needed something that could scale with us. StreamLine's automation and collaboration tools have been game-changing for our growth.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Trusted by <span className="text-accent">innovative teams</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Join thousands of companies that have streamlined their operations and accelerated their growth with
            StreamLine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-accent font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
