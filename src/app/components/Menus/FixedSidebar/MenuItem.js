import React from "react";


const MenuItem = (props) => {

    const onItemClick = (e) => {
        props.onClick(props.id)
    };

    return (
        <li onClick={onItemClick} className={"fixed-sidebar__menu-item" + (props.active ? " fixed-sidebar__menu-item__active" : "")}>
            <div className="fixed-sidebar__li">
                {props.label}
            </div>
        </li>
    )
};

export default MenuItem;