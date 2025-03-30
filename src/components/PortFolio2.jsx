import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "./common/Card";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function PortFolio2() {
  const data = [
    {
      title: "Web Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          <TextGenerateEffect duration={2} filter={false} words={"Building robust and scalable web applications tailored to your business needs. From corporate websites to full-stack SaaS solutions, we create experiences that engage users."} />
            
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Card websiteName="Tech Startup Hub" technology="Next.js, Tailwind, Firebase" img="/portfolio/portfolio1.jpg"/>
            <Card websiteName="E-Commerce Store" technology="React, Redux, Stripe" img="/portfolio/portfolio2.jpg"/>
            <Card websiteName="Digital Agency" technology="Gatsby, GraphQL, Netlify" img="https://assets.aceternity.com/templates/startup-2.webp"/>
            <Card websiteName="Real Estate Platform" technology="MERN Stack, AWS, Stripe" img="https://assets.aceternity.com/templates/startup-1.webp"/>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <TextGenerateEffect duration={7} filter={false} words={"Crafting high-performance mobile applications for iOS & Android with the latest technologies. We focus on seamless UX, security, and scalable architecture."} />
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Card websiteName="Fitness Tracker App" technology="React Native, Firebase" img="/portfolio/portfolio7.jpg"/>
            <Card websiteName="Food Delivery App" technology="Flutter, Dart, Firebase" img="/portfolio/portfolio6.jpg"/>
            <Card websiteName="Social Networking App" technology="Swift, Kotlin, Node.js" img="https://assets.aceternity.com/pro/hero-sections.png"/>
            <Card websiteName="E-Learning Mobile App" technology="React Native, GraphQL" img="https://assets.aceternity.com/pro/bento-grids.png"/>
          </div>
        </div>
      ),
    },
    {
      title: "UI and UX Design",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <TextGenerateEffect duration={2} filter={false} words={"Designing intuitive and visually appealing user interfaces to enhance engagement and conversions. We emphasize usability, accessibility, and modern design principles."} />
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Card websiteName="Creative Agency UI" technology="Figma, Tailwind" img="/portfolio/portfolio5.jpg"/>
            <Card websiteName="E-Commerce UI Kit" technology="Adobe XD, Framer" img="/portfolio/portfolio4.png"/>
            <Card websiteName="Landing Page Redesign" technology="Sketch, Webflow" img="/portfolio/portfolio1.jpg"/>
            <Card websiteName="SaaS Dashboard UI" technology="Figma, Material UI" img="/portfolio/portfolio2.jpg"/>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
 