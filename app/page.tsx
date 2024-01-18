'use client';

import ToDoList from '@/components/ToDoList';
import AddButton from '@/components/AddButton';

export default function Home() {
	let Tasks: string[];

	return (
		<main className="flex align-middle flex-col items-center">
			<h1 className="mt-10 text-5xl">Tasks</h1>

			<div>
				<AddButton></AddButton>

				<ToDoList></ToDoList>
			</div>
		</main>
	);
}
