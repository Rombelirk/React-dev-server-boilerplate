import React from "react";
import "./button.css";




const Button = (props) => {

    const { id, action } = props;

    const onAction = (e) => {
        props.onAction(id, action)
    };

    return (
        <button {...props} className={"button"} onClick={onAction}>{props.value}</button>
    )
};

export default Button;