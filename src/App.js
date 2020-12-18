import React from 'react';
import GlobalStyle, { theme, invertTheme } from './globalStyles';
import { Route, Switch } from 'react-router-dom';
import { Logo, Navbar, SimpleSlider } from './components';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Navbar />
				<Switch>
					<Route exact path="/" />
				</Switch>

				<SimpleSlider />
			</ThemeProvider>
		</div>
	);
}

export default App;
