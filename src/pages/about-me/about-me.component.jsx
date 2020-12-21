import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import src from '../../images/about.jpeg';
import { Main } from './about-me.styles';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const imageDetails = {
	width: 524,
	height: 650,
};

const AboutMe = () => {
	// Hook
	const useLockBodyScroll = () => {
		useLayoutEffect(() => {
			// Get original body overflow
			const originalStyle = window.getComputedStyle(document.body).overflow;
			// Prevent scrolling on mount
			document.body.style.overflow = 'hidden';
			// Re-enable scrolling when component unmounts
			return () => (document.body.style.overflow = originalStyle);
		}, []); // Empty array ensures effect is only run on mount and unmount
	};

	useLockBodyScroll();

	return (
		<>
			<Main>
				<div className="container">
					<div className="row">
						<div className="image-container">
							<div
								className="thumbnail"
								style={{
									width: imageDetails.width,
									height: imageDetails.height,
								}}
							>
								<div className="frame">
									<Link to={`/about/sebastian`}>
										<motion.div whileTap={{ scale: 1.1 }} className="mobileText">
											TAP ME
										</motion.div>
										<motion.img
											src={src}
											alt="Sebastian Fritsch"
											whileHover={{ scale: 1.1 }}
											transition={transition}
										/>
									</Link>
								</div>
							</div>
							<motion.div exit={{ opacity: 0 }} transition={transition} className="information">
								<div className="title">Sebastian Fritsch</div>
							</motion.div>
						</div>
					</div>
				</div>
			</Main>
		</>
	);
};

export default AboutMe;
