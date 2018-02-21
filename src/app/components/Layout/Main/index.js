import React from "react";
import "./main.css";

const Main = (props) => {
    return (
        <div className="main-body">
            <div className="main-container">
                {props.children}
            </div>
        </div>
    )
};

export default Main;