import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Main = styled.main`
	.container {
		position: relative;
		padding-top: 150px;
		@media screen and (max-width: 600px) {
			padding-top: 60px;
		}
		.mobileText {
			display: none;
			@media screen and (max-width: 900px) {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				text-decoration: none;
				font-size: 40px;
				display: flex;
				text-shadow: black 1px 0 10px;
				justify-content: center;
				align-items: center;
				color: ${(props) => props.theme.color};
				margin-right: 50px;
				&:hover {
					color: ${(props) => props.theme.contrastDark};
				}
			}
		}
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
						display: flex;
						justify-content: center;

						img {
							width: 100%;
							@media screen and (max-width: 600px) {
								width: 80vw;
							}
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

					@media screen and (max-width: 900px) {
						margin-top: 1px;
					}
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
			@media screen and (max-width: 600px) {
				margin-top: 0;
				height: 30vh;
			}
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
						@media screen and (max-width: 600px) {
							margin-right: 30px;
						}
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
						@media screen and (max-width: 900px) {
							font-size: 60px;
						}
						@media screen and (max-width: 600px) {
							font-size: 50px;
						}
						@media screen and (max-width: 490px) {
							font-size: 30px;
						}
					}
				}
			}
		}
		.bottom-row {
			height: 60vh;
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

//NOTE FAQ List

export const FaqContainer = styled(motion.ul)`
	width: 900px;
	flex-direction: column;
	background: ${(props) => props.theme.lightColor};
	padding: 20px;
	border-radius: 10px;

	@media screen and (max-width: 900px) {
		width: 400px;
	}
`;

export const ContentWrapper = styled(motion.li)`
	background-color: ${(props) => props.theme.color};
	padding: 20px;
	margin-bottom: 20px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 10px;
`;

export const TextWrapper = styled.div`
	width: 100%;
	margin-top: 12px;
	display: flex;
	color: ${(props) => props.theme.Darkcolor};
	justify-content: center;
	align-items: center;
`;

export const TextContainer = styled(motion.div)``;

export const FaqMain = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 80px;
`;

export const IconWrapper = styled.div`
	font-size: 2rem;
	vertical-align: center;
	align-items: center;
	margin-right: 20px;
	color: ${(props) => props.theme.contrastDark};
`;

export const QuestWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: ${(props) => props.theme.contrastDark};
`;

export const HyperLink = styled(Link)`
	color: ${(props) => props.theme.contrastDark};
	text-decoration: none;
	z-index: 3;
	margin-left: 4px;

	&:hover {
		transform: scale(1.1);
		transition: all 0.05s ease-in-out;
	}
`;
