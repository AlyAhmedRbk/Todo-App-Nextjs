"use client"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import Todo from "./Components/Todo"
import axios from "axios";

const page = () => {
  
  const [formData, setFormData] = useState({
    title : "",
    description : "",
  });
  const [todoData, setTodoData] = useState([]);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(form => ({...form, [name]:value}));
    // console.log(formData);
  }

  const submitData = async (e) => {
    e.preventDefault();
    try {
      // Api Code
      const res = await axios.post("/api", formData);
      toast.success(res.data.message);
      setFormData({
        title : "",
        description : "",
      });
      await fetchTodos();
    } catch (error) {
      toast.error("Error While Adding Todo");
    }
  }

  const fetchTodos = async () => {
    
    try {
      const res = await axios.get("/api");
      setTodoData(res.data.todos);
    } catch (error) {
      toast.error("Error While Loading Todos");
    }
  }
  
  const deleteTodo = async (mongoId) => {
    try {
      const res = await axios.delete("/api", {
        params : {
          mongoId:mongoId
        }
      });

      toast.success(res.data.message);
      await fetchTodos();
    } catch (error) {
      toast.error("Error While Deleting Todos");
    }
  }

  const completeTodo = async (mongoId) => {

    try {
      const res = await axios.put("/api", {}, {
        params : {
          mongoId : mongoId
        }})
      toast.success(res.data.message);
      await fetchTodos();
    } catch (error) {
      toast.error("Error While Completing Todos");
    }
  }

  useEffect(()=>{
    fetchTodos();
  }, [])

  return (
    <>
      <ToastContainer />
      <h2 className="text-center mt-5 text-5xl sm:text-2xl font-semibold text-blue-500">Your Todos</h2>
      <form onSubmit={submitData} className="flex  items-start flex-col gap-2 w-[80%] max-w-[600px] mt-10 px-2 mx-auto">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter Todo Title" className="px-2 py-2 border-2 w-full" />
        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter Decription" className="px-3 py-2 border-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-8 m-auto mt-2
        hover:bg-blue-700">
          Add Todo
        </button>
      </form>

      

<div className="relative overflow-x-auto mt-10 lg:w-[60%] md:w-full m-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
              todoData.map((todo, index) => {
                return( <Todo key={index} title={todo.title} description={todo.description} complete={todo.isCompleted} id={index} mongoId={todo._id} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
              })
            }
        </tbody>
    </table>
</div>

      
    </>
  )
}

export default page
