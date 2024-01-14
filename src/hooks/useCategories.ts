import CategoryService from '@/services/category/category.service'
import { useQuery } from '@tanstack/react-query'


export const useGetAllCategories = () => {
  const {data: categories, isLoading, error} = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const {data} = await CategoryService.getAll()
        return data;
    }
    
});

  return {
    categories,
    isLoading,
    error
  };
};

