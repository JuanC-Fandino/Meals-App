/* react imports */
import React from 'react';
import {
  Platform,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { CategoryGridTileStyle } from './CategoryGridTile.style';
/* 3rd-party dependency imports */
/* UI components */
/* store */
/* hooks */
/* constants & types */
/* utils */

export interface Props {
  customStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  title: string;
  color?: string;
  onPress: () => void;
}

/**
 * @component CategoryGridTile
 * @description ADD COMPONENT DOCUMENTATION HERE
 * @param {string} customStyle - additional styles to apply to the component wrapper
 * @example
 * ```
 * USAGE EXAMPLE HERE
 * ```
 */
const CategoryGridTile = (props: Props) => {
  /* props & state */
  const { children, customStyle, title, color, onPress } = props;

  /* Functions & Callbacks */
  /* Side Effects & Event Listeners */
  /* Event Handlers */
  /* JSX functions */

  return (
    <View style={[CategoryGridTileStyle.outerContainer, customStyle]}>
      <Pressable
        android_ripple={{ color: 'black' }}
        style={({ pressed }) => [
          CategoryGridTileStyle.button,
          pressed && Platform.OS === 'ios'
            ? CategoryGridTileStyle.buttonPressed
            : null,
        ]}
        onPress={onPress}>
        <View
          style={[
            CategoryGridTileStyle.innerContainer,
            color ? { backgroundColor: color } : {},
          ]}>
          <Text style={CategoryGridTileStyle.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
