import React from "react";

const ArchiveTask = (props) => {
    return <li className="ArchiveTask" id={props.id}>
        <h3>{props.title?props.title:"Task"}</h3>
        <div>
            <button type="button" onClick={(e)=>props.removeBtnHandlerArchive(e)}><i className="far fa-trash-alt task-delete"></i></button>
        </div>
    </li>
}

export default ArchiveTask;