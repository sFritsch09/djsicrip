import React, { useState, useEffect } from 'react';
import { BackgroundImg, Nav, NavIcon, NavItem, NavLink, NavLogo, NavMenu } from './navbar.styles';

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
		</div>
	);
};

export default Navbar;
