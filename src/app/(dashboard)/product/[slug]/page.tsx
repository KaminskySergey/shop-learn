import { usePathname } from "next/navigation";
import ProductCard from "./ProductCard";
import { useProductBySlug } from "@/hooks/useProduct";
import Product from "./Product";


export default function ProductPage({params}) {
    return (
  <div>
  <Product params={params}/>
  </div>
      )
  } 