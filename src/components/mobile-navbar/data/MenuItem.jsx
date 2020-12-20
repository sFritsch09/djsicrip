import React from 'react';
import { NavItem, TextWrapper, IconWrapper, TextContainer } from '../mobile-navbar.styles';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
		display: 'flex',
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
		transitionEnd: {
			// after animation set display to none
			display: 'none',
		},
	},
};

export const MenuItem = ({ textItem, iconItem }) => {
	return (
		<NavItem variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
			<TextWrapper>
				<IconWrapper>{iconItem}</IconWrapper>
				<TextContainer>{textItem}</TextContainer>
			</TextWrapper>
		</NavItem>
	);
};
