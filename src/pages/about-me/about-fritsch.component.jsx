import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Single, Empty } from './about-me.styles';
import src from '../../images/about.jpeg';

//Components
import ScrollForMore from '../../components/scroll-for-more/scroll-for-more.component';
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const imageDetails = {
	width: 524,
	height: 650,
};

const firstName = {
	initial: {
		y: 0,
	},
	animate: {
		y: 0,
		transition: {
			delayChildren: 0.6,
			staggerChildren: 0.04,
			staggerDirection: -1,
		},
	},
};

const lastName = {
	initial: {
		y: 0,
	},
	animate: {
		y: 0,
		transition: {
			delayChildren: 0.6,
			staggerChildren: 0.04,
			staggerDirection: 1,
		},
	},
};

const letter = {
	initial: {
		y: 400,
	},
	animate: {
		y: 0,
		transition: { duration: 1, ...transition },
	},
};

const Fritsch = () => {
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

	const [canScroll, setCanScroll] = useState(false);

	useEffect(() => {
		if (canScroll === false) {
			document.querySelector('body').classList.add('no-scroll');
		} else {
			document.querySelector('body').classList.remove('no-scroll');
		}
	}, [canScroll]);

	return (
		<div>
			<Empty>
				<Single
					onAnimationComplete={() => setCanScroll(true)}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<div className="container">
						<div className="top-row">
							<div className="top">
								<motion.div className="model">
									<motion.span className="first" variants={firstName}>
										<motion.span variants={letter}>S</motion.span>
										<motion.span variants={letter}>e</motion.span>
										<motion.span variants={letter}>b</motion.span>
										<motion.span variants={letter}>a</motion.span>
										<motion.span variants={letter}>s</motion.span>
										<motion.span variants={letter}>t</motion.span>
										<motion.span variants={letter}>i</motion.span>
										<motion.span variants={letter}>a</motion.span>
										<motion.span variants={letter}>n</motion.span>
									</motion.span>
									<motion.span className="last" variants={lastName}>
										<motion.span variants={letter}>F</motion.span>
										<motion.span variants={letter}>r</motion.span>
										<motion.span variants={letter}>i</motion.span>
										<motion.span variants={letter}>t</motion.span>
										<motion.span variants={letter}>s</motion.span>
										<motion.span variants={letter}>c</motion.span>
										<motion.span variants={letter}>h</motion.span>
									</motion.span>
								</motion.div>
							</div>
						</div>
						<div className="bottom-row">
							<div className="bottom">
								<motion.div
									initial={{
										y: '-50%',
										width: imageDetails.width,
										height: imageDetails.height,
									}}
									animate={{
										y: 0,
										width: '100%',
										height:
											window.innerWidth > 1440
												? 400
												: 400 && window.innerWidth < 1440
												? 400
												: 200 && window.innerWidth < 1440
												? 200
												: 400,
										transition: { delay: 0.2, ...transition },
									}}
									className="thumbnail-single"
								>
									<motion.div className="frame-single" whileHover="hover" transition={transition}>
										<motion.img
											src={src}
											alt="an image"
											style={{ scale: scale }}
											initial={{ scale: 1 }}
											animate={{
												transition: { delay: 0.2, ...transition },
												y:
													window.innerWidth > 1440
														? -400
														: -600 && window.innerWidth < 1440
														? -100
														: -600,
											}}
										/>
									</motion.div>
									<ScrollForMore />
								</motion.div>
							</div>
						</div>
					</div>
				</Single>
			</Empty>
		</div>
	);
};

export default Fritsch;
