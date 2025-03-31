import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/Logo";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed sm:top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-xl  sm:px-8",
        className
      )}
    >
      <div className="flex items-center justify-between bg-background/5 backdrop-blur-lg py-3 px-4 rounded-lg shadow-md">
        <Logo />

        {isMobile ? (
          <button onClick={() => setSidebarOpen(true)} className="text-foreground/80">
            <Menu size={24} />
          </button>
        ) : (
          <div className="flex items-center gap-3 items-center">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                    "text-foreground/80 hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={20} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </a>
              );
            })}
          </div>
        )}

        <div className="hidden sm:flex gap-3 items-center">
          <ThemeToggle />
          <button className="px-5 py-2 bg-purple-700 text-white rounded-lg hover:bg-primary/90 transition">
            Get In Touch
          </button>
        </div>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 w-full h-[100vh] bg-black text-white z-50  flex flex-col"
          >
              <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4 p-6">
    <Logo />
            <button
              onClick={() => setSidebarOpen(false)}
              className=" text-foreground/80"
            >
              <X size={24} />
            </button>
            </div>

            {/* Sidebar Content */}
            <div className="mt-12 flex flex-col gap-6 items-center ">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name);
                    setSidebarOpen(false);
                  }}
                  className="text-lg font-semibold text-foreground/80 hover:text-primary transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className=" flex flex-col gap-4 p-6">
            <ThemeToggle />
              <button className="w-full px-5 py-2 bg-purple-700 text-white rounded-lg hover:bg-primary/90 transition">
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
