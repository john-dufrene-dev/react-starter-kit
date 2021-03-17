// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// default color theme
const colorTheme = 'light';
const primary = '#009688';
const secondary = '#00e5ff';

export const defaultTheme = {
  palette: {
    mode: colorTheme,
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs
    }
  },
};
