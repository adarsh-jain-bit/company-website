import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function BGMotion({ children }) {
  return (
    <div className="relative w-full bg-motion-container flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Background Sparkles - Cover Entire Section Dynamically */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
