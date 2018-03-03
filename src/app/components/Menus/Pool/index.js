import React, {Component} from "react";
import PoolItem from "./PoolItem";
import "./pool.css";


class Pool extends Component {

    constructor(props) {
        super(props);

        this.state =
            {
                children:
                    [
                        1, 2, 3
                    ]
            };
    }



    render() {

        return (
            <div className="pool__container">
                <ul className="pool__list">
                    {
                        // if there are children, render them
                        this.props.children ? this.props.children :

                        // if not - render PoolItems
                        this.props.items.map((el, ind) => {

                            return <PoolItem
                                trigger={this.props.trigger}
                                title={el.title}
                                key={el.id}
                                id={el.id}
                                actions={el.actions}
                                onPoolItemAction={this.props.onPoolItemAction} // (id, action, value)
                                chosenMasterId = {el.chosenMasterId || null}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }

};

export default Pool;