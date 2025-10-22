import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Lock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ExclusiveOffer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !experience) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    toast.success("Application received! We'll be in touch soon.");
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-24 md:py-32 bg-background">
        <div className="container px-4">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border shadow-card p-12 text-center">
            <div className="inline-flex p-4 bg-accent/10 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-4">You're On The List!</h3>
            <p className="text-lg text-muted-foreground">
              We'll review your application and get back to you within 48 hours with next steps.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">Limited Access</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Private Access Only
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're opening this system to a handful of serious operators ready to scale. Apply below.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-gradient-card border-border shadow-glow-primary p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-muted border-border h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted border-border h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-base">
                Your Experience Level
              </Label>
              <Select value={experience} onValueChange={setExperience} required>
                <SelectTrigger className="bg-muted border-border h-12">
                  <SelectValue placeholder="Select your experience" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="beginner">Complete Beginner</SelectItem>
                  <SelectItem value="some">Some Marketing Experience</SelectItem>
                  <SelectItem value="experienced">Experienced Marketer</SelectItem>
                  <SelectItem value="expert">Advanced/Expert Level</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
            >
              Join the Waitlist
            </Button>

            <p className="text-xs text-muted-foreground text-center pt-2">
              By applying, you agree to receive updates about the Traffic Flipping System.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ExclusiveOffer;
