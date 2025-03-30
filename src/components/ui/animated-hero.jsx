import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter"
import { TextShimmer } from "./text-shimmer";

function Hero() {

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div
          className="flex gap-8 py-10  lg:py-10 items-center justify-center flex-col">
          <div>
          </div>
          <div className="flex  flex-col ">
          <span className="text-6xl font-bold  mb-2 pt-20">{"We build websites that "}</span>
          <TextShimmer
      duration={1.2}
      className='text-6xl mb-4 font-medium [--base-color:theme(colors.purple.700)] [--base-gradient-color:theme(colors.purple.100)] dark:[--base-color:theme(colors.purple.700)] dark:[--base-gradient-color:theme(colors.purple.200)]'
    >
          <br className="hidden"/>
<Typewriter
  text={[
    "Drive Growth",
    "enhance user experiences",
    "create digital solutions",
    "empower businesses",
    "turn ideas into reality",
  ]}
          speed={80}
          className=" text-6xl font-bold capitalize "
          waitTime={2000}
          deleteSpeed={50}
          cursorChar={"_"}
        />
</TextShimmer>
            <p
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
