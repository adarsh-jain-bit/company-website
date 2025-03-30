import { FeatureSteps } from "@/components/section/feature-section"
import img1 from  "/src/assets/img1.jpg"
import img2 from  "/src/assets/img2.jpg"
import img3 from  "/src/assets/img3.jpg"
import img4 from  "/src/assets/img4.jpg"
const features = [
  { 
    step: 'Step 1', 
    title: 'Spark Ignition',
    content: 'Share your vision, dreams, and challenges. We listen deeply, sparking the ignition of your brand.', 
    image: img4
  },
  { 
    step: 'Step 2',
    title: 'Concept Couture',
    content: 'Explore bespoke concepts tailored just for you. Collaborate and refine, ensuring your brand voice is true.',
    image: img1
  },
  { 
    step: 'Step 3',
    title: 'Masterful Crafting',
    content: 'Watch your vision transform into reality with meticulous attention to detail from our team of experts.',
    image: img2
  },
  { 
    step: 'Step 3',
    title: 'Launch & Beyond',
    content: 'Unleash your brand masterpiece to the world. We celebrate your success and optimize for growth.',
    image: img3
  },
]

export function Features() {
  return (
      <FeatureSteps 
        features={features}
        title="4 Steps to Brand Brilliance"
        autoPlayInterval={3000}
        imageHeight="h-[700px]"
      />
  )
}