import React from 'react';
import styled from 'styled-components';

const Projects = () => {
	return (
		<Wrapper>
			<Project>
				<Img
					src="https://live.staticflickr.com/65535/51284110094_bad8d56067_k.jpg"
					alt="E-cards website"
				/>
				<Description>
					I created this app as my final project for the bootcamp. <br />
					The idea struck me as I was looking for birthday e-cards for my friend
					and was not able to find any free options. Given this, I set out to
					build it myself. <br />
					It gave me great joy to be able to build something for myself and my
					friends. <br />
					It is a full stack app deployed on Netlify. The app allows the user to
					send e-cards via email to selected recipients.
					<div>
						Technologies used: Create react app, React.js, Node.js, Express,
						Nodemailer, MongoDB
					</div>
				</Description>
			</Project>
			<Project>
				<Img
					src="https://live.staticflickr.com/65535/51284466540_73c8164275_k.jpg"
					alt="Game website"
				/>
				<Description>
					This is a game similar to space invaders. <br />
					It is themed after Dua Lipa's Levitating music video 🔮. It was
					created to be submitted as my 1st project for my bootcamp. <br />
					<div>Technologies used: OOP, Javascript, DOM</div>
				</Description>
			</Project>
		</Wrapper>
	);
};

export default Projects;

const Wrapper = styled.div`
	padding-top: 10%;
	z-index: 5;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Project = styled.div`
	width: 80%;
	margin: 20px;
	padding: 40px;
	display: flex;
`;

const Img = styled.img`
	max-width: 40%;
	height: auto;
`;

const Description = styled.div`
	padding: 20px;
	padding-left: 50px;
	div {
		margin-top: 20px;
		font-weight: bolder;
	}
`;
