import {createMuiTheme} from "@material-ui/core";

export const baseColors = {
    primary: '#003f88'
};

export const baseShadows = {
    card: '0px 0px 30px rgba(0, 0, 0, 0.03), 0px 4px 60px rgba(0, 0, 0, 0.05)'
};

const base = {
    palette: {
        primary: {
            main: baseColors.primary
        },
        text: {
            primary: '#fff'
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: '#ddd'
                }
            }
        },
    }
};

const theme = createMuiTheme(base);

export default theme;