import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as Vinyl } from '../../images/vinyl.svg';

export const MainContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	height: 400px;
	padding: 10px;
	margin: auto;
	cursor: pointer;
	/* border: 3px solid blue; */
`;

export const LogoContainer = styled(motion.div)`
	position: relative;
	z-index: 2;
	bottom: 80px;

	.logo {
		transform: rotate(21deg);
		height: 250px;
		cursor: pointer;
		margin-left: 80px;
	}
`;
export const VinylWrapper = styled(motion.div)`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 120px;
`;

export const VinylImg = styled(Vinyl)`
	width: 250px;
	height: 250px;
	z-index: 1;
`;
