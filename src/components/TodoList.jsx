import React from 'react';

import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = () => {
	const { todos } = useSelector(state => state.todo);

	return (
		<div className='flex-auto mb-4'>
			{
				todos.length === 0 ?
					<div className='h-full flex justify-center items-center text-xl'>Добавь свою первую задачу!</div>
					: todos.map((obj) => (
						<TodoItem key={`${obj.id}_${obj.title}`} {...obj} />
					))
			}
		</div>
	)
}

export default TodoList;