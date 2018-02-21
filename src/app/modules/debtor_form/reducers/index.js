const initialState = {

};


const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LAYOUT_ACTION":
            console.log("action dispatched");
            break;
        default:
            return state;
    }
};


export default contentReducer;