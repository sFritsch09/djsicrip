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
import MobileNavbar from '../mobile-navbar/mobile-navbar.component';

const Navbar = () => {
	// is Mobile
	const [windowDimension, setWindowDimension] = useState(null);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isMobile = windowDimension <= 900;
	console.log({ isMobile });
	// is scrolling
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
			{!isMobile ? (
				<Nav className={scroll ? 'sticky' : ''}>
					<NavbarContainer>
						<LogoContainer>
							<NavLogo to="/">
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
								<NavLink className={scroll ? 'sticky' : ''} to="/music">
									MUSIC
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={scroll ? 'sticky' : ''} to="/about">
									ÜBER MICH
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={scroll ? 'sticky' : ''} to="/equipment">
									EQUIPMENT
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={scroll ? 'sticky' : ''} to="/price">
									PREISE
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={scroll ? 'sticky' : ''} to="/booking">
									ANFRAGE
								</NavLink>
							</NavItem>
						</NavMenu>
						<NavTools className={scroll ? 'sticky' : ''} to="login">
							<BiUser />
						</NavTools>
					</NavbarContainer>
				</Nav>
			) : (
				<MobileNavbar />
			)}
		</div>
	);
};

export default Navbar;
