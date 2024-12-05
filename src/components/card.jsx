import React from 'react'

const Card = ({todo,time,remove,index}) => {
  return (
    <li class="flex justify-between gap-x-6 py-5 px-12 ">
    <div class="flex min-w-0 gap-x-4">
      <div class="min-w-0 flex">
        <p class="mt-1 truncate text-xs/5 text-gray-500 px-2 ">{index + 1}</p>
        <p class="text-sm/6 font-semibold text-gray-900">{todo}</p>
      </div>
    </div>
    <div class=" sm:flex sm:flex-col sm:items-end">
      <button class='bg-red-400 px-3 py-1 rounded-md text-white hover:bg-red-600 transition duration-500' onClick={() => remove(todo)}>remove</button>
      <p class="hidden shrink-0 sm:flex mt-1 text-xs/5 text-gray-500">{time.getHours()}:{time.getMinutes()}</p>
    </div>
  </li>
  )
}

export default Card
