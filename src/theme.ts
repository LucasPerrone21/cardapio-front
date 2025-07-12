'use client';
import { createTheme } from '@mui/material/styles';
import { Montserrat as montserratFont } from 'next/font/google';

const montserrat = montserratFont({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function theme(mode: 'dark' | 'light' = 'light') {
  return createTheme({
    cssVariables: true,
    typography: {
      fontFamily: montserrat.style.fontFamily,
      h1: {
        fontSize: '24pt',
        fontWeight: 700,
      },
      h2: {
        fontSize: '18pt',
        fontWeight: 600,
      },
      h3: {
        fontSize: '16pt',
        fontWeight: 700,
      },
      h4: {
        fontSize: '14pt',
        fontWeight: 700,
      },
      h5: {
        fontSize: '12pt',
        fontWeight: 700,
      },
      h6: {
        fontSize: '12pt',
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: '14pt',
      },
      subtitle2: {
        fontSize: '12pt',
      },
      body1: {
        fontSize: '12pt',
        fontWeight: 500,
      },
      body2: {
        fontSize: '10pt',
        fontWeight: 500,
      },
      button: {
        fontSize: '12pt',
        fontWeight: 700,
      },
      caption: {
        fontSize: '10pt',
        fontWeight: 600,
      },
    },
    palette: {
      background: {
        default: '#F6F6F6',
        paper: '#FEFEFE',
      },
      mode: mode,
      warning: {
        main: '#FF9E33',
        dark: '#FF5533',
        light: '#FFD234',
        contrastText: '#000',
      },
      primary: {
        main: '#942911',
        dark: '#792f24',
        light: '#ACE9E7',
        contrastText: '#FEFEFE',
      },
      error: {
        main: '#D32F2F',
        dark: '#B71C1C',
        light: '#EF5350',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#FF9F1C',
        dark: '#a4671c',
        light: '#57698C',
        contrastText: '#395182',
      },
      text: {
        primary: '#575B64',
        secondary: '#FFFFFF',
      },
      divider: '#E1E2E7',
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            ':before': {
              width: 0,
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '10pt',
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            ':last-child': {
              paddingBottom: '12px',
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#0A1626',
            color: '#FFFFFF',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: 'text.primary',
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained', color: 'secondary' },
            style: {
              'fontWeight': 'bold',
              'minWidth': '6rem',
              'textTransform': 'none',
              'boxShadow': 'none',
              'backgroundColor': '#B7C8EC',
              'border': '1px solid #B7C8EC',
              'color': '#224384',
              '&:hover': {
                backgroundColor: '#8AA6E0',
                color: '#224384',
                boxShadow: 'none',
                border: '1px solid #8AA6E0',
              },
              '&:active': {
                backgroundColor: '#8AA6E0',
                color: '#224384',
                border: '2px solid #3364C4',
              },
              '&:disabled': {
                backgroundColor: '#E2E9F7',
                color: '#E2E9F7',
                border: '2px solid #E2E9F7',
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              'fontWeight': 'bold',
              'minWidth': '6rem',
              'textTransform': 'none',
              'backgroundColor': 'white',
              'color': '#575B64',
              'border': '1px solid #A2A7B0',
              '&:hover': {
                backgroundColor: '#EEEFF1',
                color: '#575B64',
              },
              '&:active': {
                backgroundColor: '#EEEFF1',
                color: '#575B64',
                border: '2px solid #A2A7B0',
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            'fontWeight': 'bold',
            'minWidth': '6rem',
            'textTransform': 'none',
            '&:hover': {
              backgroundColor: '#1544a3',
              color: '#FFFFFF',
            },
            '&:Mui-disabled': {
              backgroundColor: '#424242',
            },
          },
        },
      },
    },
  });
}
