import React from 'react'

const Addbtn = ({add}) => {

  return (
    <button class = "w-auto px-4 py-1 rounded-xl font-semibold hover:border-blue-500 transition duration-300 border bg-blue-50 items-center mt-1" onClick={() => add(document.getElementById("intake").value)}>
      Add
    </button>
  )
}

export default Addbtn
