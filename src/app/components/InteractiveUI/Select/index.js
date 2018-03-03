import React from "react";

// import "./select.css";

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.input = "";

        this.onAction = this.onAction.bind(this);

    }


    onAction(e) {
        let {id, action} = this.props;

        this.props.onAction(id, action, e.target.value)

    };

    componentWillReceiveProps(props) {
// debugger
        if (props.chosenMasterId == null) this.input.value = 0;


        if (props.options.length > this.props.options.length)this.input.value = 0;
    };


    render() {
        return (
            <select ref={inp => this.input = inp} onChange={this.onAction}>
                <option value={0}>
                    Выберите мастера:
                </option>
                {

                    this.props.options.map((el, ind) => {
                        return (
                            <option key={ind} id={el.id} value={el.value || el.id}>
                                {
                                    el.title
                                }
                            </option>
                        )
                    })
                }
            </select>
        )
    }
};

export default Select;