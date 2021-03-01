import React, { createRef, useEffect, useRef } from 'react';
import ScrollSnap from 'scroll-snap';
import { useNav, useNavUpdate } from '../../components/hooks/NavContext';
import { useScroll } from '../../components/hooks/ScrollContext';

import Gallery from '../../components/gallery/gallery.component';
import { Container, Section, Section2, Section3 } from './equipment.styles';

import Controller1 from '../../images/equipment/KontrollS2Front.png';
import Soundboks from '../../images/equipment/SoundBoks.png';
import Programm from '../../images/equipment/TraktorPro.png';
import TraktorZ2 from '../../images/equipment/TraktorZ2wide.png';
import Turntable from '../../images/equipment/Turntable.png';

const Equipment = () => {
	const titleRef = useRef();
	const titleRef2 = useRef();
	const titleRef3 = useRef();
	const titleRef4 = useRef();
	const titleRef5 = useRef();

	const handleClick = () => {
		titleRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick2 = () => {
		titleRef2.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick3 = () => {
		titleRef3.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick4 = () => {
		titleRef4.current.scrollIntoView({ behavior: 'smooth' });
	};
	const handleClick5 = () => {
		titleRef5.current.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollContext = useNav();
	const scrollToggleContext = useNavUpdate();
	const hideScroll = useScroll();

	const ref = useRef();
	function callback() {}
	const bindScrollSnap = () => {
		const element = ref.current;
		const snapElement = new ScrollSnap(element, {
			snapDestinationY: '100%',
		});
		snapElement.bind(callback);
	};
	//scrolltargets
	const targetElement = document.querySelector('html');
	useEffect(() => {
		bindScrollSnap();
		targetElement.classList.remove('no-scroll');
	});
	// console.log(hideScroll);
	useEffect(() => {
		if (!scrollContext) {
			scrollToggleContext();
		}
		return function cleanup() {
			if (scrollContext) {
				scrollToggleContext();
			}
		};
	}, [scrollContext, scrollToggleContext]);
	return (
		<React.Fragment>
			<Container ref={ref} scroll={!hideScroll}>
				<Section ref={titleRef5}>
					<Gallery
						arrowClick={handleClick}
						header="DJ Controller"
						desc="Traktor Kontrol S2 MK3 von Native Instruments"
						image={Controller1}
						title="Traktor Kontrol S2 MK3"
					/>
				</Section>
				<Section ref={titleRef}>
					<Gallery
						arrowClick={handleClick2}
						header="DJ Programm"
						desc="Traktor Pro 3 von Native Instruments für ein professionelles auflegen auf dem Macbook Pro"
						image={Programm}
						title="Traktor Pro 3"
					/>
				</Section>

				<Section2 ref={titleRef2}>
					<Gallery
						arrowClick={handleClick3}
						header="Soundanlage"
						desc="Soundboks 3"
						image={Soundboks}
						title="Soundboks 3"
					/>
				</Section2>
				<Section3 ref={titleRef3}>
					<Gallery
						arrowClick={handleClick4}
						header="DJ Controller"
						desc="Traktor Kontrol Z2 von Native Instruments"
						image={TraktorZ2}
						title="Kontrol Z2"
					/>
				</Section3>
				<Section ref={titleRef4}>
					<Gallery
						arrowClick={handleClick5}
						header="Turntables x 2"
						desc="High-Torque DJ-Plattenspieler ST.150 von Stanton"
						image={Turntable}
						title="Stanton ST.150"
					/>
				</Section>
			</Container>
		</React.Fragment>
	);
};

export default Equipment;
