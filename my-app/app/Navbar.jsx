import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
      <div className='flex flex-row bg-cyan-950 text-50  items-center p-5'>
          
          <ul className='flex flex-row justify-between items-center gap-10 font-bold text-lg'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Personaje">Personajes</Link></li>
        </ul>
          


    </div>
  )
}

export default Navbar