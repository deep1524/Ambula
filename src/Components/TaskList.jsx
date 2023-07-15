
import Task from "./Task";

const TaskList = ({ tasks }) => {
  // all the task list here
  return (
    <div className="overflow-x-auto">
      <table className="table">
       
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
          <Task key={task.id} task={task}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
