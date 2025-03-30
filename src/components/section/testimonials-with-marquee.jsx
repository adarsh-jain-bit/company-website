import { TestimonialCard } from "@/components/ui/testimonial-card";
import { AnimatedText } from "../ui/animated-shiny-text";

export function TestimonialsSection({ title, description, testimonials }) {
  return (
    <section className=" text-foreground py-8 sm:py-10 md:py-10">
      <div className="mx-auto max-w-container flex flex-col items-center text-center">
         <AnimatedText
              text={title} 
              textClassName="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center"
            
            />
        <p className="text-md max-w-[700px] font-medium text-muted-foreground sm:text-xl">
          {description}
        </p>

        {/* Marquee Wrapper with More Gap */}
        <div className="relative overflow-hidden w-full mt-12">
          <div className="flex space-x-12 animate-marquee group-hover:pause">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div key={i} className={`testimonial-wrapper ${i % 2 === 0 ? "rotate-left" : "rotate-right"}`}>
                <TestimonialCard {...testimonial} className="min-w-[320px] md:min-w-[360px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
