import { NavBar } from '@/components/ui/tubelight-navbar'
import React from 'react'
import { Home } from 'lucide-react'
const Header = () => {
    const navItems = [
        { name: 'Home', url: '#', icon: Home },
        { name: 'About Us', url: '#', icon: Home },
        { name: 'Service', url: '#', icon: Home },
        { name: 'Products', url: '#', icon: Home },
        { name: 'Portfolio', url: '#', icon: Home },
        { name: 'Carrers', url: '#', icon: Home }
      ]
  return (
    <>
   
    <NavBar items={navItems}/>
    </>
  )
}

export default Header