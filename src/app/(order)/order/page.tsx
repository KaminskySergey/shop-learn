import RootLayout from '@/app/(dashboard)/layout'
import type { Metadata } from 'next'
import Order from './Order'

export const metadata: Metadata = {
  title: 'order',
  description: 'order'
}

export default function Page() {
  return (
    <Order />
  )
}
