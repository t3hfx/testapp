import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React from 'react';
import {ProductItem} from '../components/ProductItem';
import {RootContainerStackParamList, Screens} from '../constants/navigation';
import {useGetProducts} from '../hooks/useGetProducts';
import {ProductType} from '../types';

type Props = NativeStackScreenProps<
  RootContainerStackParamList,
  Screens.Products
>;

export const Products = ({}: Props) => {
  const {data} = useGetProducts();

  const renderItem = ({item}: ListRenderItemInfo<ProductType>) => {
    return (
      <ProductItem
        id={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
      />
    );
  };

  return (
    <FlashList renderItem={renderItem} estimatedItemSize={50} data={data} />
  );
};
