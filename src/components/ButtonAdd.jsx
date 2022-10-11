import React from 'react';

const ButtonAdd = ({ showPopup }) => {
	return (
		<div className='flex justify-center items-center'>
			<button onClick={() => showPopup()} type='button' className='bg-[#5178F1] p-4 rounded-xl text-3xl'>+</button>
		</div>
	)
}

export default ButtonAdd;