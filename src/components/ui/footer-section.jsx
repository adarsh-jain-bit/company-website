import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


import Logo from "../common/Logo"

function Footerdemo() {

  const footerLinks = [
    {
      title: "Hire Developers",
      links: [
        { name: "App Developer", url: "/" },
        { name: "Web Developer", url: "/about" },
        { name: "Seo", url: "/services" },
        { name: "Custom", url: "/products" },
        { name: "Integrations", url: "/contact" },
      ],
    },
    {
      title: "Explore",
      links: [
        { name: "Careers", url: "/careers" },
        { name: "Blog", url: "/blog" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", url: "/help-center" },
        { name: "FAQs", url: "/faqs" },
        { name: "Contact Support", url: "/support" },
        { name: "Live Chat", url: "/live-chat" },
      ],
    },
  ];


  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com" },
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com" },
  ];
  
  

  return (
    <footer
      className="relative border-t bg-background text-foreground transition-colors duration-300 md:p-0 px-4">
      <div className=" mx-auto py-12">
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-5">
          <div className="relative md:col-span-2">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">

              <Logo/>
            </h2>
            <p className="mb-6 text-muted-foreground text-left">
            We are a passionate team at Scale Us, dedicated to empowering individuals and businesses through creative digital solutions. We specialize in creating compelling online presences that showcase your work and convey your unique story.
            </p>
            <div className="relative">
            <h3 className="mb-4 text-lg font-semibold ">Follow Us</h3>
            <div className="mb-4 flex space-x-4 items-center ">
            {socialLinks.map(({ name, icon: Icon, url }, index) => (
  <TooltipProvider key={index}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Icon className="h-4 w-4" /> 
          <span className="sr-only">{name}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Follow us on {name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
))}


            </div>
          </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:gap-6 gap-1 lg:col-span-3 justify-center text-center">
            {footerLinks.map((section, index) => (
              <div key={index} className={`Section-${index}`}>
                <h3 className="mb-4 md:text-xl font-semibold text-center text-lg md:h-auto h-[50px]">{section.title}</h3>
                <nav className="space-y-2 md:text-lg text-center text-sm">
                  {section.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="block cursor-pointer text-sm md:font-semibold font-normal md:px-4 px-2 py-2 rounded-lg transition-colors hover:text-primary hover:bg-muted text-primary"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo }