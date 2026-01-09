import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
      <nav className='<nav className="fixed top-0 left-0 w-full h-16 bg-slate-900 z-50">'>
          
          <ul className='flex flex-row justify-between items-center gap-10 font-bold text-lg'>
              <li><Link href="/">Home</Link></li>
        <li><Link href="/Personaje">Personajes</Link></li>
        <li><Link href="/Planetas">Planetas</Link></li>
        </ul>
          


    </nav>
  )
}

export default Navbar