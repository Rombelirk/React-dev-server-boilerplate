import React from "react";
// import "./checkbox.css";


const Checkbox = (props) => {

    const { id, action } = props;
    let cb;

    const onAction = (e) => {
        props.onAction(id, action, cb.checked === true)
    };

    return (
        <input type="checkbox" ref={checkbox => {cb = checkbox}} onChange={onAction}/>
    )
};

export default Checkbox;