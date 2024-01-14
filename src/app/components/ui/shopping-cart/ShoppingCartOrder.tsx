'use client'

import Image from "next/image"
import Link from "next/link";
import { useSelector } from "react-redux"
import Button from "../button/Button";
import ShoppingCart from "./ShoppingCart";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { redirect } from "next/navigation";
import { IInitialState } from "@/store/card/cart.interface";

interface IShoppingCartOrder {}
export default function ShoppingCartOrder({}: IShoppingCartOrder) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { cart } = useSelector((state: { cart: IInitialState, quantity: number }) => state.cart);
    const handleToggle = () => {
        setIsOpen(pS => !pS)
    }
    useEffect(() => {
      if(cart.length === 0 ){

          redirect('/')
      }
  }, [cart])
    return (
      <>
      <div>
        <ul className="divide-y divide-yellow-400 mb-4">
        {cart.map((item) => (
          <li key={item.id} className="py-4 flex items-center justify-between relative">
            <div className="flex items-center">
              <Link href={`/product/${item.id}`} className="flex items-center hover:text-slate-400">
                <Image
                  width={150}
                  height={150}
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <p className="text-lg font-medium text-black-800">{item.title}</p>
                  <p className="text-sm font-bold text-green-500">{item.price.toFixed(2)} USD</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-bold text-black-500">{item.quantity}</span>
            </div>
            <div className="absolute right-4 top-4">
            </div>
          </li>
        ))}
      </ul>
      {cart.length !== 0 && <div className="ml-auto">
        <Button style={{width: '200px'}} onClick={handleToggle} editProduct={true}>Edit Product</Button>
      </div>}
      </div>
      {isOpen && <Modal onClose={handleToggle}>
        <ShoppingCart setIsOpen={setIsOpen}/>
      </Modal>}
      </>
    );
  }
  