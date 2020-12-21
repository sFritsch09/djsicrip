import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
	.container {
		position: relative;
		padding-top: 150px;
		.row {
			max-height: 100%;
			align-items: center;
			justify-content: center;
			display: flex;

			.image-container {
				position: relative;
				.thumbnail {
					overflow: hidden;
					position: relative;
					.frame {
						img {
							width: 100%;
						}
					}
				}
				.information {
					position: absolute;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 20px;
					text-transform: uppercase;
					color: ${(props) => props.theme.color};
				}
			}
		}
	}
`;

export const Single = styled(motion.div)`
	.container {
		display: block;
		.top-row {
			margin-top: 45px;
			height: 50vh;
			width: 100%;
			align-items: flex-end;
			display: flex;
			justify-content: center;
			.top {
				padding: 40px;
				width: 100%;
				max-height: 100%;
				justify-content: center;
				display: flex;

				.model {
					overflow: hidden;
					.first {
						margin-right: 72px;
					}
					span {
						display: inline-block;
						position: relative;
						color: ${(props) => props.theme.color};
						font-weight: 400;
						font-size: 180px;
						/* font-family: 'Maragsa'; */
						@media screen and (max-width: 1500px) {
							font-size: 100px;
						}
						@media screen and (max-width: 600px) {
							font-size: 80px;
						}
					}
				}
			}
		}
		.bottom-row {
			height: 100vh;
			position: relative;
			.bottom {
				height: 200px;
				width: 100%;
				.thumbnail-single {
					width: 100%;
					height: 600px;
					margin: 0 auto;
					overflow: hidden;
					position: absolute;
					left: 0;
					right: 0;
					.frame-single {
						img {
							position: absolute;
							width: 100%;
						}
					}
				}
			}
		}
	}
`;

export const Empty = styled.div`
	padding-top: 80px;
`;
