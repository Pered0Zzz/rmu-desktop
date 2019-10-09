import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Description, DriveEta, FindInPage, Group, PlayCircleFilled} from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import {Box, Fab} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    button: {
        marginLeft: 700,
        marginRight: 10,
    },
    div: {
        display: 'flex'
    },
    box: {
        width: 100,
        maxWidth: 100,
        textAlign: 'center',
    },
    buttonP: {
        color: 'pink',
        width: 56,
        margin: 'auto',
        align: 'center',
    },
    buttonV: {
        color: 'lime',
        width: 56,
        margin: 'auto',
        align: 'center',
    },
    buttonD: {
        color: 'aqua',
        width: 56,
        margin: 'auto',
        align: 'center',
    },
    buttonU: {
        color: 'yellow',
        width: 56,
        margin: 'auto',
        align: 'center',
    },
    text: {
        textAlign: 'center',

    },
    menuI: {
        color: 'orange',
    },
    arrow1: {
        color: 'red',
    },
    arrow2: {
        color: 'blue',
    },
    menu: {
  color: 'Lime',
},
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
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
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon className={classes.menuI}/>
                    </Fab>
                    <Typography variant="h6" noWrap>
                        Головний Адміністратор Системи
                    </Typography>
                    <Button className={classes.button} variant="contained" color="primary">Налаштування</Button>
                    <Button variant="contained" color="secondary">Вихід</Button>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <Typography className={classes.menu}><h3>Меню</h3>
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>

                </div>

                <Divider/>
                <List>
                    {['Основні', 'Довідники'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <ArrowForwardIos className={classes.arrow1}/> : <ArrowForwardIos className={classes.arrow2}/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {/*<div style={styles.div}>*/}
                <Box className={classes.box}>
                    <Fab className={classes.buttonP}
                         label="Protocol_CTS"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <Description color="inherit"/>
                    </Fab>
                    <p className={classes.text}>Протоколи ОТК</p>
                </Box>
                <Box className={classes.box}>
                    <Fab className={classes.buttonV}
                         label="Work vehicle"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <DriveEta color="inherit"/>
                    </Fab>
                    <p className={classes.text}>Робота з ТЗ</p>
                </Box>
                <Box className={classes.box}>
                    <Fab className={classes.buttonD}
                         label="Work DL"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <FindInPage color="inherit"/>
                    </Fab>
                    <p className={classes.text}>Робота з ПВ</p>
                </Box>
                <Box className={classes.box}>
                    <Fab className={classes.buttonU}
                         label="Users"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <Group color="inherit"/>
                    </Fab>
                    <p className={classes.text}>Користувачі</p>
                </Box>

            </main>
        </div>
    );
}