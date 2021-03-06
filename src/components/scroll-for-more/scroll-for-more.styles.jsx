import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Scroll = styled(motion.div)`
	position: absolute;
	bottom: 100px;
	left: 10vw;
	z-index: 3;
	.icon {
		svg {
			height: auto;
			width: 28px;
			color: ${(props) =>
				props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor};
			-webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
			filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
		}
	}
	.text {
		margin-top: 8px;
		color: ${(props) => (props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor)};
		text-transform: uppercase;
		text-shadow: 2px 2px 4px #000000;
	}
`;
