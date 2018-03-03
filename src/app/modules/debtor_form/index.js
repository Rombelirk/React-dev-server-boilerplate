import { connect } from "react-redux";
import * as actions from "./actions";
import DebtorFormContainer from "./containers/debtorFormContainer";
import "./styles/styles.css";

const mapStateToProps = (state) => {
    return {
        dispatcher: state.dispatcher
    }
};

export default connect(mapStateToProps, actions)(DebtorFormContainer);