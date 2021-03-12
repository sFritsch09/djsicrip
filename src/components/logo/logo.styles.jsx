import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as Vinyl } from '../../images/vinyl.svg';

export const MainContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	position: relative;
	/* height: 400px; */
	height: 100%;
	width: 100%;
	/* padding: 10px; */
	/* border: 3px solid blue; */
`;

export const LogoContainer = styled(motion.div)`
	width: 70%;
	position: absolute;
	height: 70%;
	z-index: 1;

	/* bottom: 80px; */

	.logo {
		transform: rotate(21deg);
		/* height: 250px; */
		width: 110%;
		height: 140%;
		margin-top: -35%;
		/* margin-left: 80px; */
	}
`;
export const VinylWrapper = styled(motion.div)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60%;
	width: 60%;
	cursor: grab;
`;

export const VinylImg = styled(Vinyl)`
	/* width: 250px; */
	/* margin-top: 45%; */
	width: 100%;
	/* height: 250px; */
	height: 100%;
`;
