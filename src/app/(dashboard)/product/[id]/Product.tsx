'use client'

import { useProductById } from "@/hooks/useProduct";
import ProductCard from "./ProductCard";

interface IProductParams {
  params: {
    id: number
  }
}

export default function Product( {params}: IProductParams) {
  const {product, isLoading} = useProductById(params.id)
  if(!product) return
    return <div>
        {isLoading ? <div>loading...</div> : <ProductCard product={product}/>}
    </div>
}
