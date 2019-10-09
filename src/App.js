import React, {Component} from "react"
import { Header, Footer} from "./components/Layouts"
import Desktop from "./components/Desktop"
import AppMenu from "./components/Layouts/AppMenu"

const styles = {
    div: {
        margin: 50,
    }
}

export default class App extends Component {

    render() {

        return (
            <div>
                <Header/>
                {/*<AppMenu/>*/}
                <box style={styles.div}>
                    {/*<Desktop />*/}
                </box>
                {/*<Footer/>*/}
            </div>

        )}
}
