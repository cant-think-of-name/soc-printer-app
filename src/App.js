import React from 'react';

import Header from "./layouts/Header";
import Body from "./layouts/Body";
import Footer from "./layouts/Footer";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
