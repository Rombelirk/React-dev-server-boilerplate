import  React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from "./store/store.js";
import "./App.css";
import Layout from "./modules/layout";
import DebtorForm from "./modules/debtor_form";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Router>
                        <Route path="/content" component={DebtorForm}/>
                    </Router>
                </Layout>
            </Provider>
        );
    }
}

export default App;
