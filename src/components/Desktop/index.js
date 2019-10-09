import React, {Component} from "react"
import {Box, Fab} from "@material-ui/core"
import {Description, DriveEta, FindInPage, Group} from "@material-ui/icons"

const styles = {
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

    }
}

export default class extends Component {
    render() {
        return (
            <div style={styles.div}>
                <Box style={styles.box}>
                    <Fab style={styles.buttonP}
                         label="Protocol_CTS"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <Description color="inherit"/>
                    </Fab>
                    <p style={styles.text}>Протоколи ОТК</p>
                </Box>
                <Box style={styles.box}>
                    <Fab style={styles.buttonV}
                         label="Work vehicle"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <DriveEta color="inherit"/>
                    </Fab>
                    <p style={styles.text}>Робота з ТЗ</p>
                </Box>
                <Box style={styles.box}>
                    <Fab style={styles.buttonD}
                         label="Work DL"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <FindInPage color="inherit"/>
                    </Fab>
                    <p style={styles.text}>Робота з ПВ</p>
                </Box>
                <Box style={styles.box}>
                    <Fab style={styles.buttonU}
                         label="Users"
                         color="primary"
                         edge="start"
                         aria-label="Desktop icon"
                    >
                        <Group color="inherit"/>
                    </Fab>
                    <p style={styles.text}>Користувачі</p>
                </Box>
            </div>
        )
    }
}