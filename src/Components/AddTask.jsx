import React, { useState } from 'react'
import Model from './Model';
import { AiOutlinePlus } from "react-icons/ai";
// add a task
const AddTask = () => {
  const [modelOpen, setModelOpen] = useState(false);
 return (
      <div>
        <button
          onClick={() => setModelOpen(true)}
          className="btn btn-primary w-full mb-10"
        >
          Add New Task <AiOutlinePlus size={18} />
        </button>
        {/* when you click the button model will open */}
        <Model modelOpen={modelOpen} setModelOpen={setModelOpen}/>
       
       
      </div>
    
  );
}

export default AddTask