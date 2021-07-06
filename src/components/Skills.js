import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../assets/assets';
import Skill from './Skill';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import Fade from 'react-reveal/Fade';

const Skills = () => {
	const skillsObj = {
		HTML: {
			name: 'HTML',
			icon: <AiOutlineHtml5 size={50} />,
		},
		CSS: {
			name: 'CSS',
			icon: <DiCss3 size={50} />,
		},
		Javascript: {
			name: 'Javascript',
			icon: <IoLogoJavascript size={50} />,
		},
		React: {
			name: 'React',
			icon: <DiReact size={50} />,
		},
		Redux: {
			name: 'Redux',
			icon: <SiRedux size={50} />,
		},
		Nodejs: {
			name: 'Nodejs',
			icon: <DiNodejsSmall size={50} />,
		},
		Mongodb: {
			name: 'MongoDb',
			icon: <DiMongodb size={50} />,
		},
		Firebase: {
			name: 'Firebase',
			icon: <SiFirebase size={50} />,
		},
	};

	return (
		<Box>
			<Title>languages</Title>
			<Fade bottom>
				<Skillswrapper>
					{Object.values(skillsObj).map((skill) => (
						<Skill key={skill.name} name={skill.name} icon={skill.icon} />
					))}
				</Skillswrapper>
			</Fade>
			<Title>transferable skills</Title>
			<Skillswrapper>
				Self-starter, solution-oriented, analytical thinking, communication,
				collaboration, open-minded, enthusiastic
			</Skillswrapper>
		</Box>
	);
};

export default Skills;

const Box = styled.div`
	margin: 50px;
	margin-top: 10%;
	z-index: 5;
	width: 50%;
	border: 1px solid ${colors.PRIMARY};
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: ${font.TITLE_FONT_SIZE};
`;

const Skillswrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
`;
