import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/Logo-sicrip.svg';

export const Nav = styled.nav`
	width: 100%;
	height: 80px;
	position: fixed;
	transition: 0.6s;
	flex-direction: row;
	top: 0;
	z-index: 20;

	&.sticky {
		background: ${(props) => props.theme.color};
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

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	max-width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 60px;
	padding-left: 60px;
	@media screen and (max-width: 900px) {
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 900px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 70%);
		font-size: 1.8rem;
		z-index: 21;
		cursor: pointer;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	align-content: space-between;
	flex: 1;
	width: 10%;
	object-fit: contain;
	width: 50px;
	height: 80px;
	position: relative;
`;

export const NavLogo = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	transform: scale(0.2);
	position: absolute;
	margin-bottom: 25px;
	margin-right: 400px;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export const NavIcon = styled(Logo)`
	text-decoration: none;
	transition: 0.6s;
	color: ${(props) => props.theme.color};

	&.sticky {
		color: ${(props) => props.theme.Darkcolor};
		height: 290px;
	}
	@media screen and (max-width: 600px) {
		width: 40px;
	}
`;

// ul tag
export const NavMenu = styled.ul`
	display: flex;
	position: relative;
	list-style: none;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		bottom: 0;
		left: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: ${(props) => props.theme.Darkcolor};
	}
`;

// li tag
export const NavItem = styled.li`
	position: relative;
	font-size: 16px;

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
	color: ${(props) => props.theme.color};
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
	transition: 0.6s;
	display: inline-block;

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 3px;
		background: ${(props) => props.theme.lightColor};
		transition: width 0.3s;
	}

	&:hover::after {
		width: 100%;
		transition: width 0.3s;
	}

	&.sticky {
		color: ${(props) => props.theme.Darkcolor};
	}

	@media screen and (max-width: 900px) {
		text-align: center;
		border-spacing: 30px;
		margin: auto;
		width: 100%;
		display: table;
		max-width: 100%;
		white-space: nowrap;
		&:hover {
			color: ${(props) => props.theme.lightColor};
			transition: all 0.3s ease;
		}
		&::after {
			display: none;
		}
	}
`;

export const NavTools = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 32px;
	color: ${(props) => props.theme.color};

	@media screen and (max-width: 900px) {
		display: none;
	}

	&.sticky {
		color: ${(props) => props.theme.Darkcolor};
	}
`;
