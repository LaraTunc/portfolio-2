import React from 'react';
import styled from 'styled-components';

const ProjectItem = ({ imgSrc, imgAlt, description, stack }) => {
	return (
		<Wrapper>
			<ImgWrapper>
				<Img src={imgSrc} alt={imgAlt} />
			</ImgWrapper>
			<Description>
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
