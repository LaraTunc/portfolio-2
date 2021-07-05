import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/assets';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

const Contact = () => {
	return (
		<Wrapper>
			<Fade>
				<Main>
					<Anchor href="mailto:laratunc@gmail.com">
						<Item>
							<Name>email</Name>
							<AiOutlineMail size={30} />
						</Item>
					</Anchor>
					<Anchor href="https://www.linkedin.com/in/laratunc/">
						<Item>
							<Name>linkedIn</Name>
							<AiOutlineLinkedin size={30} />
						</Item>
					</Anchor>
					<Anchor href="https://github.com/LaraTunc">
						<Item>
							<Name>github</Name>
							<AiFillGithub size={30} />
						</Item>
					</Anchor>
				</Main>
			</Fade>
		</Wrapper>
	);
};

export default Contact;

const Wrapper = styled.div`
	background: ${colors.BACKGROUND};
	width: 100%;
	height: 100vh;
	z-index: 5;
`;

const Main = styled.div`
	width: 100%;
	height: 100vh;
	padding-top: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Anchor = styled.a`
	color: inherit;
	text-decoration: none;
	margin: 15px;
	& :hover {
		color: ${colors.SECONDARY};
	}
`;

const Name = styled.div`
	margin-right: 10px;
`;
