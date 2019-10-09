import React, {Component} from "react"
import {Header} from "./components/Layouts"
// import Desktop from "./components/Desktop"
// import AppMenu from "./components/Layouts/AppMenu"

const styles = {
    div: {
        margin: 50,
    }
}

export default class App extends Component {

    state = {
        data: undefined
    };

    componentWillMount() {

        fetch('http://localhost:3000/data-mu.json')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json.data
                });
                console.log('state/data', this.state.data);
            });
    }

    render() {
        console.log('App.render', this.state.data);
        let userName = this.state.data ? this.state.data.user.userName : '...';
        let modules = this.state.data === undefined? [] : this.state.data.modules.map((module, index)=>{
            console.log('module', index, module);
            return {
                url : module.url,
                text : module.launcher.text,
                path : module.launcherPaths.startmenu,

            }
        });
        // debugger;

        return (
            <div>
                <Header userName={userName} modules={modules}/>
                {/*<AppMenu/>*/}
                <box style={styles.div}>
                    {/*<Desktop />*/}
                </box>
                {/*<Footer/>*/}
            </div>
        )
    }


}
