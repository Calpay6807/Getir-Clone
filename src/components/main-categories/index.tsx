import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import CategoryItem from '../category-item';
import {Category} from '../../models';
import CategoriesGetir from '../../../assets/CategoriesGetir';

export default function MainCategories() {
  const [categories, setCategories] =
    React.useState<Category[]>(CategoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item, index) => (
          <CategoryItem key={index} item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
