import styled from 'styled-components';
import Label from '../../images/Crip-Beatz.png';
import Background from '../../images/Background-Gradient.jpg';
import { ReactComponent as Logo } from '../../images/sicriptext.svg';

export const SectionBg = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	background-repeat: no-repeat;
	mix-blend-mode: multiply;
`;

export const SectionOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	margin: auto;
	bottom: 0;
	z-index: 1;
	width: 800px;
`;

export const SectionOverlayWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0 30px;
	max-width: 1280px;
`;

export const Container = styled.div`
	position: relative;

	.slick-slide {
		position: relative;
	}

	.arrow-left {
		bottom: 0;
		font-size: 24px;
	}

	.arrow-right {
		font-size: 24px;
		color: white;
	}

	.slick-prev {
		font-size: 24px;
		color: white;
		left: 200px;
		top: 500px;
		z-index: 2;
	}
	.slick-next {
		font-size: 24px;
		color: white;
		right: 200px;
		top: 500px;
		z-index: 2;
	}

	.slick-prev:before,
	.slick-next:before {
		content: '' !important;
	}
`;

export const ImgOne = styled.img`
	background-image: url(${Label});
	width: 100%;
	height: 600px;
	z-index: 1;
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	mix-blend-mode: multiply;
`;

export const ImgTwo = styled.img`
	width: 1000px;
	background-image: url(${Background});
`;

export const ImgLogo = styled(Logo)`
	width: 400px;
`;
