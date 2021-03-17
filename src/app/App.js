import React, { Fragment, Suspense } from "react";
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { useThemeConfig } from '../hook/theme/useThemeConfig'
import { Routes } from '../routes/Routes'

export const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={useThemeConfig()}>
        <CssBaseline />
        <Suspense fallback={<Fragment />}>
          <Routes />
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}
