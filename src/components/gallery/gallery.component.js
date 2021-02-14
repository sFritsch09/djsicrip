import React, { useState, useEffect } from 'react';
import { Product, ProductImage } from './gallery.styles.js';
//icons
import { BiChevronLeft as Chevron } from 'react-icons/bi';
import { VscClose as Close } from 'react-icons/vsc';
import { IoArrowDownCircleOutline as DownArrow } from 'react-icons/io5';

import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const Gallery = ({ header, desc, image, title }) => {
	const ease = [0.6, 0.05, 0.2, 0.99];
	const x = useSpring(0, {
		stiffness: 1500,
		damping: 400,
	});
	const fadeIn = useTransform(x, [-100, 0], [1, 0]);
	const fadeOut = useTransform(x, [-60, 0], [0, 1]);
	const scale = useTransform(x, [-100, 0], [1.5, 1]);
	const width = useTransform(x, [-900, 0], [350, 0]);
	const up = useTransform(x, [-100, 0], [-100, 0]);
	const down = useTransform(x, [-100, 0], [100, 0]);
	//state
	const [state, setState] = useState(false);

	//scrolltargets
	let targetElement = document.querySelector('html');

	// Update the state to check if the user has dragged the product
	useEffect(() => {
		x.onChange(() => {
			x.get() > -100 ? setState(false) : setState(true);
		});
	}, [x]);

	//Setting body scroll
	useEffect(() => {
		state ? targetElement.classList.add('no-scroll') : targetElement.classList.remove('no-scroll');
	});

	// Closing the drag product
	const closeProductDrag = () => {
		x.stop();
		x.set(0);
	};

	return (
		<Product>
			<div className="product-inner">
				<div className="product-content">
					<motion.div style={{ translateY: up }} className="product-content-inner">
						<h1>{header}</h1>
						<p>{desc}</p>
						<div className="btn-row">
							<button>Mieten</button>
							<DownArrow />
						</div>
					</motion.div>
				</div>
			</div>
			<div className="product-slide-enlarge">
				<motion.div className="background" style={{ opacity: fadeIn }}></motion.div>
				{state ? (
					<AnimatePresence>
						<motion.div
							initial={{ y: -30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -30, opacity: 0 }}
							transition={{ ease: ease }}
							className="product-drag-header"
						>
							<div className="company-name">{title}</div>
							<div onClick={closeProductDrag} className="close">
								<Close />
							</div>
						</motion.div>
					</AnimatePresence>
				) : (
					<AnimatePresence></AnimatePresence>
				)}
				<div className="product-container">
					<motion.div
						drag="x"
						style={{ x, scale, cursor: 'grab' }}
						animate={{ y: -45 }}
						dragElastic={0.1}
						className="product-image"
						dragConstraints={{ left: -300, right: 0 }}
						whileTap={{ cursor: 'grabbing' }}
					>
						<ProductImage image={image} />
					</motion.div>
				</div>
				<motion.div style={{ paddingBottom: down }} className="product-drag">
					<div className="product-drag-inner">
						<div className="product-drag-label">
							<motion.h6 style={{ x, opacity: fadeOut }}>
								<Chevron className="arrow-left" />
								Drag To Enlarge
							</motion.h6>
						</div>
						<div className="product-drag-progress-background">
							<motion.div style={{ width }} className="product-drag-progress"></motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</Product>
	);
};

export default Gallery;
