import React from "react";
import "./main.css";

const Main = (props) => {
    return (
        <div className="main-container">
            {props.children}
        </div>
    )
};

export default Main;