import React from 'react';
import { Header2 } from '../components/Header';
import Card from '../components/ProgramCard';
import styled from 'styled-components';

const Programs = () => {
	return (
		<Container>
			<Header2>Programs by Tristian Marais</Header2>
			<CardsWrapper>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardsWrapper>
		</Container>
	);
};

export default Programs;

const Container = styled.div`
	margin-bottom: 10.5em;
`;

const CardsWrapper = styled.div`
	display: grid;
	margin-top: 3.5em;
	grid-gap: 1rem;

	justify-items: center;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;
