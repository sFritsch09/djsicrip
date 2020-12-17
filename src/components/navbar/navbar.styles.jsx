import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/sicriptext.svg';
import BgImg from '../../images/Background-Gradient.jpg';

export const theme = {
	text: '#006d77',
	darkText: '#edf6f9',
};

// This theme swaps `fg` and `bg`
export const invertTheme = {
	text: '#edf6f9',
	darkText: '#006d77',
};

export const Nav = styled.nav`
	/* background: #101522; */
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	position: fixed;
	transition: 0.6s;
	padding: 40px 100px;
	top: 0;
	z-index: 20;

	&.sticky {
		padding: 5px 100px;
		background: #fff;
	}
	@media screen and (max-width: 900px) {
		bottom: 0 !important;
		left: 0 !important;
		top: initial;
		position: fixed;
		width: 100%;
		opacity: 1;
		&.is-hidden {
			opacity: 0;
			transition: transform 0.4s, opacity 0.2s;
		}
	}
`;

export const NavLogo = styled(Link)`
	justify-self: flex-start;
	transform: rotate(21deg);
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(Logo)`
	position: relative;
	text-decoration: none;
	padding-top: 30px;
	transition: 0.6s;
	margin-right: 0.5rem;
	width: 100px;
	color: ${(props) => props.theme.textDark};

	&.sticky {
		color: black;
	}
	@media screen and (max-width: 600px) {
		width: 40px;
	}
`;

// ul tag
export const NavMenu = styled.ul`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		padding: 10vh;
		width: 100%;
		height: 90vh;
		position: absolute;
		bottom: 70px;
		left: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: #101522;
	}
`;

// li tag
export const NavItem = styled.li`
	position: relative;
	list-style: none;

	@media screen and (max-width: 900px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;
// a tag
export const NavLink = styled(Link)`
	position: relative;
	margin: 0 15px;
	letter-spacing: 2px;
	font-weight: 300px;
	color: ${(props) => props.theme.text};
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: 0.6s;
	display: inline-block;

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 3px;
		background: #006d77;
		transition: width 0.3s;
	}

	&:hover::after {
		width: 100%;
		transition: width 0.3s;
	}

	&.sticky {
		color: #006d77;
	}

	@media screen and (max-width: 900px) {
		text-align: cener;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

// Background image

export const BackgroundImg = styled.img`
	width: 100%;
	height: 100vh;
	background: url(${BgImg});
	background-size: cover;
`;
