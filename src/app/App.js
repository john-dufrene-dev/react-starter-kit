import React, { Suspense } from "react";
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { useThemeConfig } from '../hook/theme/useThemeConfig'
import { Routes } from '../routes/Routes'
import { RouterSpinner } from '../components/BackDrop/StickyBackDrop/StickyBackDrop'

export const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={useThemeConfig()}>
        <CssBaseline />
        <Suspense fallback={<RouterSpinner />}>
          <Routes />
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}