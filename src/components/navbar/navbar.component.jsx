import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	BackgroundImg,
	Nav,
	NavIcon,
	NavItem,
	NavLink,
	NavLogo,
	NavMenu,
	theme,
	invertTheme,
} from './navbar.styles';

const Navbar = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const scrollCheck = window.scrollY > 0 && window.scrollY < 4000;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Nav className={scroll ? 'sticky' : 'is-hidden'}>
					<NavLogo to="/">
						<NavIcon className={scroll ? 'sticky' : ''} />
					</NavLogo>
					<NavMenu>
						<NavItem>
							<NavLink className={scroll ? 'sticky' : ''} to="/">
								HOME
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={scroll ? 'sticky' : ''} to="/">
								ÜBER MICH
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={scroll ? 'sticky' : ''} to="/">
								EQUIPMENT
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={scroll ? 'sticky' : ''} to="/">
								PREISE
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={scroll ? 'sticky' : ''} to="/">
								ANFRAGE
							</NavLink>
						</NavItem>
					</NavMenu>
				</Nav>
				<BackgroundImg />
			</ThemeProvider>
		</div>
	);
};

export default Navbar;
