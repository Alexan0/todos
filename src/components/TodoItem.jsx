import React from 'react';

import { deleteItem, completeItem } from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

import { BsCheck } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi'

const TodoItem = ({ id, title, isComplete }) => {
	const dispatch = useDispatch();
	
	const onClickRemoveItem = () => {
		dispatch(deleteItem(id))
	}

	const onClickCompleteItem = () => {
		dispatch(completeItem(id))
	}

	return (
		<div className='bg-[#37324D] flex rounded-lg p-3 items-center gap-4 mb-3'>
			<div onClick={onClickCompleteItem} className='flex-auto flex items-center gap-2 cursor-pointer'>
				<button
					className={
						isComplete ? 'flex-[0_0_20px] h-5 rounded-2xl border-blue-500 border bg-blue-400 flex justify-center items-center'
							: 'flex-[0_0_20px] h-5 rounded-2xl border-blue-500 border flex justify-center items-center'
					}
					type='button'>
					{
						isComplete && <BsCheck className='w-full h-full' />
					}
				</button>
				<h1 className={isComplete ? 'text-lg line-through break-word' : 'text-lg break-word'}>{title}</h1>
			</div>
			<button onClick={onClickRemoveItem} className='flex-[0_0_20px]' type='button'>
				<FiDelete className='w-full h-full' />
			</button>
		</div>
	)
}

export default TodoItem;