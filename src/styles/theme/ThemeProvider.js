import * as React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MaterialTheme } from '@material-ui/styles';
import { ThemeProvider as StyledTheme } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import 'styles/felixStyle.css';
import felixTheme from './FelixTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2F5370',
      light: '#4B7392',
      dark: '#163A56',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F2F9FD',
      main: '#CAE1EF',
      dark: '#93BBD3',
      contrastText: '#252525',
    },
  },
  styledTheme: felixTheme,
});

type Props = {
  children: React.Node,
};

const ThemeProvider = ({ children }: Props) => (
  <StyledTheme theme={felixTheme}>
    <GlobalStyle />
    <MaterialTheme theme={theme}>{children}</MaterialTheme>
  </StyledTheme>
);

export default ThemeProvider;
