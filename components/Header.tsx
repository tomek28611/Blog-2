import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <img
                    src="al_color.webp"
                    width={50} height={50}
                    className="rounded-full"
                    alt="logo"
                />
            </Link>
            <h1>AL</h1>
        </div>

        <div className="">
        <Link href="/"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-400 flex items-center rounded-full">
            Programming Services
        </Link>
        </div>

       
    </header>
  )
}

export default Header