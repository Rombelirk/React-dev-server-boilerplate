import { connect } from "react-redux";
import Layout from "./containers/layoutContainer";
import * as actions from "./actions";
import "./styles/layout.css";

const mapStateToProps = (state) => {
    return {
        layout: state.layout
    }
};

export default connect(mapStateToProps, actions)(Layout);