import styled, { css } from 'styled-components';

const Active = css`
	width: 100%;
	background: ${(props) => props.theme.lightColor};
	transition: width 0.2s;
`;

const Item = css`
	width: 100%;
	height: 100%;
	background: ${(props) => props.bgColor};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	border-bottom: 2px solid ${(props) => props.theme.color};
`;

export const NavContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0 20px;
	margin-bottom: 20px;
	justify-content: space-evenly;
	color: ${(props) => props.theme.color};
`;

export const NavItem = styled.div`
	cursor: pointer;
	&::after {
		width: 0;
		content: '';
		display: block;
		height: 3px;
		${(props) => (props.active ? Active : null)}
	}

	&:hover {
		color: ${(props) => props.theme.contrastColor};
		transition: width 0.3s;
	}
`;

export const GridContainer = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	column-gap: 20px;
	row-gap: 25px;
	align-items: center;
	justify-items: center;
	position: relative;
`;

export const ItemA = styled.div`
	grid-column: ${(props) => props.column};
	grid-row: ${(props) => props.row};
	${Item}
`;

export const CoverWrapper = styled.div`
	border: 2px solid white;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	&:before {
		content: '';
		float: left;
		padding-top: 100%;
	}
`;

export const TitleWrapper = styled.div`
	padding: 20px 0;
`;

export const TrackTitle = styled.h2`
	color: white;
	text-align: center;
	letter-spacing: 0.035em;
	text-transform: uppercase;
	font-weight: bolder;
	-webkit-text-stroke: 2px;
	text-align: start;
	font-size: 22px;
`;

export const SubTitleWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 10px 0;
`;

export const SubTitle = styled.h4``;
