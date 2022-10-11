import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{
			id: 0,
			title: 'Добавить первую цель',
			isComplete: false,
		},
	],
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
			state.todos = state.todos.map(obj => (
				obj.isComplete === false ? 
					{...obj, isComplete: action.payload}
					: {...obj, isComplete: action.payload}
			))
		}
	}
});

export const { addItem, deleteItem, completeItem } = todoSlice.actions;

export default todoSlice.reducer;