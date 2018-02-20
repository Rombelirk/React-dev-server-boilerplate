import React from "react";
import "./main.css";

const Main = (props) => {
    return (
        <div className="layout-main-body">
            <div className="layout-main-container">
                {props.children}
            </div>
        </div>
    )
};

export default Main;