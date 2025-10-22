import { Video, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Video,
    number: "01",
    title: "Create AI Videos",
    description: "Use cutting-edge AI tools like Veo, Sora, Runway, or free alternatives to generate engaging video content at scale. No filming, no editing skills required - just prompts and AI magic.",
  },
  {
    icon: Target,
    number: "02",
    title: "Buy Targeted Views Cheap",
    description: "Leverage insider ad networks and platforms to acquire high-quality traffic at rock-bottom CPCs. We show you exactly where to buy traffic for 10-20x less than your competitors pay.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Monetize Every Click",
    description: "Convert traffic into revenue through strategic ad placements, sponsored content, and optimized monetization networks. Each click you buy generates multiple revenue opportunities.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            How Traffic Flipping Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple 3-step system to turn AI-generated content into profitable traffic arbitrage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-card rounded-2xl p-8 h-full border border-border hover:border-primary transition-all duration-300 shadow-card hover:shadow-glow-primary">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center font-bold text-background">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full">
                  <div className="w-8 h-0.5 bg-gradient-accent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
