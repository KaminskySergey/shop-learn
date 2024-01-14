import ShoppingCart from '@/app/components/ui/shopping-cart/ShoppingCart'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'shopping cart',
  description: ''
}

export default function Page() {
  return <ShoppingCart />
}
