import { useState } from 'react'
import Card from './components/card'
import Addbtn from './components/addbtn'
import DisplayTray from './components/displayTray'

function App() {
  let dummer = new Date
  const [todoList,setTodoList] = useState([])

  function add(value){
    let nguva = new Date
    let dummy = {todo: "",time: nguva}
    dummy.todo = value
    setTodoList([...todoList,dummy])
  }

  function remove(todo){
    setTodoList(todoList.filter(item => {
      return item.todo !== todo
    }))
  }

  return (
    <>
    <h1 class="max-w-md mx-auto flex items-center justify-center font-bold my-8">ToDo List</h1>
    <div class = "flex">
    <div class="max-w-md mx-auto flex items-center justify-center gap-2">
       <label for="email" class="block text-sm font-medium text-gray-700 mt-1">
        Add Item</label>
         <div class="mt-1"> 
          <input type="text" id='intake' class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-serif"/>
          
        </div><Addbtn add = {add}/> </div>
      
    </div>
    <DisplayTray todoList={todoList} remove={remove}/>
    </>
  )
}

/* */

export default App
