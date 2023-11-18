import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo,toggleTodo,updateTodo } from './Features/Todo';
import Image from './images/Image';
function Todos(props) {
  
  const todos = useSelector((state) => state.todo.todos);
  // const [clickData, setC]
 
  const dispatch = useDispatch();
  console.log('todoData', todos)

  const deleteTodo = (id) => {
    dispatch(removeTodo(id))
  }

const editTodo=(id,font)=>{
  dispatch(updateTodo(font))
  props.setClicked(!props.clicked);
}
const handleChecked=(id)=>{
  dispatch(toggleTodo(id));

 

    

}
  const item = todos.map((elm, index) => (
    // eslint-disable-next-line react/jsx-key
    <div className='flex justify-center mb-2  border-b border-white   '>
      <div className='mt-[4px]'>
      <input className='text-3xl' type='checkbox'  checked={elm.completed}  onChange={()=>handleChecked(elm.id)}/>

      </div>
      <ul>
        {elm.completed ? 
      <li className=' text-zinc-200 text-xl ml-3 capitalize' key={index}><del> {elm.text}</del><span className='text-[10px] ml-3 text-red-500'>{elm.Date}</span></li> 
      : 
      <li className='text-zinc-200 text-xl ml-3 capitalize' key={index}>{elm.text}<span className='text-[10px] ml-3 text-red-500 '>{elm.Date}</span></li> 
          } 
        {/* <li className={`text-zinc-200 text-xl ml-3 capitalize ${isChecked ? '' : 'line-through'}`} key={index}>{elm.text}</li> */}
      </ul>
      <div className='flex  ml-auto'>
          <button onClick={()=>editTodo(elm.id,elm.text)}>
            <img className='p-1' src={Image.edit} alt='not found' />
          </button>
          <button onClick={() => deleteTodo(elm.id)}>
            <img className='p-1' src={Image.deletebtn} alt='not found' />
          </button>
      </div>
    </div>
  ));

  return (
    <>
      {item}


    </>
  );
}

export default Todos;