import React from 'react';
import { Logo, SimpleSlider } from '../../components';
import MusicCollection from '../../components/music-collection/music-collection.component';
import {
	Angle,
	Content,
	TextWrapper,
	TextBig,
	CustomButton,
	MusicWrapper,
	ContentWrapper,
	LogoWrapper,
	MusicContainer,
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
				<MusicContainer>
					<MusicWrapper>
						<MusicCollection />
					</MusicWrapper>
				</MusicContainer>
			</Content>
		</div>
	);
};

export default HomePage;
