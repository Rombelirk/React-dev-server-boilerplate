import React, {Component} from "react";
import { Layout } from "../../../components";

class LayoutContainer extends Component {


    render() {
        return (
            <Layout.Main>
                <h1>Layout!!</h1>
                {this.props.children}
            </Layout.Main>
        )
    }
}

export default LayoutContainer;