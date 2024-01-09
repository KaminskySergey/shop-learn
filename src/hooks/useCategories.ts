import CategoryService from '@/services/category/category.service'
import { ICategory } from '@/types/category.interface';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const CATEGORIES = 'categories'

export const useGetAllCategories = () => {
  const {data: categories, isLoading, error} = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        // const {data} = await axios.get('http://localhost:4200/api/categories')
        const {data} = await CategoryService.getAll()
        return data as ICategory[]
    }
    
});

  return {
    categories,
    isLoading,
    error
  };
};

