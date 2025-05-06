import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import { colors } from '../../../theme/colors';

/**
 * Label component for form labels and small UI labels
 * 
 * @param {Object} props - Component props
 * @param {string} props.color - Text color (optional)
 * @param {Object} props.style - Additional styles to apply
 * @param {boolean} props.center - Whether to center the text
 * @param {boolean} props.uppercase - Whether the text should be all uppercase
 * @param {React.ReactNode} props.children - Child elements
 * @returns {React.ReactNode} - Styled label component
 */
const Label = (props) => {
  const { 
    color = colors.text.muted,
    style,
    center = false,
    uppercase = true,
    children,
    ...otherProps 
  } = props;
  
  const textContent = uppercase ? children.toString().toUpperCase() : children;
  
  return (
    <Text
      variant="label"
      color={color}
      style={[styles.label, style]}
      center={center}
      {...otherProps}
    >
      {textContent}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8
  }
});

export default Label;