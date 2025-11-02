import { Mail, ClipboardList, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Mail,
    number: "1",
    title: "Enter your email address",
    description: "Register and receive updates about your progress.",
  },
  {
    icon: ClipboardList,
    number: "2",
    title: "Complete the Boohoo survey",
    description: "Share your fashion preferences and opinions with us.",
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Finish the required deals",
    description: "The more deals you complete, the higher your potential reward can be.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Three simple steps to start earning your Boohoo reward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative p-6 md:p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="absolute -top-4 left-6 md:left-8 w-10 h-10 md:w-12 md:h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-soft">
                  {step.number}
                </div>
                <div className="pt-4 md:pt-6 space-y-3 md:space-y-4">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-secondary/50 border border-border rounded-lg p-4 md:p-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground italic px-2">
            Rewards are only available to participants who complete all required steps.
          </p>
        </div>
      </div>
    </section>
  );
};
