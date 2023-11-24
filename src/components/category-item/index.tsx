import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Category, Product} from '../../models';
import React from 'react';

const {width, height} = Dimensions.get('window');
type categoryItemProps = {
  item: Category;
};
export default function CategoryItem({item}: categoryItemProps) {
  return (
    <TouchableOpacity
      testID="category-item"
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        // backgroundColor: 'red',
      }}>
      <Image
        style={{width: width * 0.18, height: width * 0.18, borderRadius: 10}}
        source={{
          uri: item.src,
        }}
      />

      <Text style={{fontSize: 12, color: '#616161', fontWeight: '500'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
