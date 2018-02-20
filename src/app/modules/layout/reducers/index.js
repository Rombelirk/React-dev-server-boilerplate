const initialState = {

};


const layoutReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LAYOUT_ACTION":
            console.log("action dispatched");
            break;
        default:
            return state;
    }
};


export default layoutReducer;