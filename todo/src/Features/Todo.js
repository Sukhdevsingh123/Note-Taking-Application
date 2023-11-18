import { createSlice, nanoid } from '@reduxjs/toolkit'
const currentDate=new Date();

const initialState = {
    todos: [{ id: 1, text: 'hello world' ,Date:'Sun oct 05 2023',completed:false}]
}

export const Todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todoe = {
                id: nanoid(),
                text: action.payload,
                Date:currentDate.toDateString(),
               completed:false
            }
            state.todos.push(todoe)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload)
        },
        
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },

          updateTodo:(state,action)=>{
          state.text=action.payload

          }
    },
})


export const { addTodo, removeTodo,toggleTodo,updateTodo } = Todo.actions

export default Todo.reducer


