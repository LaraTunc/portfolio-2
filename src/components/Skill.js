import React from 'react';
import styled from 'styled-components';

const Skill = ({ name, icon }) => {
	return (
		<Wrapper>
			{icon}
			<p>{name}</p>
		</Wrapper>
	);
};

export default Skill;

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;
