import { createTheme } from "@mui/material";

import tokens from './_tokens.scss';

export const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: Number(tokens.breakXs),
        sm: Number(tokens.breakSm),
        md: Number(tokens.breakMd),
        lg: Number(tokens.breakLg),
        xl: Number(tokens.breakXl),
      },
    },
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
      grey: tokens.grey,
    },
    shape: {
      borderRadius: 1,
    },
    spacing: [tokens.xs, tokens.sm, tokens.md, tokens.lg, tokens.xl, tokens.xxl],
    typography: {
      body1: {
        fontSize: tokens.body1FontSize,
        fontWeight: tokens.body1FontWeight,
        fontFamily: tokens.body1FontFamily,
        color: tokens.white,
      },
    }
  });