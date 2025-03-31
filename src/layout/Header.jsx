import { NavBar } from '@/components/ui/tubelight-navbar'
import React from 'react'
import { Home } from 'lucide-react'
const Header = () => {
    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'About Us', url: '#about', icon: Home },
        { name: 'Service', url: '#service', icon: Home },
        { name: 'Products', url: '#product', icon: Home },
        { name: 'Portfolio', url: '#portfolio', icon: Home },
        { name: 'Carrers', url: '#carrer', icon: Home }
      ]
  return (
    <>
   
    <NavBar items={navItems}/>
    </>
  )
}

export default Header