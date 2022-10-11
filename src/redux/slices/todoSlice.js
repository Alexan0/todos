import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: JSON.parse(localStorage.getItem('todos')) || [
		{
			id: 0,
			title: 'Добавить первую цель',
			isComplete: false,
		},
	]
}

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addItem(state, action) {
			state.todos.push({...action.payload})
		},
		deleteItem(state, action) {
			state.todos = state.todos.filter(obj => obj.id !== action.payload);
		},
		completeItem(state, action) {
			const currentItem = state.todos.find((obj) => obj.id === action.payload);
			currentItem.isComplete = !currentItem.isComplete
		}
	}
});

export const { addItem, deleteItem, completeItem } = todoSlice.actions;

export default todoSlice.reducer;