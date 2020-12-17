import React from 'react';
import GlobalStyle from './globalStyles';
import { Route, Switch } from 'react-router-dom';
import { Logo, Navbar } from './components';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<div>
			<ThemeProvider theme={invertTheme}>
				<GlobalStyle />
				<Navbar />
				<Switch>
					<Route exact path="/" />
				</Switch>
				<Logo />
			</ThemeProvider>
		</div>
	);
}

export default App;
