import {ProductType} from '../types';

export enum Screens {
  Products = 'Products',
  Product = 'Product',
}

export type RootContainerStackParamList = {
  [Screens.Products]: undefined;
  [Screens.Product]: ProductParams;
};

export type ProductParams = {productId?: ProductType['id']};
