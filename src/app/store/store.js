import {combineReducers, createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';

import layoutReducer from "../modules/layout/reducers/index";
import dispatcherReducer from "../modules/debtor_form/reducers/index";


const rootReducer = combineReducers({
    layout: layoutReducer,
    dispatcher: dispatcherReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;