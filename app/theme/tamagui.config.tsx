import { createTamagui } from 'tamagui';
import { createTokens } from '@tamagui/core';
import { createFont, createMedia, createTheme, createSizeTokens } from 'tamagui';
import { colors } from './colors';

const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  true: 10,
};

const space = { ...size };

const radius = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  true: 4,
};

const fontConfig = {
  family: {
    "Obviously": { normal: 'Obviously' },
    "Montserrat": { normal: 'Montserrat' },
  },
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 48,
    12: 56,
    13: 64,
    14: 72,
  },
  lineHeight: {
    1: 20,
    2: 22,
    3: 24,
    4: 28,
    5: 30,
    6: 34,
    7: 38,
    8: 42,
    9: 46,
    10: 50,
    11: 58,
    12: 66,
    13: 74,
    14: 82,
  },
  weight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },
  letterSpacing: {
    0: 0,
    1: -0.05,
    2: -0.025,
    3: 0,
    4: 0.025,
    5: 0.05,
    6: 0.075,
    7: 0.1,
    8: 0.15,
    9: 0.2,
    10: 0.3,
    11: 0.4,
    12: 0.5,
  },
};

const createSimpleFont = (family: keyof typeof fontConfig.family) => {
  return createFont({
    family: family,
    size: fontConfig.size,
    lineHeight: fontConfig.lineHeight,
    weight: fontConfig.weight,
    letterSpacing: fontConfig.letterSpacing,
  });
};

export const tokens = createTokens({
  size,
  space,
  radius,
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
  color: {
    ...colors.background,
    ...colors.text,
    ...colors.brand,
    ...colors.accent,
  },
});

export const fonts = {
  heading: createSimpleFont('Obviously'),
  body: createSimpleFont('Montserrat'),
};

export const media = createMedia({
  sm: { maxWidth: 640 },
  md: { maxWidth: 768 },
  lg: { maxWidth: 1024 },
  xl: { maxWidth: 1280 },
  xxl: { maxWidth: 1536 },
  gtSm: { minWidth: 641 },
  gtMd: { minWidth: 769 },
  gtLg: { minWidth: 1025 },
  gtXl: { minWidth: 1281 },
  gtXxl: { minWidth: 1537 },
  landscape: { orientation: 'landscape' },
  portrait: { orientation: 'portrait' },
});

export const themes = {
  light: createTheme({
    background: colors.background.primary,
    text: colors.text.primary,
    brand: colors.brand.primary,
    accent: colors.accent.primary,
  }),
  dark: createTheme({
    background: colors.background.secondary,
    text: colors.text.secondary,
    brand: colors.brand.secondary,
    accent: colors.accent.secondary,
  }),
};

const tamaguiConfig = createTamagui({
  tokens,
  fonts,
  themes,
  media,
  shorthands: {
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    bg: 'backgroundColor',
  },
});

type TamaguiConfig = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiConfig {}
}

export default tamaguiConfig;