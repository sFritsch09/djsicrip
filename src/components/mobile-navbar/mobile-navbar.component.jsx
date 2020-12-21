import React, { useState } from 'react';
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

	return (
		<Nav initial={false} animate={click ? 'open' : 'closed'}>
			<NavbarContainer>
				<LoginButton to="/login">LOG IN</LoginButton>
				<HomeButton to="/">
					<BiHome />
				</HomeButton>
				<MobileNavMenu click={click}>
					<Navigation clickClose={handleClick} />
				</MobileNavMenu>
				<MenuToggle click={handleClick} />
			</NavbarContainer>
		</Nav>
	);
};
export default MobileNavbar;
