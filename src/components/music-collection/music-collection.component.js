import React, { useState } from 'react';
import {
	CoverWrapper,
	GridContainer,
	ItemA,
	NavContainer,
	NavItem,
	SubTitle,
	SubTitleWrapper,
	TitleWrapper,
	TrackTitle,
} from './music-collection.styles';

const items = [
	{
		column: 1,
		row: 1,
		title: 'Kryptogram - Sneak Away With Me',
		image: 'Cover',
		genre: 'Disco',
		bpm: '128',
	},
	{
		column: 2,
		row: 1,
		title: 'Under constructions 🚧',
		image: 'Cover',
		genre: 'Soulful House',
		bpm: '125',
	},

	{
		column: 3,
		row: 1,
		title: 'Under constructions 🚧',
		image: 'Cover',
		genre: 'House',
		bpm: '125',
	},
	{
		column: 4,
		row: 1,
		title: 'Under constructions 🚧',
		image: 'Cover',
		genre: 'House',
		bpm: '125',
	},
	{
		column: 1,
		row: 2,
		title: 'Under constructions 🚧',
		image: 'Cover',
		genre: 'House',
		bpm: '125',
	},
	{
		column: 2,
		row: 2,
		title: 'Under constructions 🚧',
		image: 'Cover',
		genre: 'House',
		bpm: '125',
	},
	{
		column: 3,
		row: 2,
		title: 'Under constructions 🚧',
		image: 'Cover',
		genre: 'House',
		bpm: '125',
	},
	{
		column: 4,
		row: 2,
		title: 'Under constructions 🚧',
		image: 'Cover',
		genre: 'House',
		bpm: '125',
	},
];

const Collection = ({ active, bgColor }) => {
	return (
		<GridContainer>
			{items.map((item, index) => (
				<ItemA key={index} bgColor={bgColor} column={item.column} row={item.row}>
					{
						// NOTE Cover
					}
					<CoverWrapper>{item.image}</CoverWrapper>
					{
						// NOTE Track title
					}
					<TitleWrapper>
						<TrackTitle>{item.title}</TrackTitle>
					</TitleWrapper>
					{
						// NOTE Genre, BPM
					}
					<SubTitleWrapper>
						<SubTitle>{item.genre}</SubTitle>
						<SubTitle>{item.bpm}</SubTitle>
					</SubTitleWrapper>
				</ItemA>
			))}
		</GridContainer>
	);
};

const MusicCollection = () => {
	const [state, setState] = useState({
		status: 'active',
		bgColor: 'black',
	});
	const { status, bgColor } = state;

	const handleClick = (name) => {
		switch (name) {
			case 'showA':
				setState({ status: 'active', bgColor: 'black' });
				break;
			case 'showB':
				setState({ status: 'activeB', bgColor: 'darkgoldenrod' });
				break;
			case 'showC':
				setState({ status: 'activeC', bgColor: 'darkgreen' });
				break;
			case 'showD':
				setState({ status: 'activeD', bgColor: 'darkred' });
				break;
			default:
				setState({ status: 'active' });
		}
	};

	return (
		<React.Fragment>
			<NavContainer>
				<NavItem active={status === 'active'} onClick={() => handleClick('showA')}>
					Genre1
				</NavItem>
				<NavItem active={status === 'activeB'} onClick={() => handleClick('showB')}>
					Genre2
				</NavItem>
				<NavItem active={status === 'activeC'} onClick={() => handleClick('showC')}>
					Genre3
				</NavItem>
				<NavItem active={status === 'activeD'} onClick={() => handleClick('showD')}>
					Genre4
				</NavItem>
			</NavContainer>
			<Collection active={status} bgColor={bgColor} />
		</React.Fragment>
	);
};

export default MusicCollection;
