import ProductService from "@/services/product/product.service";
import { useQuery } from "@tanstack/react-query";

export const useProductById = (id: number) => {
    const {data: product, isLoading, error} = useQuery({
      queryKey: ['product'],
      queryFn: async () => {
          const {data} = await ProductService.getById(id)
          return data
      },
      
  });
  
    return {
        product,
      isLoading,
      error
    };
  };
  