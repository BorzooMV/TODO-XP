import {React, useState} from "react";
import Profile from "./Profile";
import DividerToday from "./Divider/DividerToday"
import Divider from "./Divider/Divider";
import TaskList from "./Tasks/TaskList";
import ArchiveList from "./TaskArchive/ArchiveList";
import About from './About';
import CreateTask from "./CreateTask";
import users from '../../assets/users';

const Main = () => {
    const [tasks,setTasks] = useState(users[0]["tasks"]);
    const [archiveTasks,setArchiveTasks] = useState([]);

    const removeTask = (index) => {
        const temp = [...tasks]
        temp.splice(index,1);
        setTasks(temp);
    }

    const doneBtnHandler = (e) => {
        e.stopPropagation();
        const temp = [...tasks];
        const btn = e.target.parentNode;
        const id = btn.getAttribute("taskid"); 
        const newTaskArchive = [...archiveTasks];
        const ourDesireTask = temp.find((task) => task.id == id);
        newTaskArchive.push(ourDesireTask);
        const ourDesireIndex = temp.findIndex(task => task.id == id);
        setArchiveTasks(newTaskArchive);
        removeTask(ourDesireIndex);
    }

    const removeBtnHandler = (e) => {
        e.stopPropagation();
        const btn = e.target.parentNode;
        const id = btn.getAttribute("taskid");
        const temp  =[...tasks];
        const ourDesireIndex = temp.findIndex(task => task.id == id);
        removeTask(ourDesireIndex);
    }

    const createTaskHandler = () => {
        const input = document.getElementById("createTaskInput");
        if(input.value){
            //save the result in tasks
            const temp = [...tasks];
            const date = new Date();
            const newTask = {
                "id":tasks.length+1,
                "title":input.value,
                "date":date,
                "priority":"low",
                "note":"This is just a test"
            }
            temp.push(newTask);
            setTasks(temp);
            input.value="";
        }else{
            input.focus({preventScroll:false});
        }
    }

    return(
        <main className="Main">
            <Profile />
            <Divider title="Create Task" />
            <CreateTask createTaskHandler={createTaskHandler} />
            <DividerToday title="Today" date="Fri 24/09/2021" />
            <TaskList tasks={tasks} doneBtnHandler={doneBtnHandler} removeBtnHandler={removeBtnHandler} />
            {
                (archiveTasks.length > 0) && 
                <>
                <Divider title="Task Archive" />
                <ArchiveList tasks={archiveTasks} />
                </>
            }
            <Divider id="aboutSection" title="About" align="center" />
            <About />
        </main>
    )
}

export default Main;