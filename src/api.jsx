
const baseUrl = "http://localhost:3001";
// get all the task function
export const getAllTAsk = async ()  => {
    const res = await fetch(`${baseUrl}/tasks`);
    const tasks = await res.json();
    return tasks;
}
// added a task function
export const addTask = async (task) => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(task)
    });
    const newTask = await res.json();
    return newTask;
}
// updateing task function
export const EditTask = async (task) => {
    const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(task)
    });
    const updatedTask = await res.json();
    return updatedTask;
}
// delete task function
export const DeleteTask = async (task) => {
    const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
        method: "DELETE",
      
    });
    const deletedTask = await res.json();
    return deletedTask;
}
// added a inquiery function
export const addContactForm = async (task) => {
    const res = await fetch(`${baseUrl}/inquiry`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(task)
    });
    const contactform = await res.json();
    return contactform;
}