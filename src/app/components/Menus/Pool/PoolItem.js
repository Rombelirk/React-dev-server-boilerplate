import React from "react";
import "./pool.scss";
import {InteractiveUI} from "../../../components";


const PoolItem = (props) => {

    return (
        <li className="pool-item__container">
            <div style={{flex: 1}}>{props.title}</div>
            {

                props.actions && props.actions.map((el, ind) => {
                    let type;

                    // render appropriate react element according to el.type

                    if (el.type) {
                        type = el.type.replace(/\b\w/g, function (firstLetter) {
                            return firstLetter.toUpperCase()
                        });
                    }



                    return (
                        <div style={type === "Button" ? {flex: 1, justifyContent:"flex-end"} : {flex: 1,}}>
                            {
                                React.createElement(
                                    InteractiveUI[type],
                                    {
                                        chosenMasterId: props.chosenMasterId || null,
                                        trigger: props.trigger,
                                        id: props.id,
                                        key: ind,
                                        ...el,
                                        onAction: props.onPoolItemAction
                                    }, null
                                )
                            }
                        </div>

                    )
                })
            }
        </li>
    )
};

export default PoolItem;