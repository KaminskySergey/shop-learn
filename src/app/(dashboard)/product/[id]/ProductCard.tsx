'use client'
import Button from "@/app/components/ui/button/Button";
import IconCart from "@/app/components/ui/icon-cart/IconCart";
import { notifyAddToCart, notifyErrorToCart } from "@/constants/toasts";
import { useIconCart } from "@/hooks/useIconCart";
import { addToCart } from "@/store/card/cart.slice";
import { IProduct, IProductDetails } from "@/types/product.interface";
import Rating from '@mui/material/Rating';
import Image from "next/image";
import { useMemo } from "react";
import { useDispatch } from "react-redux";



interface IProductCard {
  product: IProduct;
}

export default function ProductCard({ product }: IProductDetails) {
  const dispatch = useDispatch();
  const handleAddToCart = (product: IProduct) => {
    try {
      dispatch(addToCart(product));
      notifyAddToCart();
    } catch (error) {
      notifyErrorToCart()
    }
  };
  const {toItemsCart} = useIconCart(product.id)
  ;
  return <div className="container mx-auto p-8">
    
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-4 relative">
      {toItemsCart && <IconCart />}
        <Image width={150} height={150} src={product.image} alt={product.title} className="w-full h-auto rounded-md" />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 mb-4 md:pl-8">


        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <p className="text-black-600 mb-4">{product.description}</p>
        <div className="flex gap-4 items-center mb-4">
          <div className="text-lg font-bold ">${product.price}</div>
          <div className="text-lg font-bold h-7">
            <Rating 
            name="text-feedback"
            value={product.rating.rate}
            readOnly
            precision={0.5}
            />
          </div>
          <div className="text-sm font-medium underline">
{product.rating.count} reviews
            </div>
        </div>
        <Button detailsPage={true} onClick={() => handleAddToCart(product)}>
          Add to Cart
        </Button>
      </div>
    </div>
  </div>
}
