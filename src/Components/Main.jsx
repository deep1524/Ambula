import React, { useEffect, useState } from "react";
import AddTask from "../Components/AddTask";
import TaskList from "../Components/TaskList";


const Main = () => {
const [data, setdata] = useState([]);
  // get all tasks function
  const baseUrl = "http://localhost:3001";
   const getAllTAsk = async ()  => {
    const res = await fetch(`${baseUrl}/tasks`);
    const tasks = await res.json();
    // console.log(tasks);
    setdata(tasks);
}
useEffect(()=>{
    getAllTAsk();
},[]);

let completeTaskList =data.filter(task => task.status==="Completed");


let pendingTaskList =data.filter(task => task.status==="Pending");


  return (
  
    <div className="max-w-4xl  mt-20">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4  ">
          To Do Application
        </h1>
        <div className="flex mb-4 pt-4 justify-around" >
        <h2>Completed TaskList  : {completeTaskList.length}</h2>
        <h4>Total Task : {data.length}</h4>
        <h4>Pending Task : {pendingTaskList.length}</h4>
        </div>
        <AddTask />
      </div>

      <TaskList tasks={data} />
    </div>
  );
};

export default Main;
