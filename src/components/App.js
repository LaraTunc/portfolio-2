import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';

import { colors } from '../assets/assets';

const App = () => {
	return (
		<Wrapper>
			<Filter />
			<BrowserRouter>
				<GlobalStyles />
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
				</Switch>
			</BrowserRouter>
		</Wrapper>
	);
};

export default App;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url('../.././assets/main2.jpg');
	background-repeat: no-repeat, repeat;
	background-color: ${colors.BACKGROUND};
	background-attachment: fixed;
	position: relative;
`;

const Filter = styled.div`
	position: absolute;
	bottom: 0%;
	background: rgba(36, 43, 46, 0.8);
	width: 100%;
	height: 100%;
`;
