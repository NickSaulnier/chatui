import { createTheme } from "@mui/material";

import tokens from './_tokens.scss';

export const customTheme = createTheme({
    palette: {
      background: {
        default: tokens.white,
      },
      primary: {
        light: tokens.light,
        dark: tokens.dark,
        main: tokens.primary,
      },
      text: {
        primary: tokens.white,
        secondary: tokens.black,
      },
    },
    shape: {
      borderRadius: tokens.xxs,
    },
    spacing: [tokens.xs, tokens.s, tokens.m, tokens.l, tokens.xl, tokens.xxl],
    typography: {
      // fontSize: tokens.fontSize,
      // fontWeightLight: tokens.fontWeightLight,
      // fontWeightRegular: tokens.fontWeightRegular,
      // fontWeightMedium: tokens.fontWeightMedium,
      // fontWeightBold: tokens.fontWeightBold,
      body1: {
        fontSize: tokens.body1FontSize,
        fontWeight: tokens.body1FontWeight,
        fontFamily: tokens.body1FontFamily,
        color: tokens.white,
      },
    }
  });