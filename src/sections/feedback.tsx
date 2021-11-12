import React from 'react';
import { Header2 } from '../components/Header';
import Card from '../components/ProgramCard';
import styled from 'styled-components';
import SwipeDiv from '../components/Swiper';

const Feedback = () => {
	return (
		<>
			<Header2>What our clients have to say</Header2>

			<SwipperContainer>
				<AbsSwipper>
					<SwipeDiv />
				</AbsSwipper>
			</SwipperContainer>
		</>
	);
};

export default Feedback;

const SwipperContainer = styled.div`
	position: relative;
	margin-top: 5em;
	height: 230px;
`;

const AbsSwipper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`;
