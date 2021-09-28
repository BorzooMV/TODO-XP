import React from "react";

const ArchiveTask = (props) => {
    return <li className="ArchiveTask">
        <h3>{props.title?props.title:"Task"}</h3>
        <div>
            <span><i className="far fa-trash-alt task-delete"></i></span>
        </div>
    </li>
}

export default ArchiveTask;