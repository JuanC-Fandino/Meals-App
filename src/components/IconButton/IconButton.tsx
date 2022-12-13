/* react imports */
import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { IconButtonStyle } from './IconButton.style';

export interface Props {
  customStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  icon: string;
}

const IconButton = (props: Props) => {
  /* props & state */
  const { onPress, customStyle, icon } = props;

  /* Functions & Callbacks */
  /* Side Effects & Event Listeners */
  /* Event Handlers */
  /* JSX functions */

  return (
    <View style={customStyle}>
      <Pressable
        style={({ pressed }) => pressed && IconButtonStyle.pressed}
        onPress={onPress}>
        <Text style={IconButtonStyle.text}>{icon}</Text>
      </Pressable>
    </View>
  );
};

export default IconButton;
