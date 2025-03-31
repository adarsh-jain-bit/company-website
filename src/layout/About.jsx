import React from 'react'
import { StarBorder } from "@/components/ui/star-border"
import AboutImg from  "../assets/about4.jpg"
const About = () => {
  return (
    <section className="text-white p-4  rounded-lg md:max-w-7xl mx-auto flex flex-col md:flex-row w-full  gap-8" id="about">
    <div className="w-full md:w-1/2 overflow-hidden rounded-lg ">
      <img 
        src={AboutImg} 
        alt="Teamwork Image" 
        className="w-full  rounded-lg md:h-[540px] h-[300px] object-cover transition-transform duration-500 transform hover:scale-105"
      />
    </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 text-transparent bg-clip-text md:text-left text-center">
  Welcome to Scale Us, where creativity meets expertise.
</h1>

      <h2 className="text-lg md:text-xl font-semibold mt-4 text-gray-200 md:text-left text-center">
        Your Trusted Technology Partner
      </h2>
      <p className="text-gray-400 mt-4 md:text-left text-center">
        Scale Us Technologies is an Indian tech web-based company dedicated to empowering businesses through cutting-edge technology. Our team of experienced professionals is passionate about transforming your ideas into reality with innovative solutions that drive success.
      </p>
      <p className="text-gray-400 mt-4 md:text-left text-center">
        From web development and eCommerce solutions to mobile app development and UI/UX designing, our range of services is designed to provide end-to-end support for your digital journey. We also excel in software testing and search engine optimization, ensuring your digital presence is robust and visible.
      </p>
      <a href="#" className="mt-6 flex items-center mx-auto gap-2 text-white font-semibold px-5 py-3 rounded-lg cursor-pointer md:text-left text-center">
      <StarBorder className={"cursor-pointer"}>
     Learn More About Us
      </StarBorder>
      </a>
    </div>
  </section>
  
  )
}

export default About