"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className='py-5 lg:px-20 px-10 bg-black text-white mb-10'>
            <nav className='flex justify-between items-center'>
                <Link href={"/"} className='text-3xl font-bold '>redlinereads</Link>
                <div className='lg:flex hidden'>
                    <ul className='flex gap-10 text-lg items-center'>
                        <Link href="/about">About</Link>
                        <a href="https://x.com/gunhawke23" target="_blank"><AiOutlineTwitter size=
                            {25} /></a>
                    </ul>
                </div>
                <div className='lg:hidden flex items-center gap-5'>
                    <button>theme</button>
                    <span onClick={() => setToggle(!toggle)}><GiHamburgerMenu size={25} /></span>
                    {toggle && <ul className='flex flex-col items-center absolute border top-16 right-10 gap-7 text-md p-4 z-10'>
                        <Link href="/about">About</Link>
                        <a href="https://x.com/gunhawke23" target="_blank"><AiOutlineTwitter size=
                            {25} /></a>
                    </ul>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
