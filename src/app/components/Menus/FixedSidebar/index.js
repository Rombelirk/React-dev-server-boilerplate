import React, {Component} from "react";
import MenuItem from "./MenuItem";
import "./fixed_sidebar.css";


class FixedSidebar extends Component {

    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);

        this.state = {
            children: [
                {id: 1, label: "Начальные данные"},
                {id: 2, label: "Паспорт"},
                {id: 3, label: "Адрес"},
                {id: 4, label: "Сведения о заемщике"},
                {id: 5, label: "Место работы"},
                {id: 6, label: "Фото"},
                {id: 7, label: "Характеристика"},
                {id: 8, label: "Решение"},
            ],
            activeChildIndex: "",

        }
    }

    onItemClick(id) {
        let index = this.state.children.findIndex(el => {
            return el.id === id;
        });
        console.log(id);
        this.setState({
            activeChildIndex: index
        });
    }

    render() {
        return (
            <div className="fixed-sidebar__container">
                <ul className="fixed-sidebar__list">
                    {
                        this.state.children.map((el, ind) => {
                            return <MenuItem onClick={this.onItemClick} {...el} active={ind === this.state.activeChildIndex}/>
                        })
                    }
                </ul>
            </div>
        )
    }

};

export default FixedSidebar;