import React, { useContext, useState } from 'react';

const NavContext = React.createContext();
const NavUpdateContext = React.createContext();

export const useNav = () => {
	return useContext(NavContext);
};

export const useNavUpdate = () => {
	return useContext(NavUpdateContext);
};

export const NavProvider = ({ children }) => {
	const [scroll, setScroll] = useState(false);

	const toggleScroll = () => {
		setScroll((prevScroll) => !prevScroll);
	};

	return (
		<NavContext.Provider value={scroll}>
			<NavUpdateContext.Provider value={toggleScroll}>{children}</NavUpdateContext.Provider>
		</NavContext.Provider>
	);
};
