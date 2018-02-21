import { connect } from "react-redux";
import * as actions from "./actions";
import DebtorFormContainer from "./containers/debtorFormContainer";
// import "./styles/layout.scss";

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
};

export default connect(mapStateToProps, actions)(DebtorFormContainer);