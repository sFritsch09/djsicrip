import React, { useState, useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import { FaTimes, FaBars } from 'react-icons/fa';
import {
	LogoContainer,
	Nav,
	NavIcon,
	NavItem,
	NavLink,
	NavLogo,
	NavMenu,
	NavTools,
	NavbarContainer,
	MobileIcon,
} from './navbar.styles';

const Navbar = () => {
	const [scroll, setScroll] = useState(0);
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

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
			<Nav className={scroll ? 'sticky' : ''}>
				<NavbarContainer>
					<LogoContainer>
						<NavLogo>
							<NavIcon className={scroll ? 'sticky' : ''} />
						</NavLogo>
					</LogoContainer>
					<MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
					<NavMenu conClick={handleClick} click={click}>
						<NavItem>
							<NavLink className={scroll ? 'sticky' : ''} to="/">
								HOME
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={scroll ? 'sticky' : ''} to="/">
								MUSIC
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
					<NavTools className={scroll ? 'sticky' : ''}>
						<BiUser />
					</NavTools>
				</NavbarContainer>
			</Nav>
		</div>
	);
};

export default Navbar;
