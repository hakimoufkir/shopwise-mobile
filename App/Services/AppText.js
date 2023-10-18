import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const baseStyle = StyleSheet.create({
  fontFamily: 'Helvetica',
  fontSize: 10,
});

const AppText = ({ style, children, ...props }) => {
  let newStyle;
  if (Array.isArray(style)) {
    newStyle = [baseStyle, ...style];
  } else {
    newStyle = [baseStyle, style];
  }

  return (
    <Text {...props} style={newStyle}>
      {children}
    </Text>
  );
};

AppText.propTypes = {
  children: PropTypes.node.isRequired,
  style: Text.propTypes.style,
};

AppText.defaultProps = {
  style: {},
};

export default AppText;