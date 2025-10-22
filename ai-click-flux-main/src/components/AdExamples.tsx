import adExamples from "@/assets/ad-examples.jpg";

const AdExamples = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card to-background">
      <div className="container px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Real AI Video Ads That Convert
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are examples of AI-generated video ads driving massive traffic. 
            Simple content, powerful results, and highly scalable across any niche.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-glow-primary border border-primary/20">
            <img 
              src={adExamples} 
              alt="AI Video Ad Examples - Traffic Flipping System" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="bg-gradient-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">3-5 sec</div>
              <div className="text-sm text-muted-foreground">Average watch time needed for profitability</div>
            </div>
            <div className="bg-gradient-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">$0.05-0.20</div>
              <div className="text-sm text-muted-foreground">Cost per view on optimized campaigns</div>
            </div>
            <div className="bg-gradient-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">15-40%</div>
              <div className="text-sm text-muted-foreground">Typical click-through rates on tested ads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdExamples;
