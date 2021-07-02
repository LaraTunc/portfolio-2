import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/assets';

const Landing = () => {
	return (
		<Wrapper>
			<Intro>
				<Name>Hello! My name is Lara.</Name>I am a web developer.
			</Intro>
		</Wrapper>
	);
};

export default Landing;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

const Name = styled.p`
	color: ${colors.PRIMARY};
	font-size: 60px;
	margin-bottom: 15px;
`;

const Intro = styled.div`
	border-left: 2px solid ${colors.PRIMARY};
	position: absolute;
	bottom: 15%;
	color: white;
	margin-left: 5%;
	padding-left: 5%;
	font-size: 20px;
`;
