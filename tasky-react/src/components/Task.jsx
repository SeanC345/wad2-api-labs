import React from 'react';

const Task = (props) => {
    const p = (props.priority || 'Low').trim();

    let priorityColor;
    if (p === 'Low') {
        priorityColor = 'green';
    } else if (p === 'Medium') {
        priorityColor = 'orange';
    } else {
        priorityColor = 'red';
    }
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : priorityColor}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority">Priority: {props.priority}</p>
            <button onClick={props.markDone}className='doneButton'>Done</button>
            <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
        </div>
        
    )
}

export default Task;