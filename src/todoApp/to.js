import React, {Component} from 'react'



    class To extends Component{
        constructor(props){
            super(props)
            this.state={
                editTask:false
            }
            this.renderItem=this.renderItem.bind(this);
            this.updateItem=this.updateItem.bind(this);
            this.toggleItem=this.toggleItem.bind(this);
            this.update=this.update.bind(this);
        }
        toggleItem(){
            const {editTask}=this.state;
            this.setState({
                editTask:!editTask
            })
        }
        renderItem(){
            return(
                <form onSubmit={this.update}>
                    <input type='text'ref={(value)=>{
                        this.input=value
                    }} defaultValue={this.props.lol.name} /> 
                    
                    <button type='submit'>
                        Update Item
                    </button>
                </form>
            )
        }
        update(evt){
            evt.preventDefault();
            // console.log(this.input.value)
            this.props.newUpdate(this.props.index, this.input.value);
            this.toggleItem();
        }
        updateItem(){
            return(
                <li onMouseOver={()=>{
                  this.props.toggl(this.props.index);
                 }}className ={this.props.lol.complete ? 'completes' :'none'}
                 >{this.props.lol.name}
                 
                 <button onClick={(evt)=>{
                     evt.stopPropagation();
                     this.props.deleteTask(this.props.index)
                     }}> Delete
                 </button>
             <button onClick={(evt)=>{
                 evt.stopPropagation();
                 this.toggleItem();
                 }}>
                 Edit Item
             </button>
                
                </li>
            )
        }


        render(){
            const {editTask}=this.state;
        return(
            <section>
                {
                  editTask ? this.renderItem() :  this.updateItem()
                }
                
            </section>
            
        )
    }
    }
    export default To;