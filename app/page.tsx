'use client';

import AddButton from '@/components/AddButton';
import { useState } from 'react';

export default function Home() {

	const [list, setList] = useState([]);
	const [userInput, setUserInput] = useState('');

	const updateInput = (value: string) => {
		setUserInput(value);
	};

	const addItem = () => {
		if (userInput !== '') {
			const userInputItem = {
				id: Math.random(),
				value: userInput,
			};

			setList([...list, userInputItem]);

			setUserInput('');
		}
	};

	const deleteItem = (key) => {
		const updatedList = list.filter((item) => item.id !== key);
		setList(updatedList);
	};

	const editItem = (index: number) => {
		const editedTodo = prompt('Edit the todo:');
		if (editedTodo !== null && editedTodo.trim() !== '') {
			const updatedTodos = [...list];
			updatedTodos[index].value = editedTodo;
			setList(updatedTodos);
		}
	};

	return (

		<main className="flex align-middle flex-col items-center">
			<h1 className="mt-10 text-5xl">Tasks</h1>

			<div>
				<div className='flex gap-5'>
					<input type="text" value={userInput} onChange={(item) => updateInput(item.target.value)}
					className='bg-gray-200 px-5 rounded-sm' placeholder='Add Task'/>
					<AddButton onClick={addItem}/>
				</div>
				

			</div>
		</main>
	);
}
