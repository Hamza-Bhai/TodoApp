import React from 'react';

 const Form = (props)=> {
     return(
         <form onSubmit={props.updateTask}>
        <h1>Todo App</h1>
        <input type='text' 
        value={props.currentTask}
        onChange={props.addTask}
         />
         <button type='submit'>ADD</button> 
        </form>
     )
 }
    export default Form;