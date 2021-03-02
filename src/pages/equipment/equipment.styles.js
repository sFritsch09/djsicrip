import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	overflow-y: ${({ scroll }) => (scroll ? 'auto' : 'hidden')};
	width: 100%;
	height: 100%;
`;

export const Section = styled.div`
	justify-content: center;
	position: relative;
	width: 100%;
`;

export const Section2 = styled.div`
	justify-content: center;
	position: relative;
	width: 100%;

	@media screen and (min-width: 1800px) {
		padding-top: 80px;
	}
	@media screen and (max-width: 1600px) {
		padding-top: 0px;
	}
	@media screen and (max-width: 800px) {
		padding-top: 0px;
	}
`;
export const Section3 = styled.div`
	justify-content: center;
	position: relative;
	width: 100%;

	@media screen and (min-width: 1800px) {
		padding-top: 1px;
	}
	@media screen and (max-width: 800px) {
		padding-top: 0px;
	}
`;
export const Spacer = styled.div`
	width: 100%;
	height: 30px;
`;
