'use client';
import theme from '@/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import React from 'react';

export default function ThemeProvider({ children }: Readonly<React.PropsWithChildren>) {
  return <MuiThemeProvider theme={theme('light')}>{children}</MuiThemeProvider>;
}
