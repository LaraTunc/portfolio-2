import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import Fade from 'react-reveal/Fade';

const Projects = () => {
	return (
		<Wrapper>
			<Fade bottom>
				<ProjectItem
					href={'https://larascards.netlify.app/'}
					imgSrc={
						'https://live.staticflickr.com/65535/51284110094_bad8d56067_k.jpg'
					}
					imgAlt={'E-cards website'}
					title={'E-CARDS'}
					description={
						'I created this app as my final project for the bootcamp. The idea struck me as I was looking for birthday e-cards for my friend and was not able to find any free options. So, I set out to build it myself. It gave me great joy to be able to build something for myself and my friends. It is a full stack app deployed on Netlify. The app allows the user to send e-cards via email to selected recipients.'
					}
					stack={
						'Create react app, React.js, Node.js, Express, Nodemailer, MongoDB, Rest API'
					}
				/>
				<ProjectItem
					href={'https://larasgame.netlify.app/'}
					imgSrc={
						'https://live.staticflickr.com/65535/51284466540_73c8164275_k.jpg'
					}
					imgAlt={'Game website'}
					title={'SPACE INVADERS'}
					description={
						"This is a game similar to space invaders. The player can evade enemy disco balls and try to catch diamonds for life. The difficulty level increases with time. It is themed after Dua Lipa's Levitating music video 🔮. I decided to design after Dua's after being obsessed with both the song and the video of it for a while. It was created to be submitted as my 1st project for my bootcamp which I had a great time working on."
					}
					stack={'OOP, Javascript, DOM'}
				/>
			</Fade>
		</Wrapper>
	);
};

export default Projects;

const Wrapper = styled.div`
	padding-top: 5%;
	z-index: 5;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Project = styled.div`
	width: 80%;
	margin: 10%;
	display: flex;
`;

const ImgWrapper = styled.div`
	flex: 1;
`;

const Img = styled.img`
	max-width: 100%;
	height: auto;
	max-width: 100%;
`;

const Description = styled.div`
	flex: 1;
	padding: 10px;
	padding-left: 30px;
`;

const Stack = styled.div`
	margin-top: 20px;
	font-weight: bolder;
`;
