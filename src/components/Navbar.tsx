import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=''>
        <ul className=' py-2 border-t border-gray-300'>
            <li className=' space-x-6 text-xs'>
                <Link href="/world">World</Link>
                <Link href="/business">Business</Link>
                <Link href="geopolitics">GeoPolitics</Link>
                <Link href="/science">Science</Link>
                <Link href="/health">Health</Link>
                <Link href="/sports">Sports</Link>
                <Link href="/books">Books</Link>
                <Link href="/lifestyle">Lifestyle</Link>
                <Link href="/food">Food</Link>
                <Link href="/travel">Travel</Link>
                <Link href="/bitcoin">Bitcoin</Link>
                <Link href="/share">Share</Link>
                <Link href="/esport">E-sport</Link>
                <Link href="/indonesia">Indonesia</Link>
                <Link href="/weather">Weather</Link>
                <Link href="technology">Technology</Link>
                
            </li>
        </ul>
        <div className=' w-full h-[1px] bg-black mb-1 '/>
        <div className=' w-full h-[1px] bg-black '/>
    </nav>
  )
}

export default Navbar