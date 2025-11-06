import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OFFER_URL = "https://glstrk.com/?offer_ids=MzA5LDI0Nw%3D%3D&affiliate_id=MTM0NjEw&source=dGlrdG9r";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-12 md:py-16 gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(330,81%,65%,0.08)_0%,_transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Earn a{" "}
            <span className="bg-gradient-to-r from-[hsl(330,81%,65%)] to-[hsl(340,75%,60%)] bg-clip-text text-transparent">
              Boohoo Gift Card
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
            Follow the steps below to get started.
          </p>
        </div>

        <div className="pt-4">
          <Button 
            variant="cta" 
            size="xl"
            className="group"
            onClick={() => window.location.href = OFFER_URL}
          >
            Start Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
