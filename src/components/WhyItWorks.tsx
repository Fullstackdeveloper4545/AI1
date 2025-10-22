import { Sparkles, Network, Package, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "AI-Optimized Videos",
    description: "Leverage cutting-edge AI video generation tools to create engaging content at scale without expensive production costs.",
  },
  {
    icon: Network,
    title: "Insider Ad Networks",
    description: "Access exclusive ad networks and traffic sources with the lowest CPMs and highest conversion rates in the industry.",
  },
  {
    icon: Package,
    title: "No Products, No Clients",
    description: "Pure traffic arbitrage model means no inventory management, no customer service, and no client deliverables.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Predictable",
    description: "Data-driven approach with clear metrics allows you to scale profitably and predict your returns with accuracy.",
  },
];

const WhyItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card to-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The unfair advantages that make traffic flipping the most efficient arbitrage model
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-card rounded-xl p-6 h-full border border-border hover:border-accent transition-all duration-300 shadow-card hover:shadow-glow-accent hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
