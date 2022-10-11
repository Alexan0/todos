import React from 'react';

import { addItem } from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

import { GrClose } from 'react-icons/gr';

const Popup = ({ hiddenPopup, idItem, setIdItem }) => {
	const dispatch = useDispatch();
	const [inputText, setInputText] = React.useState('');
	
	const onClickAddItem = () => {
		const item = {
			id: idItem,
			title: inputText,
			isComplete: false,
		}
		dispatch(addItem(item));
		hiddenPopup();
		setIdItem(++idItem)
	}

	return (
		<div className='bg-[rgba(0,0,0,.6)] h-full w-full fixed overflow-y-auto overflow-x-hidden top-0 left-0 z-10'>
			<div className='flex justify-center items-center min-h-full px-4'>
				<div className='max-w-xl bg-[#242132] p-5 overflow-auto w-full text-white rounded-2xl'>
					<div className='flex justify-between items-center mb-4'>
						<h1 className='text-xl'>Добавить задачу</h1>
						<button className='w-6 h-6 bg-white rounded-xl flex items-center justify-center' onClick={() => hiddenPopup()} type='button'>
							<GrClose className='flex-[0_0_20px]' />
						</button>
					</div>
					<input
						onChange={e => setInputText(e.target.value)}
						value={inputText}
						onKeyPress={e => e.key === 'Enter' && onClickAddItem()}
						className='mb-4 bg-[#37324D] w-full rounded-md text-white px-3 py-2 focus:outline-none'
						type="text"
						placeholder='Название'
					/>
					<button
						onClick={onClickAddItem}
						className='p-2 bg-[#37324D] transition-colors duration-300 ease-in-out rounded-md text-white hover:bg-[#fff] hover:text-black'
						type='button'
					>
						Добавить
					</button>
				</div>
			</div>
		</div>
	)
}

export default Popup;