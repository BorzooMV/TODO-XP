import React from "react";
import ArchiveTask from "./ArchiveTask";

const ArchiveList = (props) => {
    return(
        <ul className="TaskList">
           {
               props.tasks.map(task => {
                   return <ArchiveTask title={task.title} key={task.id} id={task.id} removeBtnHandlerArchive={props.removeBtnHandlerArchive} />
               })
           }
        </ul>
    )
}

export default ArchiveList;