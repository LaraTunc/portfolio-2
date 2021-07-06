import React from 'react';
import About from './About';
import Landing from './Landing';
import Skills from './Skills';

const Home = ({ aboutRef }) => {
	return (
		<>
			<Landing />
			<About aboutRef={aboutRef} />
			<Skills />
		</>
	);
};

export default Home;
