const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Disclaimer */}
          <div className="text-center space-y-4 pb-8 border-b border-border">
            <h3 className="font-bold text-lg">Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Results vary based on individual effort, experience, and market conditions. 
              This is not financial advice. All examples are for educational purposes only. 
              You must follow all applicable ad platform policies and local regulations. 
              Past performance does not guarantee future results. There is risk involved in any business venture.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Disclaimer
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-8">
            <p>© {new Date().getFullYear()} Traffic Flipping System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
