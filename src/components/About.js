import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../assets/assets';
import Fade from 'react-reveal/Fade';

const About = ({ aboutRef }) => {
	return (
		<Wrapper ref={aboutRef}>
			<Main>
				<Div>
					<Fade bottom>
						<div>
							<Title>about me</Title>
						</div>
						<div>
							<Pr>
								I am from a town with lots of palm trees and beautiful sunsets.
								After business school, I spent several years in the logistics
								industry in an e-com where I made great friends.{' '}
							</Pr>
							<Pr>
								I started dabbling in code trying to find smarter solutions to a
								manual, repetitive processes. As my passion evolved, I started
								playing with Python and C++. Soon after, I signed up for a
								bootcamp to become a web developer.
							</Pr>
							<Pr>
								I love learning new things and employing my skills to help
								people. Currently, I am learning new technologies and building
								passion projects. 👩‍💻
							</Pr>
						</div>
					</Fade>
				</Div>
				<ImgWrapper>
					<Img src="../.././assets/lara3.png" alt="portrait" />
				</ImgWrapper>
			</Main>
		</Wrapper>
	);
};

export default About;

const Wrapper = styled.div`
	width: 100%;
	padding: 70px 0px;
	background: ${colors.BACKGROUND};
	z-index: 5;
	display: flex;
	justify-content: center;
`;

const Main = styled.div`
	width: 70%;
	padding: 20px;
	display: flex;
`;

const Div = styled.div`
	flex: 3;
	display: flex;
	justify-content: center;
`;

const Title = styled.div`
	font-size: ${font.TITLE_FONT_SIZE};
	padding: 20px;
	margin-right: 40px;
	border-right: 1px solid ${colors.SECONDARY};
	color: ${colors.SECONDARY};
`;

const Pr = styled.div`
	padding: 10px;
`;

const ImgWrapper = styled.div`
	flex: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	width: 80%;
	max-height: 370px;
	object-fit: cover;
	margin-right: auto;
	margin-left: auto;
`;
