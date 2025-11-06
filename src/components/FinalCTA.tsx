import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OFFER_URL = "https://glstrk.com/?offer_ids=MzA5LDI0Nw%3D%3D&affiliate_id=MTM0NjEw&source=dGlrdG9r";

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Join thousands of fashion enthusiasts earning Boohoo rewards
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
