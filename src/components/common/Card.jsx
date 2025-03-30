
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function Card({img , technology, websiteName}) {
 
  return (
    <div className=" relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={img}>
        <p className="font-bold text-lg text-purple-600 bg-accent-foreground px-3 p-2 rounded-xl mb-2">{technology}</p>
        <p className="font-normal text-xl text-purple-800 bg-accent-foreground px-3 p-2 rounded-xl">{websiteName}</p>
      </DirectionAwareHover>
    </div>
  );
}
