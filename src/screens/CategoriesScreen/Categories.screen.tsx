/* react imports */
import React from 'react';
import { FlatList, View } from 'react-native';
import { CategoriesStyle } from './Categories.style';
import { CATEGORIES } from '../../data/data';
import CategoryGridTile from '../../components/CategoryGridTile';
import Category from '../../models/category';
import { useNavigation } from '@react-navigation/native';

/* keyExtractor
(item: object, index: number) => string;
Used to extract a unique key for a given item at the specified index. Key is
used for caching and as the react key to track item re-ordering.
The default extractor checks item.key, then item.id, and then falls back to
using the index, like React does. */

const CategoriesScreen = (): JSX.Element => {
  const { navigate } = useNavigation();
  function renderCategoryItem(itemData: {
    item: Category;
    index: number;
    separators: object;
  }) {
    function onPressHandler() {
      navigate('Meals Overview' as never);
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <View data-testid="categories-screen">
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
