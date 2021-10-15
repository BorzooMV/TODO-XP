import React from "react";
import ArchiveTask from "./ArchiveTask";

const ArchiveList = (props) => {
    return(
        <ul className="TaskList">
           {
               props.tasks.map(task => {
                   return <ArchiveTask title={task.title} key={task.id} />
               })
           }
        </ul>
    )
}

export default ArchiveList;