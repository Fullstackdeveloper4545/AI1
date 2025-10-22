import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";

const ProfitCalculator = () => {
  const [adSpend, setAdSpend] = useState(1000);
  const [cpv, setCpv] = useState(0.05);
  const [rpm, setRpm] = useState(80);

  const calculateProfit = () => {
    // Calculate how many views you can buy with your ad spend
    const views = adSpend / cpv;
    
    // Revenue is calculated based on RPM (Revenue Per 1000 views)
    // This is what you earn from ads shown on your content
    const revenue = (views / 1000) * rpm;
    
    // Profit is revenue minus your ad spend
    const profit = revenue - adSpend;
    
    // ROI is the percentage return on investment
    const roi = adSpend > 0 ? ((profit / adSpend) * 100).toFixed(1) : "0.0";
    
    return { views, revenue, profit, roi };
  };

  const stats = calculateProfit();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Profit Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See your potential returns with traffic flipping
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-card border-border shadow-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-accent" />
                Your Numbers
              </h3>

              <div className="space-y-2">
                <Label htmlFor="adSpend" className="text-base">
                  Daily Ad Spend ($)
                </Label>
                <Input
                  id="adSpend"
                  type="number"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  min="1"
                  className="bg-muted border-border text-lg h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpv" className="text-base">
                  Cost Per View ($)
                </Label>
                <Input
                  id="cpv"
                  type="number"
                  step="0.01"
                  value={cpv}
                  onChange={(e) => setCpv(Number(e.target.value))}
                  min="0.01"
                  className="bg-muted border-border text-lg h-12"
                />
                <p className="text-xs text-muted-foreground">
                  What you pay per video view from ad platforms
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rpm" className="text-base">
                  RPM - Revenue Per 1000 Views ($)
                </Label>
                <Input
                  id="rpm"
                  type="number"
                  step="0.1"
                  value={rpm}
                  onChange={(e) => setRpm(Number(e.target.value))}
                  min="0.1"
                  className="bg-muted border-border text-lg h-12"
                />
                <p className="text-xs text-muted-foreground">
                  What you earn per 1000 views from ad monetization
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">
                Projected Results
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Daily Views</div>
                  <div className="text-2xl font-bold">{stats.views.toFixed(0)}</div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Daily Revenue</div>
                  <div className="text-2xl font-bold text-accent">${stats.revenue.toFixed(2)}</div>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary">
                  <div className="text-sm text-muted-foreground mb-1">Daily Profit</div>
                  <div className={`text-3xl font-bold ${stats.profit > 0 ? 'text-accent' : 'text-destructive'}`}>
                    ${stats.profit.toFixed(2)}
                  </div>
                </div>

                <div className="p-4 bg-gradient-accent rounded-lg">
                  <div className="text-sm text-background/80 mb-1">ROI</div>
                  <div className="text-3xl font-bold text-background">
                    {stats.roi}%
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground pt-4 border-t border-border">
                * Results may vary. This calculator provides estimates based on typical metrics.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfitCalculator;
