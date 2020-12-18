import React from 'react';
import Slider from 'react-slick';
import {
	SectionBg,
	SectionOverlay,
	SectionOverlayWrapper,
	Container,
	ImgOne,
} from './slider.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<Container>
				<Slider {...settings}>
					<div>
						<SectionBg>
							<ImgOne />
						</SectionBg>
						<SectionOverlay>
							<SectionOverlayWrapper>
								<ImgOne />
							</SectionOverlayWrapper>
						</SectionOverlay>
					</div>
					<div>
						<SectionBg />
						<SectionOverlay>
							<SectionOverlayWrapper>
								<ImgOne />
							</SectionOverlayWrapper>
						</SectionOverlay>
					</div>
					<div>
						<SectionBg />
						<SectionOverlay>
							<SectionOverlayWrapper>
								<ImgOne />
							</SectionOverlayWrapper>
						</SectionOverlay>
					</div>
				</Slider>
			</Container>
		</div>
	);
};

export default SimpleSlider;
