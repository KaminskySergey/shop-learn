import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Providers from '@/providers/Providers'
import { SideBar } from '../components/ui/sidebar/Sidebar'
import { Header } from '../components/ui/header/Header'
import HeaderOrder from '../components/ui/header-order/HeaderOrder'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'order',
  description: '',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-x-hidden">
        <Providers>
          <div className='absolute top-0 w-full h-14 bg-black'>
            <HeaderOrder />
          </div>
          <div style={{ background: 'linear-gradient(45deg, rgba(67, 87, 208, 1) 7%, rgba(201, 80, 195, 1) 100%)', maxWidth: '1650px' }} className='pt-[96px] px-[64px] min-h-screen m-auto bg-green-400'>
            
              <main className='p-6 flex flex-col'>
                {children}
              </main>
        
          </div>
        </Providers>
      </body>
    </html>
  );
}

