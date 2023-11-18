import Todos from './Todos';
import { useEffect, useState } from 'react'
import './App.css'
import Image from './images/Image';

import { addTodo,updateTodo } from './Features/Todo';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const [inputValue, setInput] = useState();
  const dispatch = useDispatch();
  const updateValue=useSelector((state)=>state.todo.text);
  const [clicked, setClicked] = useState(false);
  console.log('clicke',clicked)
  // console.log("update",updateValue)

  useEffect(()=>{
if(clicked){
  setInput(updateValue);
}
  },[clicked])
    
    // console.log('update',updateValue)
    const add = () => {
      dispatch(addTodo(inputValue))
      setInput('');
  
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      add();
    }
  };

  return (
    <>


      <div className=' w-full  h-screen flex  justify-center items-center  flex-col  gap-7  bg-cover bg-center  ' style={{
        backgroundImage:
          `url(${Image.todobg})`,
      }}>
        <div className='w-[]      '>
          <h1 className=' text-center text-3xl font-semibold  text-stone-100 p-2 '>Task-List</h1>
        </div>

        <div className='  md:w-[35%]      rounded-xl  h-12 flex justify-between  items-center ' style={{ backgroundColor: "#23283C" }} >

          <img className='w-[18%] h-8  md:w-[7%] p-2 mt-1 md:mt-0' src={Image.sidebar} alt='img not found' />

          <input id='input' className=' text-center capitalize border-none outline-none text-white font-semibold' type='text' value={inputValue}  placeholder='Add new task' onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress}
            style={{ backgroundColor: "#23283C" }} />
          <button className='' onClick={add} >
            <img className='p-2' src={Image.addButton} alt="" /></button>
        </div>
        <div className='w-[70%]   min-h-[400px]  ' style={{ backgroundColor: "#23283C" }}>
        <Todos setClicked={setClicked} clicked={clicked}/>

        </div>
      </div>


    </>
  )
}

export default App
