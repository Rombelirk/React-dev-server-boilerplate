const initialState = {
    map: {
        workers: {
            1: "Иванов И.И.",
            2: "Петров П.П.",
            3: "Сидоров С.С."
        },
        shops: {
            1: "Пятерочка",
            2: "Ашан",
            3: "Перекресток"
        }
    },

    newApplies: [
        {
            title: "Пятерочка",
            id: 1,
            chosenMasterId: 0,
            actions: [

                {
                    action: "choose_master",
                    type: "select",
                    options: [
                        {
                            value: 1,
                            title: "Иванов И.И.",
                            id: 1
                        },
                        {
                            value: 2,
                            title: "Петров П.П.",
                            id: 2,
                        },
                        {
                            title: "Сидоров С.С.",
                            id: 3,
                            value: 3,

                        }
                    ],


                },
                {
                    action: "assign_issue_to_master",
                    type: "button",
                    value: "Назначить"
                },

            ]
        },
        {
            title: "Ашан",
            id: 2,
            chosenMasterId: 0,
            actions: [
                {
                    action: "choose_master",
                    type: "select",
                    options: [
                        {
                            value: 1,
                            title: "Иванов И.И.",
                            id: 1
                        },
                        {
                            value: 2,
                            title: "Петров П.П.",
                            id: 2,
                        },
                        {
                            title: "Сидоров С.С.",
                            id: 3,
                            value: 3,
                        }
                    ],
                    innerActions: [
                        {
                            action: "assign_issue_to_master",
                            type: "button",
                        }
                    ]

                },
                {
                    action: "assign_issue_to_master",
                    type: "button",
                    value: "Назначить"
                },

            ]
        },
        {
            title: "Перекресток",
            id: 3,
            chosenMasterId: 0,
            actions: [

                {
                    action: "choose_master",
                    type: "select",
                    options: [
                        {
                            value: 1,
                            title: "Иванов И.И.",
                            id: 1
                        },
                        {
                            value: 2,
                            title: "Петров П.П.",
                            id: 2,
                        },
                        {
                            title: "Сидоров С.С.",
                            id: 3,
                            value: 3,
                        }
                    ],


                },
                {
                    action: "assign_issue_to_master",
                    type: "button",
                    value: "Назначить"
                },

            ]
        },

    ],
    freeMasters: [


        {
            title: "Иванов И.И.",
            id: 1,
            actions: []
        },
        {
            title: "Петров П.П.",
            id: 2,
            actions: []
        },
        {
            title: "Сидоров С.С.",
            id: 3,
            actions: []
        }
    ],
    issuesInProcess: [],
    issuesInArchive: [],
    issuesInProcessMaxId: 0,
    // maxWorkerId: 3,
    workerPool: [
        {
            title: "Сергеев С.И.",
            id: 4,
            actions: []
        },
        {
            title: "Новиков Е.П.",
            id: 5,
            actions: []
        },
        {
            title: "Семенов С.К.",
            id: 6,
            actions: []
        }
    ],
    shopsPool: [],
    modalWindow: {
        display: false,
        text: "",
        onOk: f => f,
        onCancel: f => f
    }

};


const contentReducer = (state = initialState, action) => {

    let newState = Object.assign({}, state);

    switch (action.type) {


        case "MOVE_ISSUE_TO_ARCHIVE":


            let newWorker = {};
            let newArc = newState.issuesInProcess.splice(
                newState.issuesInProcess.findIndex(el => {
                    return el.id === action.id
                }), 1
            )[0];

            newArc.actions = [];
            newArc.title += " Статус: Выполнено";

            newState.issuesInArchive.push(
                newArc
            );
            newState.freeMasters.push({
                id: newArc.masterId,
                title: newArc.masterName,
                value: newArc.masterId
            });
            newState.newApplies.map((elem, index) => {
                if (elem.actions) {
                    elem.actions.map((el, ind) => {
                        if (el.type === "select") {
                            newState.newApplies[index].actions[ind].options.push({
                                id: newArc.masterId,
                                title: newArc.masterName,
                                value: newArc.masterId
                            })
                        }
                    })
                }
            });
            return newState;


        case "SHOW_MODAL_WINDOW":

            const {text, onOk, onCancel} = action;


            newState.modalWindow = {...newState.modalWindow, text, onOk, onCancel, display: true};

            return newState;

        case "CLOSE_MODAL_WINDOW":

            newState.modalWindow = {...newState.modalWindow, display: false};
            return newState;


        case "ASSIGN_ISSUE_TO_MASTER":

            let newIssue = {
                id: ++newState.issuesInProcessMaxId,
                masterId: action.masterId,
                issueId: parseInt(action.issueId)
            };


            let ind = newState.newApplies.findIndex(el => {
                return el.id == action.issueId;
            });


            newIssue.issueTitle = newState.newApplies[ind].title;
            newIssue.title = "Магазин: " + newIssue.issueTitle;

            // const masterId = newState.newApplies[ind].chosenMasterId;

            newState.newApplies.splice(ind, 1);

            ind = newState.freeMasters.findIndex(el => {
                return el.id == action.masterId;
            });

            newIssue.masterName = newState.freeMasters[ind].title;
            newIssue.title += ", мастер: " + newState.freeMasters[ind].title;

            newIssue.actions = [
                {
                    type: "timer",
                    action: "timer",
                    options: []
                }
            ];

            newState.freeMasters.splice(ind, 1);

            newState.issuesInProcess.push(newIssue);

            newState.newApplies.map((el, index) => {
                newState.newApplies[index].chosenMasterId = 0;
                newState.newApplies[index].actions.map((elem, ind) => {
                    if (elem.type === "select") {

                        let workIndex = newState.newApplies[index].actions[ind].options.findIndex(el => {
                            return el.id == action.masterId
                        });
                        newState.newApplies[index].actions[ind].options.splice(workIndex, 1);
                    }
                });
            });

            return newState;


        case "CHOOSE_ISSUE_FOR_MASTER":

            return state;

        case "CHOOSE_MASTER":
            const index = newState.newApplies.findIndex(el => {
                return el.id === action.id;
            });
            newState.newApplies[index].chosenMasterId = action.value;

            return newState;


        default:
            return state;
    }
};


export default contentReducer;