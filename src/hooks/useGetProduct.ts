import {useMemo} from 'react';

import {fetchProductById} from '../api/api';
import {useQuery} from 'react-query';

export const useGetProduct = (id: number) => {
  const {data} = useQuery(['fetchProductById', id], () => fetchProductById(id));

  return useMemo(
    () => ({
      data,
    }),
    [data],
  );
};
