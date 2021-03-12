import React from 'react';
import { Logo, SimpleSlider } from '../../components';
import {
	Angle,
	Content,
	TextWrapper,
	TextBig,
	CustomButton,
	MusicWrapper,
	ContentWrapper,
	LogoWrapper,
} from './homepage.styles';

const HomePage = () => {
	return (
		<div>
			<SimpleSlider />
			<Angle />
			<Content>
				<TextWrapper>
					<TextBig>DJ Si Crip</TextBig>
				</TextWrapper>
				<ContentWrapper>
					<CustomButton to="/booking">Book Now</CustomButton>
					<LogoWrapper>
						<Logo />
					</LogoWrapper>
				</ContentWrapper>
				<MusicWrapper>MUSIC AREA</MusicWrapper>
			</Content>
		</div>
	);
};

export default HomePage;
