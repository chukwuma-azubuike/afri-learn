import React from 'react';
import { redirect } from 'next/navigation';

const Home: React.FC = () => {
	redirect('/statistics');
	return <main></main>;
};

export default Home;
