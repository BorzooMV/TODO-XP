import React from "react";
import Task from "./Task";

const TaskList = (props) => {
    return(
        <div className="TaskList">
            {
                props.tasks.map(task => {
                    return <Task key={task.id} id={task.id} title={task.title} doneBtnHandler={props.doneBtnHandler} removeBtnHandler={props.removeBtnHandler} />
                })
            }
        </div>
    )
}

export default TaskList;