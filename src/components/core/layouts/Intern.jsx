import React from 'react';
import {Box, makeStyles, Toolbar} from "@material-ui/core";
import LeftMenu from './Menu/LeftMenu';

const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(45deg, #b7f4ec 80%, #b9e2f8)`,
    },
    blur: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(8px)',
        height: '100vh',
        display: 'flex',
    },
    content: {
        marginLeft: drawerWidth,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const InternLayout = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.blur}>
            <LeftMenu />
            <main className={classes.content}>
                { children }
            </main>
        </div>
    </div>;
};

export default InternLayout;