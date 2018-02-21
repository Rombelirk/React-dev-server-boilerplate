import React from "react";
import "./content.css";

const Content = (props) => {
    return (
        <div className="content-container">
            {props.children}
        </div>
    )
};

export default Content;