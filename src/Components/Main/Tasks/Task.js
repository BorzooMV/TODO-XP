import {React, useState} from "react";
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
                <span><i className="far fa-check-square task-done"></i></span>
                <span><i className="far fa-trash-alt task-delete"></i></span>
            </div>
        </div>
        <TaskExpand />
    </>
}

export default Task;