import React, { useState, useEffect } from 'react';
import { MenuToggle } from './data/MenuToggle';
import { Navigation } from './data/Navigation';
import { BiHome } from 'react-icons/bi';
import {
	Nav,
	MobileNavMenu,
	NavbarContainer,
	HomeButton,
	LoginButton,
} from './mobile-navbar.styles';

const MobileNavbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	// Hook
	const useWindowSize = () => {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
		const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
		});

		useEffect(() => {
			// Handler to call on window resize
			const handleResize = () => {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};

			// Add event listener
			window.addEventListener('resize', handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize);
		}, []); // Empty array ensures that effect is only run on mount

		return windowSize;
	};
	const size = useWindowSize();

	return (
		<Nav initial={false} animate={click ? 'open' : 'closed'}>
			<NavbarContainer>
				<LoginButton to="/login">LOG IN</LoginButton>
				<HomeButton to="/">
					<BiHome />
				</HomeButton>
				<MobileNavMenu click={click} height={size.height}>
					<Navigation clickClose={handleClick} />
				</MobileNavMenu>
				<MenuToggle click={handleClick} />
			</NavbarContainer>
		</Nav>
	);
};
export default MobileNavbar;
