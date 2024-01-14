'use client'

import { useProductById } from "@/hooks/useProduct";
import ProductCard from "./ProductCard";
import NotFound from "../../not-found";

interface IProductParams {
  params: {
    id: number
  }
}

export default function Product( {params}: IProductParams) {
  const {product, isLoading} = useProductById(params.id)
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!product) {
    return NotFound();
  }
    return <>
        <ProductCard product={product}/>
        </>
}
