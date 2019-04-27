import React,{Component} from 'react';
import LessComponent from './Less';
import AnalogClock from './Analogclock';

class DigitalClock extends Component{
    constructor(props){
        super(props)
        this.state={
            time :new Date().toLocaleString()
        }
        this.updatetime();
    }
    updatetime(){
        setInterval(()=>{
            this.setState({
                time :new Date().toLocaleString()
            })
        }, 1000)
    }
    render(){
        return(
            <div >
            <LessComponent name={this.state.time} />
            <AnalogClock update={this.state.time} />
            </div>
        )
    }
}
export default DigitalClock;