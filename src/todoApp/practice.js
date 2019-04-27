import  React ,{Component} from 'react';
import TO from './to';
import Form from './forms';
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.clickHand=this.clickHand.bind(this);
        this.addTask=this.addTask.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
        this.newUpdate=this.newUpdate.bind(this);
        this.state ={
            tasks :[
                {   name :'Tea',
                    complete : false
                },
                {
                    name :'Biryani',
                    complete : false
                },
                {
                    name :'Cofee',
                    complete : false
                },
                {
                    name : 'Chiken Tandori',
                    complete : false
                }],
                    currentTask :''
        }
    }
    newUpdate(index,newValue){
        console.log(index,newValue);
         var tasks =this.state.tasks;
        var task = tasks[index];
        task['name']=newValue;
        this.setState({
            tasks

        })
    }
    deleteTask(index){
        console.log(index);
        let tasks =this.state.tasks;
        tasks.splice(index,1);
        this.setState({
            tasks
        })
    }
    updateTask(ev){
        ev.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask
        tasks.push({
            name:currentTask,
            complete : false
        })
;        this.setState({
            tasks,
            currentTask :''
        })
    }
    addTask(newValue){
        this.setState({
            currentTask:newValue.target.value
        })
    }
    clickHand(index){
        var tasks =this.state.tasks;
        var task = tasks[index];
        task.complete = !task.complete;
        this.setState({
            tasks:tasks
        })
    }
    render(){
        return(
            <section className="cen">
                <Form 
                    currentTask={this.state.currentTask}
                    addTask={this.addTask}
                    updateTask={this.updateTask}
                />
            <ul>           
                    {this.state.tasks.map((tasks,index)=>{
                        return(<TO 
                        key={index} 
                        index={index}
                        lol={tasks}
                        toggl={this.clickHand} 
                        deleteTask={this.deleteTask} 
                        newUpdate={this.newUpdate}
                        />)
                    })}
            </ul>
            </section>
        )
    }
}
export default TodoItem;