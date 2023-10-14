import { useState } from "react";
import { add } from "../store/slices/listSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

const AddList = () => {
// define useState for inputFiled 
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

//   input filed onchange function call 
  const taskHandle = (e) => {
    setTask(e.target.value);
  };


//   form submit function call 
  const formHandle = (e) => {
    e.preventDefault();
            
    // object dispatch in redux 
    const listObject = {  id : new Date().getTime(), name : task, status: 0 };
    dispatch(add(listObject))

    // Clear the input field
    setTask("");
    toast.success("Task Added")
  };

  return (
    <>
      <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="text-center mb-3">Add Task</h2>

        <form onSubmit={(e) => formHandle(e)}>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              name="task"
              className="form-control"
              value={task}
              onChange={(e) => taskHandle(e)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </form>

        
      </div>
    </>
  );
};

export default AddList;
