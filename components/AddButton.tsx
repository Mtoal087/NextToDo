// AddButton.tsx

import Link from 'next/link';
import { Button } from './ui/button';

const AddButton = () => {
	return (
			<Button variant={'outline'} className="border-2 bg-gray-200">
				Add To List
			</Button>
	);
};

export default AddButton;
