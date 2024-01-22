import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProductType} from '../types';
import {Screens} from '../constants/navigation';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigation/types';

type Props = {
  imageOnTop?: boolean;
  description?: ProductType['description'];
};

export const ProductItem = ({
  id,
  title,
  image,
  price,
  description,
  imageOnTop,
}: Pick<ProductType, 'id' | 'title' | 'image' | 'price'> & Props) => {
  const navigation = useNavigation<RootNavigationProp>();
  const onPress = () => {
    navigation.navigate(Screens.Product, {productId: id});
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        {imageOnTop && (
          <Image
            source={{uri: image}}
            resizeMode="contain"
            style={styles.image}
          />
        )}
        <Text style={styles.title}>{title}</Text>
        {!imageOnTop && (
          <Image
            source={{uri: image}}
            resizeMode="contain"
            style={styles.image}
          />
        )}
        <Text style={styles.price}>{`${price}$`}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
});
