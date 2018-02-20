import  React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from "./store/store.js";
import Layout from "./modules/layout";
import Content from "./modules/content";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Router>
                        <Route path="/content" component={Content}/>
                    </Router>
                </Layout>
            </Provider>
        );
    }
}

export default App;
