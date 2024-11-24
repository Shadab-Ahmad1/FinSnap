// import { alpha } from '@mui/material/styles';

// // ----------------------------------------------------------------------

// // SETUP COLORS

// export const grey = {
//   0: '#FFFFFF',
//   100: '#F9FAFB',
//   200: '#F4F6F8',
//   300: '#DFE3E8',
//   400: '#C4CDD5',
//   500: '#919EAB',
//   600: '#637381',
//   700: '#454F5B',
//   800: '#212B36',
//   900: '#161C24',
// };

// export const primary = {
//   lighter: '#D0ECFE',
//   light: '#73BAFB',
//   main: '#1877F2',
//   dark: '#0C44AE',
//   darker: '#042174',
//   contrastText: '#FFFFFF',
// };

// export const secondary = {
//   lighter: '#EFD6FF',
//   light: '#C684FF',
//   main: '#8E33FF',
//   dark: '#5119B7',
//   darker: '#27097A',
//   contrastText: '#FFFFFF',
// };

// export const info = {
//   lighter: '#CAFDF5',
//   light: '#61F3F3',
//   main: '#00B8D9',
//   dark: '#006C9C',
//   darker: '#003768',
//   contrastText: '#FFFFFF',
// };

// export const success = {
//   lighter: '#C8FAD6',
//   light: '#5BE49B',
//   main: '#00A76F',
//   dark: '#007867',
//   darker: '#004B50',
//   contrastText: '#FFFFFF',
// };

// export const warning = {
//   lighter: '#FFF5CC',
//   light: '#FFD666',
//   main: '#FFAB00',
//   dark: '#B76E00',
//   darker: '#7A4100',
//   contrastText: grey[800],
// };

// export const error = {
//   lighter: '#FFE9D5',
//   light: '#FFAC82',
//   main: '#FF5630',
//   dark: '#B71D18',
//   darker: '#7A0916',
//   contrastText: '#FFFFFF',
// };

// export const common = {
//   black: '#000000',
//   white: '#FFFFFF',
// };

// export const action = {
//   hover: alpha(grey[500], 0.08),
//   selected: alpha(grey[500], 0.16),
//   disabled: alpha(grey[500], 0.8),
//   disabledBackground: alpha(grey[500], 0.24),
//   focus: alpha(grey[500], 0.24),
//   hoverOpacity: 0.08,
//   disabledOpacity: 0.48,
// };

// const base = {
//   primary,
//   secondary,
//   info,
//   success,
//   warning,
//   error,
//   grey,
//   common,
//   divider: alpha(grey[500], 0.2),
//   action,
// };

// // ----------------------------------------------------------------------

// export function palette() {
//   return {
//     ...base,
//     mode: 'light',
//     text: {
//       primary: grey[800],
//       secondary: grey[600],
//       disabled: grey[500],
//     },
//     background: {
//       paper: '#FFFFFF',
//       default: grey[100],
//       neutral: grey[200],
//     },
//     action: {
//       ...base.action,
//       active: grey[600],
//     },
//   };
// }
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  lighter: '#D0FEE4', // Light green
  light: '#73FBB2', // Mid-tone green
  main: '#00B862', // Main green color
  dark: '#008748', // Darker green
  darker: '#004B28', // Darkest green
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#E0FFD6', // Light mint green
  light: '#A5FF84', // Bright mint green
  main: '#57D900', // Mint green
  dark: '#2D9400', // Dark mint green
  darker: '#1A6200', // Deep mint green
  contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF', // Pure white background for papers
      default: '#F4F6F8', // Light grey background for the app
      neutral: '#DFE3E8', // Slightly darker neutral grey background
    },
    action: {
      ...base.action,
      active: grey[600],
      hover: alpha(primary.main, 0.08), // Use the primary green for hover effects
      selected: alpha(primary.main, 0.16), // Use the primary green for selected state
      disabled: alpha(grey[500], 0.8),
      disabledBackground: alpha(grey[500], 0.24),
      focus: alpha(primary.main, 0.24), // Use the primary green for focus state
    },
  };
}
