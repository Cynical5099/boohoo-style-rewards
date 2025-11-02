import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jasmine L.",
    location: "New York",
    quote: "Loved how easy this was — I shop Boohoo all the time!",
  },
  {
    name: "Tara M.",
    location: "Florida",
    quote: "Super smooth process. I completed my survey and deals and got rewarded!",
  },
  {
    name: "Ella S.",
    location: "California",
    quote: "Definitely worth it for Boohoo fans.",
  },
  {
    name: "Maya R.",
    location: "Texas",
    quote: "Simple steps, great experience. Happy I participated!",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 px-4 gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What Others Are Saying</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Real experiences from Boohoo enthusiasts
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-5 md:p-6 space-y-3 md:space-y-4 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="pt-2 border-t border-border">
                <p className="font-semibold text-xs md:text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
