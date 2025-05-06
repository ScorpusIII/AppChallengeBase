import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import { colors } from '../../../theme/colors';

/**
 * Title component for section titles
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.large - Whether to use the large title style
 * @param {string} props.color - Text color (optional)
 * @param {Object} props.style - Additional styles to apply
 * @param {boolean} props.center - Whether to center the text
 * @param {React.ReactNode} props.children - Child elements
 * @returns {React.ReactNode} - Styled title component
 */
const Title = (props) => {
  const { 
    large = false,
    color = colors.text.primary,
    style,
    center = false,
    children,
    ...otherProps 
  } = props;
  
  // Use either largeTitle or mediumTitle based on the large prop
  const variant = large ? 'largeTitle' : 'mediumTitle';
  
  return (
    <Text
      variant={variant}
      color={color}
      style={[styles.title, style]}
      center={center}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 12
  }
});

export default Title;