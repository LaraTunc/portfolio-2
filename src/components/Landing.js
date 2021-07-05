import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../assets/assets';

const Landing = () => {
	return (
		<Wrapper>
			<Intro>
				<Name>Hello! My name is Lara.</Name>
				<p>Web developer</p>
			</Intro>
		</Wrapper>
	);
};

export default Landing;

const blinking = keyframes`
from { border-color: transparent }
to { border-color: transparent }
  50% { border-color: orange; }
`;

const typing = keyframes`
from { width: 0 }
  to { width: 100% }
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

const Name = styled.p`
	color: ${colors.PRIMARY};
	font-size: 60px;
	margin-bottom: 15px;
	overflow: hidden;
	border-right: 0.15em solid ${colors.PRIMARY};
	white-space: nowrap;
	margin: 0 auto;
	animation: ${typing} 3.5s steps(40, end), ${blinking} 0.75s step-end infinite;
`;

const Intro = styled.div`
	position: absolute;
	bottom: 15%;
	color: white;
	margin-left: 5%;
	padding-left: 5%;
	font-size: 20px;
`;
