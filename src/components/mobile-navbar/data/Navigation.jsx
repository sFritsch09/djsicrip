import React from 'react';
import { MenuItem } from './MenuItem';
import { NavMenu } from '../mobile-navbar.styles';
import { BiMusic, BiFace, BiBriefcaseAlt2, BiEuro, BiChat } from 'react-icons/bi';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = ({ clickClose }) => (
	<NavMenu variants={variants}>
		<MenuItem textItem="MUSIC" iconItem={<BiMusic />} link="/music" close={clickClose} />
		<MenuItem textItem="ÜBER MICH" iconItem={<BiFace />} link="/about" close={clickClose} />
		<MenuItem
			textItem="EQUIPMENT"
			iconItem={<BiBriefcaseAlt2 />}
			link="/equipment"
			close={clickClose}
		/>
		<MenuItem textItem="PREISE" iconItem={<BiEuro />} link="/price" close={clickClose} />
		<MenuItem textItem="ANFRAGE" iconItem={<BiChat />} link="/booking" close={clickClose} />
	</NavMenu>
);
