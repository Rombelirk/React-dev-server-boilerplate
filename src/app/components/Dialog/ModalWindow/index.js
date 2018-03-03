import React, {Component} from "react";
import "./modal_window.css";
import CloseButton from "./close_red.png";


class ModalWindow extends Component {

    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.state = {
            visible: false
        }
    }



    componentWillReceiveProps(newProps) {



        this.setState({
            visible: newProps.display
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }



    render() {
        return (
            <div
                style={{
                    display: this.state.visible === true ? "flex" : "none"
                }}
                className="modal-window__blurred-area">

                <div className="modal-window__container"
                     style={{
                         minHeight: this.props.minHeight,
                         minWidth: this.props.minWidth,
                         width: this.props.width,

                     }}>

                    {/*<div className={"modal-window__close-button__container"}>*/}
                        {/*<img onClick={this.closeModal} className={"modal-window__close-button"} src={CloseButton}*/}
                             {/*alt=""/>*/}
                    {/*</div>*/}




                    {this.props.children}
                </div>
            </div>
        )
    }

};

export default ModalWindow;