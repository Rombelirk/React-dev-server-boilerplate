import { connect } from "react-redux";
import Content from "./containers/contentContainer";
import * as actions from "./actions";
// import "./styles/layout.scss";

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
};

export default connect(mapStateToProps, actions)(Content);