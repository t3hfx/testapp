import {useQuery} from 'react-query';
import {fetchProducts} from '../api/api';

export const useGetProducts = () => {
  const {data, isLoading} = useQuery(['fetchProducts'], () => fetchProducts());
  return {data, isLoading};
};
