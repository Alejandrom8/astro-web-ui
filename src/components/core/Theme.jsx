import {createMuiTheme} from "@material-ui/core";

const titleStyles = {
    fontFamily: 'Lato',
    fontStyle: 'bold'
};

export const baseColors = {
    primary: '#79d7f7'
};

export const baseShadows = {
    card: '0px 0px 30px rgba(255, 255, 255, 0.3), 0px 4px 60px rgba(255, 255, 255, 0.5)'
};

const base = {
    typography: {
        fontFamily: [
            'Lato',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"'
        ].join(','),
        h1: {
            ...titleStyles,
            fontSize: '25px',
            fontWeight: 800,
            lineHeight: '32px',
            marginBottom: '1em',
            letterSpacing: '0.2em',
        },
        h2: {
            ...titleStyles,
            fontSize: '25px',
            fontWeight: '700',
        },
        h3: {
            ...titleStyles,
            fontSize: '22px',
            fontWeight: 500,
            lineHeight: '20px',
        },
        h4: {
            ...titleStyles,
            fontSize: '19px',
            fontWeight: 'bold',
            lineHeight: '15px',
        },
        h5: {
            ...titleStyles,
            fontSize: '16px',
            fontWeight: 900,
            lineHeight: '16.5px',
        },
        h6: {
            fontSize: '14px',
            fontWeight: 900,
            lineHeight: '16px',
            letterSpacing: '0.15em',
        },
        body1: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '20px',
        },
        body2: {
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: '20px',
        },
        caption: {
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '12px',
        }
    },
    palette: {
        primary: {
            main: baseColors.primary
        },
        text: {
            primary: '#222'
        },
        background: {
            primary: '#d3f6f9'
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    background: '#000',
                }
            }
        },
        MuiCard: {
            root: {
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                borderRadius: '20px',
                padding: '10px',
            }
        },
        MuiCardContent: {
            root: {
                padding: '30px',
            }
        },
        MuiButton: {
            containedPrimary: {
                borderRadius: '20px',
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        MuiTextField: {
            root: {
                borderRadius: '20px',
                backgroundColor: '#F7F7F7',
                '&:before': {
                    backgroundColor: 'rgba(0.5, 121, 215, 247)'
                }
            },
            notchedOutline: {
                borderRadius: '20px'
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderRadius: '20px'
            },
        },
        MuiInput: {
            root: {
                borderRadius: '20px'
            },
            notchedOutline: {
                borderRadius: '20px'
            }
        }
    }
};

const theme = createMuiTheme(base);

export default theme;