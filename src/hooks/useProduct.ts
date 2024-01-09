import ProductService from "@/services/product/product.service";
import { useQuery } from "@tanstack/react-query";

export const useProductBySlug = (slug: string) => {
    const {data: product, isLoading, error} = useQuery({
      queryKey: ['product'],
      queryFn: async () => {
          const {data} = await ProductService.getBySlug(slug)
          return data
      }
      
  });
  
    return {
        product,
      isLoading,
      error
    };
  };
  