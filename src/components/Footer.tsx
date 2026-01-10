import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">Uppri Vinay Kumar</p>
            <p className="text-sm text-muted-foreground">
              Digital Marketing & SEO Assistant
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/uppri-vinay-kumar-5b8952295"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 All rights reserved
          </p>
        </div>

        {/* Gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
