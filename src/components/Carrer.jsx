import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Code, Laptop, Layers, TrendingUp, Plus, Command, Eclipse, AtSign, Zap } from "lucide-react";
import { AnimatedText } from "./ui/animated-shiny-text";
import { AnimatedLogo } from "./common/AnimatedLogo";

const items = [
    {
      id: "1",
      icon: Code,
      title: "What are the essential skills for a web developer?",
      content:
        "A web developer should be proficient in HTML, CSS, JavaScript, and modern frameworks like React, Vue, or Angular. Knowledge of backend technologies like Node.js, databases, and version control systems is also beneficial.",
    },
    {
      id: "2",
      icon: Laptop,
      title: "What technologies are trending in web development?",
      content:
        "Modern web development trends include serverless computing, JAMstack architecture, WebAssembly, Progressive Web Apps (PWAs), AI-powered chatbots, and headless CMS solutions.",
    },
    {
      id: "3",
      icon: Layers,
      title: "What are the different career paths in web development?",
      content:
        "Web development offers multiple career paths such as Frontend Developer, Backend Developer, Full-Stack Developer, UI/UX Designer, DevOps Engineer, and Technical Architect.",
    },
    {
      id: "4",
      icon: TrendingUp,
      title: "How can I grow in my web development career?",
      content:
        "To grow, keep learning new technologies, contribute to open-source projects, build a strong portfolio, and network with professionals through conferences and online communities.",
    },
    {
      id: "5",
      icon: Command,
      title: "Should I specialize in frontend, backend, or full-stack development?",
      content:
        "It depends on your interest. Frontend focuses on UI/UX, backend deals with server-side logic, and full-stack covers both. Specializing in one can make you an expert, while full-stack provides broader opportunities.",
    },
    {
      id: "6",
      icon: Eclipse,
      title: "What are the best resources to learn web development?",
      content:
        "Some great resources include MDN Web Docs, freeCodeCamp, The Odin Project, CSS Tricks, and YouTube tutorials. Platforms like Udemy, Coursera, and Frontend Masters also offer structured courses.",
    },
    {
        id: "7",
        icon: AtSign,
        title: "How important is a portfolio for web developers?",
        content:
          "A strong portfolio is crucial for showcasing your skills. It should include well-documented projects, case studies, and a personal website to demonstrate your expertise to potential employers or clients.",
      },
      {
        id: "8",
        icon: Zap,
        title: "What is the future of web development?",
        content:
          "Web development is evolving rapidly with AI-powered automation, Web3, blockchain integration, and augmented reality experiences. Staying updated with industry trends will keep you ahead in the field.",
      },
  ];
  

function Career() {
  return (
    <div className="space-y-4">
      <AnimatedText 
        text="Build Your Web Development Career"
        textClassName="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center"
      />
      <p className="text-md font-medium text-muted-foreground sm:text-xl mb-10 text-center">
        The world of web development is constantly evolving. <br />
        Explore exciting career opportunities and learn how to grow as a developer.
      </p>

      <div className="flex justify-center items-center w-full h-full">
        <div className="hello w-[50%]">
          <AnimatedLogo />
        </div>

        <div className="breakwrapper2 w-[50%]">
          <Accordion type="single" collapsible className="w-full" defaultValue="1">
            {items.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[18px] font-semibold leading-6 transition-all">
                    <span className="flex items-center gap-3 bg-gradient-to-r from-purple-500 via-blue-200 to-green-400 text-transparent bg-clip-text">
                      <item.icon
                        size={18}
                        strokeWidth={2}
                        className="shrink-0 opacity-60"
                        aria-hidden="true"
                      />
                      <span>{item.title}</span>
                    </span>
                    <Plus
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-2 ps-7 text-muted-foreground text-lg">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default  Career 
