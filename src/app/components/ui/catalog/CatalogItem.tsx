'use client'
import { IProduct, IProductDetails } from "@/types/product.interface";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/card/cart.slice";
import { notifyAddToCart, notifyErrorToCart } from "@/constants/toasts";
import IconCart from "../icon-cart/IconCart";
import { useIconCart } from "@/hooks/useIconCart";


export default function CatalogItem({ product }: IProductDetails) {
  const dispatch = useDispatch();
  const {toItemsCart} = useIconCart(product.id)
  const handleAddToCart = (product: IProduct) => {
    try {
      dispatch(addToCart(product));
      notifyAddToCart();
    } catch (error) {
      notifyErrorToCart()
    }
  };
    return (
        <li className="relative">
          {toItemsCart && <IconCart />}
            <Link href={`/product/${product.id}`}>
            <div  className="bg-white shadow-md rounded-md p-4 mb-4 flex flex-col transition-all ease-in-out hover:bg-zinc-200 w-full" style={{height: '370px'}}>
      <div className="w-full h-40 flex justify-center items-center mb-4">
        <Image src={product.image} width={150} height={100} alt="Product Image" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex flex-col justify-between">
        <div>
        <h2 className="text-xl font-semibold mb-2 h-14 overflow-hidden">{product.title}</h2>
          <div className="text-blue-600 font-medium mb-2">{product.category}</div>
          <div className="text-gray-800 font-bold mb-2">{product.price}$</div>
        </div>
      </div>
    </div>
            </Link>
        <div className="absolute inset-x-0 bottom-7 px-6">
          <Button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </Button>
        </div>
        </li>
    )
}
