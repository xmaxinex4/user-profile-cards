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
        }
    },
});

export default theme;
