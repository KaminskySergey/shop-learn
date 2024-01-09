'use client'

import { useProductBySlug } from "@/hooks/useProduct";
import ProductCard from "./ProductCard";

interface IProduct {}

export default function Product({params}: IProduct) {
  const {product, isLoading} = useProductBySlug(params.slug)
    return <div>
        {isLoading ? <div>loading...</div> : <ProductCard product={product}/>}
    </div>
}
