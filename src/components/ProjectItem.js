import React from 'react';
import styled from 'styled-components';
import { font } from '../assets/assets';

const ProjectItem = ({ href, imgSrc, imgAlt, title, description, stack }) => {
	return (
		<Wrapper>
			<ImgWrapper>
				<a href={href} target="_blank">
					<Img src={imgSrc} alt={imgAlt} />
				</a>
			</ImgWrapper>
			<Description>
				<Title>{title}</Title>
				{description}
				<Stack>Technologies: {stack}</Stack>
			</Description>
		</Wrapper>
	);
};

export default ProjectItem;

const Wrapper = styled.div`
	width: 80%;
	margin: 10%;
	display: flex;
`;

const ImgWrapper = styled.div`
	flex: 3;
`;

const Img = styled.img`
	max-width: 100%;
	height: auto;
	max-width: 100%;
`;

const Description = styled.div`
	flex: 2;
	padding: 10px;
	padding-left: 30px;
`;

const Title = styled.p`
	font-size: ${font.TITLE_FONT_SIZE};
`;

const Stack = styled.div`
	margin-top: 20px;
	font-weight: bolder;
`;
