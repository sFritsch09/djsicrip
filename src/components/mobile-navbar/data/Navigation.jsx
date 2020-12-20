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

export const Navigation = () => (
	<NavMenu variants={variants}>
		<MenuItem textItem="MUSIC" iconItem={<BiMusic />} />
		<MenuItem textItem="ÜBER MICH" iconItem={<BiFace />} />
		<MenuItem textItem="EQUIPMENT" iconItem={<BiBriefcaseAlt2 />} />
		<MenuItem textItem="PREISE" iconItem={<BiEuro />} />
		<MenuItem textItem="ANFRAGE" iconItem={<BiChat />} />
	</NavMenu>
);
