import React from "react";

const CreateTask = (props) => {
    return(
        <div className="CreateTask">
            <div className="createTaskField">
                <input type="text" name="taskName" id="createTaskInput" />
                <button type="button" onClick={props.createTaskHandler}><i class="fas fa-plus"></i></button>
            </div>
        </div>
    )
}

export default CreateTask;