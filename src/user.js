import React, {Component} from 'react';

class UserAns extends Component{
    constructor(props){
        super(props)
        this.state={
            username :'',
            alluser :[]
        }
        this.updateTask=this.updateTask.bind(this);
        this.Savepass=this.Savepass.bind(this);
        this.submit=this.submit.bind(this);
        // this.viewState=this.viewState.bind(this);

    }
    updateTask(event){
        this.setState({
            username:event.target.value
        })
    }
    Savepass(){
        let currentUser = this.state.alluser;
        currentUser.push(this.state.username)
        this.setState({
            alluser:currentUser,
            username:''
        })
        console.log(this.state.alluser);
    }
    submit(ev){
        ev.preventDefault();
    }
    // viewState(){
    //     return(
    //        { var {alluser} =this.state;}
    //     )
        

    // }
    render(){
        return(
            <div className="cen">
                <form onSubmit={this.submit}>
                <h1>Show Pass</h1>
                <input type='password' name='username' value ={this.state.username} onChange={this.updateTask} />
                <button onClick={this.Savepass}>show password</button>
                <h3>Now Hack This password So Click Enter</h3>
                <p>{this.state.alluser}</p>
                </form>
            </div>
        )
    }
}
export default UserAns;