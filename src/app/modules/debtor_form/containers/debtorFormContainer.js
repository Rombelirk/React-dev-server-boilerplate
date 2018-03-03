import React, {Component} from "react";
import { Containers, Menus, Dialog, InteractiveUI } from "../../../components";
// import Timer from "../../../components/InteractiveUI/Timer";


const { Block } = Containers;
const { Pool } = Menus;
const { ModalWindow } = Dialog;
const { Button } = InteractiveUI;

class DebtorFormContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newApplies: [],
            freeMasters: []
        }
    }

    componentWillReceiveProps( newProps) {

        this.setState({
            newProps
        });
    }


    render() {


        return (

            <div className={"sections"}>



                <ModalWindow display={this.props.dispatcher.modalWindow.display} minHeight={120} width={400}>
                    <div className={"dialog__text__container"}>{this.props.dispatcher.modalWindow.text}</div>

                    <div className={"dialog-buttons__container"}>
                        <Button style={{height: 30+"px"}} value={"ОК"} onAction={this.props.dispatcher.modalWindow.onOk}/>
                        <div style={{width:90+"px"}}></div>
                        <Button style={{height: 30+"px"}} value={"Отмена"} onAction={this.props.dispatcher.modalWindow.onCancel}/>
                    </div>



                </ModalWindow>

                <div className={"pools"}>

                    <Block style={{marginRight:10+"px"}} header={"Новые заявки"}>
                        <Pool
                            onPoolItemAction={this.props.onPoolItemAction}
                            items={this.props.dispatcher.newApplies}
                        />
                    </Block>

                    <Block style={{marginLeft:10+"px"}} header={"Свободные мастера"}>
                        <Pool
                            onPoolItemAction={this.props.onPoolItemAction}
                            items={this.props.dispatcher.freeMasters}
                        />
                    </Block>

                </div>

                <div className={"current_bids"}>
                    <Block header={"Текущие заявки (попадают в архив через 15 сек.)"}>

                        <Pool
                            trigger={this.props.moveIssueToArchive}
                            // onPoolItemAction={this.props.onPoolItemAction}
                            items={this.props.dispatcher.issuesInProcess}
                        />

                    </Block>
                </div>
                {/*<Timer/>*/}

                <div className={"bids_archive"}>
                    <Block header={"Архив заявок"}>
                        <Pool
                            items={this.props.dispatcher.issuesInArchive}
                        />
                    </Block>
                </div>

            </div>


        )
    }
}

export default DebtorFormContainer;