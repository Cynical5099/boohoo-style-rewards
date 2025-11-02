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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start earning your Boohoo reward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl shadow-soft">
                  {step.number}
                </div>
                <div className="pt-6 space-y-4">
                  <Icon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-secondary/50 border border-border rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground italic">
            Rewards are only available to participants who complete all required steps.
          </p>
        </div>
      </div>
    </section>
  );
};
