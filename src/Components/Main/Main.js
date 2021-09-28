import React from "react";
import Profile from "./Profile";
import DividerToday from "./Divider/DividerToday"
import Divider from "./Divider/Divider";
import TaskList from "./Tasks/TaskList";
import ArchiveList from "./TaskArchive/ArchiveList";
import About from './About';

const Main = () => {
    return(
        <main className="Main">
            <Profile />
            <DividerToday title="Today" date="Fri 24/09/2021" />
            <TaskList />
            <Divider title="Task Archive" />
            <ArchiveList />
            <Divider id="aboutSection" title="About" align="center" />
            <About />
        </main>
    )
}

export default Main;