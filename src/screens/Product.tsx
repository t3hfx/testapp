import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootContainerStackParamList, Screens} from '../constants/navigation';
import React from 'react';
import {useGetProduct} from '../hooks/useGetProduct';
import {ScrollView} from 'react-native';
import {ProductItem} from '../components/ProductItem';

type Props = NativeStackScreenProps<
  RootContainerStackParamList,
  Screens.Product
>;

export const Product = ({route}: Props) => {
  const {productId} = route.params;
  const {data} = useGetProduct(productId as number);
  return (
    <ScrollView>
      {data && (
        <ProductItem
          imageOnTop
          id={data.id}
          title={data.title}
          price={data.price}
          image={data.image}
          description={data.description}
        />
      )}
    </ScrollView>
  );
};
