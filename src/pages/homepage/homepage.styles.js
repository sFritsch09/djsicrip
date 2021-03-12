import styled from 'styled-components';
import { Link } from 'react-router-dom';

// slanted edges here
export const Angle = styled.div`
	background: ${(props) => props.theme.darkColor};
	position: relative;
	height: 20px;
	padding-bottom: 60px;

	&:before {
		top: -50px;
		transform: skewY(1.5deg);
		transform-origin: 100% 0;
		background: inherit;
		content: '';
		display: block;
		height: 160px;
		left: 0;
		position: absolute;
		right: 0;
		backface-visibility: hidden; // for Chrome Windows

		@media screen and (max-width: 900px) {
			top: -80px;
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	padding: 20px;
	background-color: ${(props) => props.theme.darkColor};
`;

export const TextWrapper = styled.div`
	margin-bottom: 60px;
	padding: 0 20px;
	display: flex;
	justify-content: flex-start;

	@media screen and (max-width: 900px) {
		padding: 0;
	}
`;

export const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 230px;
	height: 230px;
	overflow: hidden;
	@media screen and (max-width: 900px) {
		padding: 0;
	}
`;
export const ContentWrapper = styled.div`
	margin-bottom: 60px;
	padding: 0 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 900px) {
		padding: 0;
	}
`;

export const TextBig = styled.h2`
	font-size: 4.5em;
	color: ${(props) => props.theme.color};

	@media screen and (max-width: 900px) {
		font-size: 2em;
	}
`;

export const CustomButton = styled(Link)`
	color: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.darkColor : props.theme.darkColor};
	background: ${(props) =>
		props.theme.mode === 'Dark' ? props.theme.contrastDark : props.theme.contrastColor};
	min-width: 165px;
	width: auto;
	height: 50px;
	align-items: center;
	letter-spacing: 0.035em;
	padding: 0 35px 0 35px;
	font-size: 22px;
	text-transform: uppercase;
	font-weight: bolder;
	-webkit-text-stroke: 2.5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	text-decoration: none;
	border: 5px solid
		${(props) =>
			props.theme.mode === 'Dark' ? props.theme.contrastDark : props.theme.contrastColor};

	&:hover {
		background: transparent;
		color: ${(props) =>
			props.theme.mode === 'Dark' ? props.theme.contrastDark : props.theme.contrastColor};
		transition: 0.2s;
	}

	@media screen and (max-width: 900px) {
		padding: 0 5px 0 5px;
		font-size: 18px;
		min-width: 65px;
	}
`;

export const MusicWrapper = styled.div`
	width: 100%;
	padding: 20px;
	height: 100px;
	color: white;
	display: flex;
	justify-content: center;
`;
