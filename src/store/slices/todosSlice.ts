import { createSlice } from '@reduxjs/toolkit'
import { TODOS } from 'constant'

export interface ITodoItem {
    name: string,
    completed: boolean,
    id: string
}

interface IInitialState {
    todos: ITodoItem[]
}

const initialState: IInitialState = {
    todos: []
}

const todosSlice = createSlice({
    name: TODOS,
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)                     
        },

        removeTodo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter(item => item.id !== id)
        },

        toggleCompleted: (state, action) => {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggleTodo!.completed = !toggleTodo!.completed
        }
    }
})

export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions

export default todosSlice.reducer