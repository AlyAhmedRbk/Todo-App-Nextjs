"use client"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import Todo from "./Components/Todo"

const page = () => {

  const [formData, setFormData] = useState({
    title : "",
    description : "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(form => ({...form, [name]:value}));
    console.log(formData);
  }

  const submitData = async (e) => {
    e.preventDefault();
    try {
      // Api Code

    } catch (error) {
      toast.error("Error")
    }
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={submitData} className="flex  items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter Todo Title" className="px-2 py-2 border-2 w-full" />
        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter Decription" className="px-3 py-2 border-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-8 m-auto mt-2
        hover:bg-blue-700">
          Add Todo
        </button>
      </form>

      

<div className="relative overflow-x-auto mt-10 lg:w-[60%] w-full m-auto">
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
            <Todo />
            <Todo />
            <Todo />
        </tbody>
    </table>
</div>

      
    </>
  )
}

export default page
