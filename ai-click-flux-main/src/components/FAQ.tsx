import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need previous ad experience?",
    answer: "No. While experience helps, we provide step-by-step training on everything from setting up campaigns to scaling profitably. Many of our most successful members started as complete beginners.",
  },
  {
    question: "Is this dropshipping or affiliate marketing?",
    answer: "Neither. This is pure traffic arbitrage. You're not selling products or promoting affiliate offers. You're buying traffic cheap, creating engaging AI videos, and monetizing clicks through ad networks.",
  },
  {
    question: "What budget do I need to start?",
    answer: "We recommend starting with at least $500-1000 for ad testing. This allows you to test multiple campaigns, find profitable combinations, and scale what works without excessive risk.",
  },
  {
    question: "Can I do this from any country?",
    answer: "Most countries are supported, but you'll need access to major ad platforms and payment processors. US, UK, Canada, Australia, and most EU countries work best. We'll provide specific guidance during onboarding.",
  },
  {
    question: "Is this for beginners?",
    answer: "Yes and no. While we teach everything from scratch, you need to be comfortable with technology, willing to learn analytics, and able to manage ad budgets responsibly. We're looking for serious operators, not get-rich-quick seekers.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the Traffic Flipping System
          </p>
        </div>

        <Accordion 
          type="single" 
          collapsible 
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-card border border-border rounded-lg px-6 shadow-card hover:shadow-glow-primary transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
