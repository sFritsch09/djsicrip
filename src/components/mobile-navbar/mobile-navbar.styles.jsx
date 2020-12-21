import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MobileNavMenu = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	bottom: 0;
	left: ${({ click }) => (click ? 0 : '-100%')};
	opacity: 1;
	transition: all 0.5s ease;
	background: ${(props) => props.theme.Darkcolor};
`;

export const Nav = styled(motion.nav)`
	bottom: 0;
	left: 0;
	top: initial;
	position: fixed;
	width: 100%;
	height: 80px;
	opacity: 1;
	background: ${(props) => props.theme.Darkcolor};
	z-index: 3;

	&.is-hidden {
		opacity: 0;
		transition: transform 0.4s, opacity 0.2s;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	height: 80px;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 20px;
	padding-left: 20px;
	align-items: center;
	width: 100%;
`;

export const BurgerButton = styled.button`
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: absolute;
	bottom: 10px;
	right: 15px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: transparent;
	color: ${(props) => props.theme.contrastColor};
	z-index: 3;
`;

export const HomeButton = styled(Link)`
	font-size: 2rem;
	height: 50px;
	color: ${(props) => props.theme.contrastColor};
	z-index: 3;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 2;
	width: 40%;
`;

export const LoginButton = styled(Link)`
	font-size: 20px;
	height: 50px;
	flex-direction: row;
	text-decoration: none;
	color: ${(props) => props.theme.contrastColor};
	border: 3px solid ${(props) => props.theme.contrastColor};
	z-index: 3;
	width: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 20%;
`;

export const NavMenu = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-content: center;
`;

export const NavItem = styled(motion.li)`
	list-style: none;
	height: 60px;
	width: 100%;
	cursor: pointer;
	margin-bottom: 10px;
`;

export const TextWrapper = styled(Link)`
	width: 100%;
	display: flex;
	align-content: center;
	height: 50px;
	justify-content: center;
	text-decoration: none;
	align-items: center;
	margin-right: 10px;
`;

export const IconWrapper = styled.div`
	font-size: 2rem;
	vertical-align: center;
	display: flex;
	align-items: center;
	flex-direction: row;
	margin-right: 20px;
	color: ${(props) => props.theme.contrastColor};
`;

export const TextContainer = styled.div`
	font-size: 28px;
	color: ${(props) => props.theme.contrastColor};
`;
