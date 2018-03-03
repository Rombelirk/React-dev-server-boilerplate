import React, {Component} from "react";
import {Layout} from "../../../components";


class LayoutContainer extends Component {


    render() {
        return (
            <Layout.Main>
                {/*<Layout.Header/>*/}
                <Layout.Content>
                    {this.props.children}
                </Layout.Content>
            </Layout.Main>
        )
    }
}

export default LayoutContainer;