"use client"

import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='bg-black p-2 flex flex-col justify-center items-center text-white'>
            <span className=''>Do you like redlinereads?</span>
            <span className='text-rose-400'>Spread the word!</span>
            <a href='https://x.com/gunhawke23'><AiOutlineTwitter size={25} /></a>
            <div className='flex gap-10'>
                <span>DMCA</span>
                <span>Terms Of Service</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    )
}

export default Footer
