---
to: src/components/<%= type %>/<%= name %>/<%= name %>.tsx
---
/* react imports */
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {<%= name %>Style} from './<%= name %>.style';
/* 3rd-party dependency imports */
/* UI components */
/* store */
/* hooks */
/* constants & types */
/* utils */

export interface Props {
  customStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

/**
 * @component <%= name %>
 * @description ADD COMPONENT DOCUMENTATION HERE
 * @param {string} customStyle - additional styles to apply to the component wrapper
 * @example
 * ```
 * USAGE EXAMPLE HERE
 * ```
 */
const <%= name %> = (props: Props) => {
  /* props & state */
  const {children, customStyle} = props;

  /* Functions & Callbacks */
  /* Side Effects & Event Listeners */
  /* Event Handlers */
  /* JSX functions */

  return <View style={customStyle}>{children}</View>;
};

export default <%= name %>;
