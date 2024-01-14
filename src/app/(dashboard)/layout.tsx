import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Providers from '@/providers/Providers'
import { SideBar } from '../components/ui/sidebar/Sidebar'
import { Header } from '../components/ui/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kama-Shop',
  description: 'The best Shop',
}




export default function RootLayout({
  children,
  showOrder,
}: {
  children: React.ReactNode;
  showOrder?: boolean;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-x-hidden">
        <Providers>
          <div className='absolute top-0 w-full h-14 bg-black'>
            <Header />
          </div>
          <div style={{ background: 'linear-gradient(45deg, rgba(67, 87, 208, 1) 7%, rgba(201, 80, 195, 1) 100%)', maxWidth: '1650px' }} className='min-h-screen m-auto bg-green-400 flex pt-12'>
            <SideBar />
            <div style={{ flex: 1 }}>
              <main className='p-4'>
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

