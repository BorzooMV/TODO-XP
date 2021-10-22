import React from "react";
import TaskExpand from './TaskExpand';

const Task = (props) => {
    const divClickHandler = (e) => {
        const expandContent = e.currentTarget.nextSibling;
        expandContent.classList.toggle('active');
    }
    return <>
        <div className="Task" onClick={(e)=>divClickHandler(e)}>
            <h3>{props.title?props.title:"Task"}</h3>
            <div>
                <button type="button" onClick={(e)=>props.doneBtnHandler(e)} taskid={props.id}><i className="far fa-check-square task-done"></i></button>
                <span><i className="far fa-trash-alt task-delete"></i></span>
            </div>
        </div>
        <TaskExpand />
    </>
}

export default Task;