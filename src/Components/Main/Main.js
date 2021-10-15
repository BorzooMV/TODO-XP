import {React, useState} from "react";
import Profile from "./Profile";
import DividerToday from "./Divider/DividerToday"
import Divider from "./Divider/Divider";
import TaskList from "./Tasks/TaskList";
import ArchiveList from "./TaskArchive/ArchiveList";
import About from './About';
import users from '../../assets/users';

const Main = () => {
    const [tasks,setTasks] = useState(users[0]["tasks"]);
    const [archiveTasks,setArchiveTasks] = useState([]);
    const doneBtnHandler = (e) => {
        e.stopPropagation();
        const i = e.target.parentNode.getAttribute("taskindex");
        const newArchive = [...archiveTasks];
        newArchive.push(users[0]["tasks"][i]);
        setArchiveTasks(newArchive);
    }

    return(
        <main className="Main">
            <Profile />
            <DividerToday title="Today" date="Fri 24/09/2021" />
            <TaskList tasks={tasks} doneBtnHandler={doneBtnHandler} />
            <Divider title="Task Archive" />
            <ArchiveList tasks={archiveTasks} />
            <Divider id="aboutSection" title="About" align="center" />
            <About />
        </main>
    )
}

export default Main;