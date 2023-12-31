//this is the root level layout
// it is used to define the globally shared UI

//nextjs only renders the part that it has to render
//this improves performance

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/app/ui/globals.css"
import Navbar from '@/app/ui/Navbar/Navbar'
import Footer from '@/app/ui/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RedLineReads',
  description: 'Read One Piece Chapter Online At RedLineReads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
