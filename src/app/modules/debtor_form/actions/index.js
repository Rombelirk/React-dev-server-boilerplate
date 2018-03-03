
export const moveIssueToArchive = id => {
    return (dispatch) => {

        dispatch({type:"MOVE_ISSUE_TO_ARCHIVE", id});
    }
};


export const onPoolItemAction = (id, action, value) => {


    return (dispatch, getState) => {

        switch (action) {
            case "assign_issue_to_master":

                let index = getState().dispatcher.newApplies.findIndex(el => {
                    return el.id === id
                });

                let masterID = getState().dispatcher.newApplies[index].chosenMasterId;

                if (masterID == 0 || masterID === undefined) return;

                const promise = new Promise((resolve, reject) => {
                    dispatch({
                        type: "SHOW_MODAL_WINDOW",
                        onOk: resolve,
                        onCancel: reject,
                        text: "Вы уверены, что хотите назначить мастера " + getState().dispatcher.map.workers[masterID] + " на объект " + getState().dispatcher.map.shops[id] + "?"
                    });
                }).then(
                    ok => {
                        dispatch({type: "CLOSE_MODAL_WINDOW"});

                        dispatch({type: "ASSIGN_ISSUE_TO_MASTER", issueId: parseInt(id), masterId: masterID});
                    },
                    cancel => {
                        dispatch({type: "CLOSE_MODAL_WINDOW"});

                    }
                );

                break;

            case "choose_master":


                dispatch({type: "CHOOSE_MASTER", id, value});
                break;

            default:
                return;

        }


        // const type = action.toUpperCase();
        // dispatch({type, id});
    }

};