import React from 'react'
import { SparklesText } from '../ui/sparkles-text'
import LogoImg from "/src/assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 ">
    <img src={LogoImg} alt="Logo" className="h-10 sm:h-10 w-auto object-contain" />
    <SparklesText text="Scale Us" />
  </div>
  )
}

export default Logo