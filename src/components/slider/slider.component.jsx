import React from 'react';
import Slider from 'react-slick';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import {
	SectionBg,
	SectionOverlay,
	SectionOverlayWrapper,
	Container,
	ImgOne,
	ImgTwo,
	ImgLogo,
} from './slider.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SamplePrevArrow = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<BsArrowBarLeft className="arrow-left" />
		</div>
	);
};

const SampleNextArrow = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<BsArrowBarRight className="arrow-right" />
		</div>
	);
};

const CustomSlider = () => {
	return (
		<div>
			<ImgOne />
			<SectionOverlay>
				<SectionOverlayWrapper>
					<ImgLogo />
				</SectionOverlayWrapper>
			</SectionOverlay>
		</div>
	);
};

const SimpleSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
	};
	return (
		<div>
			<Container>
				<Slider {...settings}>
					<div>
						<CustomSlider />
					</div>
					<div>
						<CustomSlider />
					</div>
					<div>
						<CustomSlider />
					</div>
				</Slider>
			</Container>
		</div>
	);
};

export default SimpleSlider;
