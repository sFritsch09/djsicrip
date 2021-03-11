import React, { useEffect } from 'react';
import GlobalStyle, { theme, invertTheme } from './globalStyles';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './components';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/hooks/DarkModeContext';
import HomePage from './pages/homepage/hompage.component';
import AboutMe from './pages/about-me/about-me.component';
import Fritsch from './pages/about-me/about-fritsch.component';
import Booking from './pages/booking/booking.component';
import Equipment from './pages/equipment/equipment.component';
import Music from './pages/music/music.component';
import Price from './pages/price/price.component';
import LogIn from './pages/login/login.component';
import { ScrollProvider } from './components/hooks/ScrollContext';
// import { AnimatePresence } from 'framer-motion';

function App() {
	const isDarkMode = useDarkMode();
	useEffect(() => {
		localStorage.setItem('theme', isDarkMode);
	}, [isDarkMode]);
	return (
		<div>
			<ThemeProvider theme={isDarkMode ? theme : invertTheme}>
				<GlobalStyle />
				<Navbar />
				{
					// <AnimatePresence
					// initial={false}
					// exitBeforeEnter
					// >
				}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutMe} />
					<Route exact path="/about/sebastian" component={Fritsch} />
					<Route path="/booking" component={Booking} />
					<ScrollProvider>
						<Route path="/equipment" component={Equipment} />
					</ScrollProvider>
					<Route path="/price" component={Price} />
					<Route path="/music" component={Music} />
					<Route path="/login" component={LogIn} />
				</Switch>
				{
					// </AnimatePresence>
				}
			</ThemeProvider>
		</div>
	);
}

export default App;
