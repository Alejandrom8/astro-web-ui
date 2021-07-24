import {withStyles} from "@material-ui/core/styles";
import React from "react";
import {Avatar, Badge, Box, Drawer, Icon, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import clsx from "clsx";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";

function isCurrent (current, toCompare) {
    return current === toCompare
        || current.split('/')[1] === toCompare.split('/')[1];
}

const drawerWidth = 85;

const LeftMenu = withStyles((theme) => ({
    drawer: {
        flexShrink: 0,
        overflowX: 'hidden',
        position: 'fixed',
        zIndex: 10,
        width: drawerWidth,
        padding: theme.spacing(2, 0)
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: 0,
    },
    optionText: {
    },
    selected: {
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
    },
    buttonSelected: {
        borderRadius: '16px'
    },
    button: {
        marginRight: theme.spacing(3.2),
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
    option: {
        margin: 0
    },
    invert: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    ib: {
        margin: 0
    }
}))(({ classes }) => {
    const history = useHistory();
    const current = history.pathname;

    return <Drawer
        variant={'permanent'}
        anchor={'left'}
        className={classes.drawer}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <Box className={classes.invert}>
            <Box className={classes.center}>
                <Badge
                    variant={'dot'}
                    color={'primary'}
                    overlap="circle"
                    badgeContent={' '}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Avatar className={classes.avatar} src={'/media/avatar2.png'}>hola</Avatar>
                </Badge>
            </Box>
            <Box flexGrow={1}>
                <List>
                    {[
                        {
                            label: 'Inicio ',
                            icon: <HomeIcon />
                        }
                    ].map((item, index) => (
                        <ListItem key={index} className={classes.option}>
                            <ListItemIcon>
                                <IconButton className={classes.ib}>
                                    <HomeIcon />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText
                                className={clsx(classes.optionText, {
                                    [classes.selected]: isCurrent(current, item.href)
                                })}
                            >
                                <Typography variant='h5'>{item.label}</Typography>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    </Drawer>
});

export default LeftMenu;