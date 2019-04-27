import React,{Component} from 'react';



class CounterApp extends Component {
    constructor(props){
        super(props)
        this.state={
            counter : 0
    }
        this.Incrementcounter=this.Incrementcounter.bind(this);
        this.Decrementcounter=this.Decrementcounter.bind(this);
    }
    Incrementcounter(){
        if(this.state.counter < 10){
             this.setState({counter:this.state.counter +1})
        }
        else{
            alert('Not Allow');
        }
        
    }
    Decrementcounter(){
        if(this.state.counter < -9){
            alert('Not Allow');
        }
        else{
            this.setState({counter: this.state.counter -1})
        }
        
    }
    render(){
        return(
            <div className="cen">
            <h1>CounterApp</h1>
            <button onClick={this.Incrementcounter}>+</button>
            <span>{this.state.counter}</span>
            <button onClick={this.Decrementcounter}>-</button>
            </div>
        )
    }
}
export default CounterApp;
