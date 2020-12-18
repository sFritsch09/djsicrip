import styled from 'styled-components';
import Label from '../../images/Crip-Beatz.png';
import Background from '../../images/Background-Gradient.jpg';

export const SectionBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	mix-blend-mode: multiply;
`;

export const SectionOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	min-height: 1px;
`;

export const SectionOverlayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	justify-content: flex-end;
	width: 100%;
	padding: 0 30px;
	max-width: 1280px;
`;

export const Container = styled.div`
	margin: auto;
	padding: 0 30px;
	border: 2px solid blue;
	position: relative;
	top: 200px;
	height: 300px;
`;

export const ImgOne = styled.img`
	background: url(${Label});
	background-size: cover;
`;
