import TaskList from './components/TaskList';

export default function Home() {
	return (
		<main className="flex align-middle flex-col">
			<h1 className="mt-10 text-5xl">Tasks</h1>
			<TaskList />
		</main>
	);
}
