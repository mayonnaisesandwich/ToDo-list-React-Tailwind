import React from 'react'
import Card from './card'

const DisplayTray = ({todoList,remove}) => {
  const dummy = todoList.map(item => {
    return<Card todo = {item.todo} time = {item.time} remove = {remove} index = {todoList.indexOf(item)}/>})
  return (
    <div>{dummy}</div>
    
  )
}

export default DisplayTray
