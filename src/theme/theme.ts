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
  });