import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { typography } from '../../../theme/typography';
import { colors } from '../../../theme/colors';

/**
 * Custom Text component that applies typography styles from the design system
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - The typography variant to use (e.g., 'largeTitle', 'bodyText16Medium')
 * @param {string} props.color - Text color (optional, defaults to primary text color)
 * @param {Object} props.style - Additional styles to apply
 * @param {boolean} props.center - Whether to center the text
 * @param {React.ReactNode} props.children - Child elements
 * @returns {React.ReactNode} - Styled text component
 */
const Text = (props) => {
  const { 
    variant = 'bodyText16Medium',
    color,
    style, 
    center = false,
    children,
    ...otherProps 
  } = props;
  
  // Get the typography style for the specified variant
  const variantStyle = typography[variant] || typography.bodyText16Medium;
  
  // Default color if not provided
  const textColor = color || colors.text.primary;
  
  return (
    <RNText 
      style={[
        variantStyle,
        { color: textColor },
        center && styles.center,
        style // Custom styles passed by the parent component
      ]} 
      {...otherProps}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center'
  }
});

export default Text;