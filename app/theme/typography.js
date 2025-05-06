// 🎨 STYLING LAYER
// Typography system and fonts
// 🎨 STYLING LAYER
// Typography system and fonts
/**
 * HeyYallNativeExpo Typography
 * 
 * This file contains the typography definitions for the app based on the design system.
 * Each style includes font weight, size, line height, and letter spacing.
 */

import { Platform } from 'react-native';

// Font family definitions
const fontFamilies = {
    primary: Platform.select({
        ios: 'Obviously',
        android: 'Obviously',
        default: 'Obviously',
    }),
    // Fallbacks in case the custom fonts fail to load
    fallback: Platform.select({
        ios: 'System',
        android: 'sans-serif',
        default: 'sans-serif',
    }),
};

// Font weights as defined in the design system
// Note: In React Native, font weights are strings
const fontWeights = {
    bold: '800', // Bold (800)
    semibold: '700', // Semibold (700)
    medium: '600', // Medium (600)
    regular: '400', // Regular (400)
};

// Typography styles exactly matching the design specs
const typography = {
    // Title styles
    largeTitle: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.semibold,
        fontSize: 26,
        lineHeight: 26,
        letterSpacing: 0,
    },

    mediumTitle: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.semibold,
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
    },

    // Headline styles
    headline1: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.semibold,
        fontSize: 34,
        lineHeight: 44,
        letterSpacing: 0,
    },

    headline2: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.medium,
        fontSize: 25,
        lineHeight: 33,
        letterSpacing: 0,
    },

    headline3: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.medium,
        fontSize: 19,
        lineHeight: 27,
        letterSpacing: 0,
    },

    // Body text styles with different weight variants
    bodyText18Bold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.bold,
        fontSize: 18,
        lineHeight: 26,
        letterSpacing: 0,
    },

    bodyText18Semibold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.semibold,
        fontSize: 18,
        lineHeight: 26,
        letterSpacing: 0,
    },

    bodyText18Medium: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.medium,
        fontSize: 18,
        lineHeight: 26,
        letterSpacing: 0,
    },

    bodyText16Bold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.bold,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
    },

    bodyText16Semibold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.semibold,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
    },

    bodyText16Medium: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.medium,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
    },

    bodyText14Bold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.bold,
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
    },

    bodyText14Semibold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.semibold,
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
    },

    bodyText14Medium: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.medium,
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
    },

    bodyText12Bold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.bold,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0,
    },

    bodyText12Semibold: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.semibold,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0,
    },

    bodyText12Medium: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.medium,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0,
    },

    // Label style
    label: {
        fontFamily: fontFamilies.primary,
        fontWeight: fontWeights.medium,
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0,
    },
};

// Simple size reference object (for one-off usage)
const fontSizes = {
    xs: 12,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    '2xl': 25,
    '3xl': 26,
    '4xl': 34,
};

// Line height reference
const lineHeights = {
    xs: 20,
    sm: 22,
    md: 24,
    lg: 26,
    xl: 27,
    xxl: 33,
    '2xl': 44,
};

export {
    typography,
    fontFamilies,
    fontWeights,
    fontSizes,
    lineHeights
};
