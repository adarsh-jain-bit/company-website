import { Code, Smartphone, Layout, Search, ShieldCheck, Layers } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { AnimatedText } from "../ui/animated-shiny-text";

export function Service() {
  return (
    <>
      <AnimatedText 
        text="Our Services"
        textClassName="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-5 mb-0 text-center"

      />
      <p className="text-md font-medium text-muted-foreground sm:text-xl mb-10 text-center" id="service">
        Empowering businesses with cutting-edge technology. Our expert team delivers 
        tailored solutions to transform your ideas into reality, ensuring innovation, efficiency, 
        and scalability.
      </p>

      <ul className="grid grid-cols-2 md:gap-10 gap-4 md:grid-cols-6 xl:grid-cols-12 xl:grid-rows-2">
        <GridItem
          area="md:col-span-3 xl:col-span-4 xl:row-span-1"
          icon={<Code className="h-6 w-6" />}
          title="Web Development"
          description="Custom websites and applications built with modern frameworks to elevate your digital presence."
        />
        <GridItem
          area="md:col-span-3 xl:col-span-4 xl:row-span-1"
          icon={<Smartphone className="h-6 w-6" />}
          title="Mobile App Development"
          description="Building high-performance mobile applications for iOS and Android with a user-centric approach."
        />
        <GridItem
          area="md:col-span-3 xl:col-span-4 xl:row-span-1"
          icon={<Layout className="h-6 w-6" />}
          title="UI/UX Design"
          description="Creating seamless, user-friendly interfaces that enhance engagement and experience."
        />
        <GridItem
          area="md:col-span-3 xl:col-span-4 xl:row-span-1"
          icon={<Search className="h-6 w-6" />}
          title="SEO & Digital Marketing"
          description="Optimizing your online presence to increase visibility and drive traffic to your business."
        />
        <GridItem
          area="md:col-span-3 xl:col-span-4 xl:row-span-1"
          icon={<ShieldCheck className="h-6 w-6" />}
          title="Cybersecurity"
          description="Protecting your business from digital threats with top-notch security solutions."
        />
        <GridItem
          area="md:col-span-3 xl:col-span-4 xl:row-span-1"
          icon={<Layers className="h-6 w-6" />}
          title="Cloud Solutions"
          description="Scalable and secure cloud computing solutions tailored to your business needs."
        />
      </ul>
    </>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)} >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 md:text-left text-center md:items-start items-center">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold font-sans tracking-[-0.04em] md:text-2xl text-foreground bg-gradient-to-r from-purple-500 via-blue-200 to-green-400 text-transparent bg-clip-text">
                {title}
              </h3>
              <h2 className="font-sans text-sm md:text-base text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
