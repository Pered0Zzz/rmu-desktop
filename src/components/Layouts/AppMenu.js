import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const styles = {
    list: {
        width: 250,
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginRight: 'auto',
    },
}

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    const sideList = side => (
        <div
            style={styles.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Основні', 'Довідники'].map((text, index) => (
                    <ListItem button key={text}>

                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>

        </div>
    );
    return (
        <div>
            <Button
                onClick={toggleDrawer('left', true)}
                aria-label="open drawer"
            >Open Left</Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}
