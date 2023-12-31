import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/providers/Providers'
import { SideBar } from './components/ui/sidebar/Sidebar'
import { Header } from './components/ui/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Providers>
        <div className='absolute top-0 bg-blue-700 w-full h-12' >
            <Header />
        </div>
         <div style={{background: 'linear-gradient(45deg, rgba(67, 87, 208, 1) 7%, rgba(201, 80, 195, 1) 100%)'}} className='max-w-screen-2xl mx-auto	 h-screen	bg-green-400 flex pt-12'>
          <SideBar / >

          <div>
 <main className='p-4'>
  {children}
 </main>
          </div>
         </div>
        </Providers>
      </body>
      {/* <div id='modal'></div> */}
    </html>
  )
}
