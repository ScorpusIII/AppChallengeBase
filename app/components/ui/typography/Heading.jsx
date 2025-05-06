// 🎨 TYPOGRAPHY LAYER

import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import { colors } from '../../../theme/colors';

/**
 * Heading component for titles and headlines
 * 
 * @param {Object} props - Component props
 * @param {number} props.level - Heading level (1-3)
 * @param {string} props.color - Text color (optional)
 * @param {Object} props.style - Additional styles to apply
 * @param {boolean} props.center - Whether to center the text
 * @param {React.ReactNode} props.children - Child elements
 * @returns {React.ReactNode} - Styled heading component
 */
const Heading = (props) => {
  const { 
    level = 1,
    color = colors.text.primary,
    style,
    center = false,
    children,
    ...otherProps 
  } = props;
  
  // Map level to the appropriate typography variant
  let variant;
  
  switch (level) {
    case 1:
      variant = 'headline1';
      break;
    case 2:
      variant = 'headline2';
      break;
    case 3:
      variant = 'headline3';
      break;
    default:
      variant = 'headline1';
  }
  
  return (
    <Text
      variant={variant}
      color={color}
      style={[styles.heading, style]}
      center={center}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 16
  }
});

export default Heading;