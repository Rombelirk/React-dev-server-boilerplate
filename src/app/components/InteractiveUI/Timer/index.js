import React, {Component} from "react";
import "./timer.scss";

class Timer extends Component {

    constructor(props) {
        super(props);

        this.state =

            {
                hours: "00",
                minutes: "00",
                seconds: "00"
            }

    }



    componentDidMount() {

        let that = this;
        let interval = setInterval(()=>{
            let seconds = parseInt(this.state.seconds) + 1;
            let minutes = this.state.minutes;
            let hours = this.state.hours;
            if (seconds < 10) {
                seconds = "0" + seconds;
            } else if (seconds == 60) {
                seconds = "00";
                minutes = parseInt(minutes) + 1;
                if (minutes < 10) {
                    minutes = "0" + minutes;
                } else if (minutes == 60) {
                    minutes = "00";
                    hours = parseInt(hours) + 1;
                    if (hours < 10) {
                        hours = "0" + hours;
                    }
                }
            }

            if (seconds == "15") {
                clearInterval(interval);
                that.props.trigger(that.props.id);
            }
            this.setState({seconds, minutes, hours})

        }, 1000);
    }


    render() {
        return (
            <div className={"timer"}>
                Время в работе: {this.state.hours}:{this.state.minutes}:{this.state.seconds}
            </div>
        )
    }

};

export default Timer;


