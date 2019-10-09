import React, {Fragment} from 'react';
import clsx from 'clsx';
import Fab from '@material-ui/core/Fab'
import {ArrowRight} from "@material-ui/icons";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Button} from "@material-ui/core";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        //backgroundColor: theme.palette.background.paper,
    },


    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    button: {
        margin: theme.spacing(1),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setState] = React.useState(null);

    const handleDrawerOpen = () => {
        setState(true);
    };

    const handleDrawerClose = () => {
        setState(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Fab
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        onClose={handleDrawerClose}
                        // edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon
                            color="secondary"
                        />
                    </Fab>
                    <Typography variant="h6" noWrap>
                        Головний Адміністратор Системи
                    </Typography>
                    <div style={{marginLeft: 'auto'}}>
                        <Button variant="contained" color="primary" className={classes.button}>Налаштування</Button>
                        <Button variant="contained" color="secondary" className={classes.button}>Вихід</Button>
                    </div>

                </Toolbar>

            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction = <ChevronLeftIcon/>}
                    </IconButton>
                </div>

                <Divider
                    variant="middle"
                />
                <List component="nav"
                      className={classes.root}
                      aria-label="app menu"
                      onClose={handleDrawerClose}
                >
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemText primary="Основні"/>
                        {/*<ListItemIcon> <ArrowRight /> </ListItemIcon>*/}
                    </ListItem>

                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemText primary="Довідники"/>
                        {/*<ListItemIcon> <ArrowRight /> </ListItemIcon>*/}
                    </ListItem>

                </List>
                <Divider
                    variant="middle"
                />

            </Drawer>

        </div>

    );
}