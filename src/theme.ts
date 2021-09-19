import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffc7ec",
      main: "#f395ba", // pink
      dark: "#bf658a",
    },
    secondary: {
      light: "#ffffb3",
      main: "#fed182", // yellow
      dark: "#c9a054",
    },
  },
  typography: {
    fontFamily: [
      "Open Sans",
    ].join(','),
  },
});

// reposive font sizes
theme.typography.h6 = {
  ...theme.typography.h6,
  fontSize: 18,
  lineHeight: 1.3,

  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  fontFamily: "DM Serif Display",
  fontSize: 32,

  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  },
};

theme.typography.caption = {
  ...theme.typography.caption,
  fontFamily: "SF Pro Text",
  fontSize: 18,
  lineHeight: 1.3,
  color: "#374A59",

  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
  },
};

export default theme;
