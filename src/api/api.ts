import {Config} from '../constants/config';
import {ProductType} from '../types';

export const fetchProducts = (): Promise<ProductType[]> =>
  fetch(Config.BASE_URL + 'products/')
    .then(res => res.json())
    .catch(e => {
      throw new Error(e);
    });

export const fetchProductById = (id: ProductType['id']): Promise<ProductType> =>
  fetch(Config.BASE_URL + `products/${id}`)
    .then(res => res.json())
    .catch(e => {
      throw new Error(e);
    });
