import {combineReducers, createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';

import layoutReducer from "../modules/layout/reducers/index";
import contentReducer from "../modules/content/reducers/index";


const rootReducer = combineReducers({
    layout: layoutReducer,
    content: contentReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;