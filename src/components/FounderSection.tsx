import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import founderAvatar from "@/assets/founder-avatar.jpg";

const FounderSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-card border-border shadow-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img 
                src={founderAvatar} 
                alt="Traffic Flipping System Founder" 
                className="w-32 h-32 rounded-full object-cover border-4 border-accent/20"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <Quote className="w-8 h-8 text-accent" />
              
              <blockquote className="text-lg md:text-xl leading-relaxed">
                "I cracked this by combining AI video automation with paid-traffic arbitrage. 
                After months of testing and optimization, I've built a system that consistently 
                generates $10K+ daily. Now, I'm teaching a few people how to replicate it."
              </blockquote>

              <div className="pt-4">
                <div className="font-bold text-lg">The Founder</div>
                <div className="text-sm text-muted-foreground">
                  Traffic Flipping System Creator
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FounderSection;
