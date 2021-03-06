import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = ({ aboutRef }) => {
	return (
		<Wrapper>
			<StyledLink to="/">home</StyledLink>
			<Div
				onClick={() => {
					window.scrollTo({
						behavior: 'smooth',
						top: aboutRef.current.offsetTop,
					});
				}}
			>
				about
			</Div>
			<StyledLink to="/projects">projects</StyledLink>
			<StyledLink to="/contact">contact</StyledLink>
		</Wrapper>
	);
};

export default Navbar;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-weight: lighter;
	position: fixed;
	top: 0px;
	z-index: 7;
`;

const StyledLink = styled(NavLink)`
	text-decoration: none;
	color: white;
	margin: 10px 20px;
	&:hover {
		border-bottom: 1px solid white;
	}
`;

const Div = styled.div`
	margin: 10px 20px;
	&:hover {
		border-bottom: 1px solid white;
	}
`;
