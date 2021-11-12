import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

const hero = () => {
	return (
		<HeroContainer className='vertical-align-center container'>
			<Header>Tristan Marais</Header>
			<CoachSubTitle>
				Subscribe for <span>R400p/m</span>
				<br />
				For unlimited access to 6 programs
			</CoachSubTitle>

			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco
			</Paragraph>
			<Button>Subscribe to Tristan</Button>
		</HeroContainer>
	);
};

export default hero;

const HeroContainer = styled.div`
	padding-top: 12.5em;
	padding-bottom: 13.54em;
	position: relative;

	@media screen and (max-width: 767px) {
		padding-top: 6em;
		padding-bottom: 5em;
	}

	@media screen and (max-width: 991px) {
		padding-top: 6.77em;
		padding-bottom: 0em;
	}
`;

const CoachSubTitle = styled.h1`
	font-family: Industry, sans-serif;
	color: #fafafa;
	font-size: 1.4em;
	text-transform: uppercase;
	font-weight: 700;
	line-height: 1.32;
	letter-spacing: 0.06em;
	margin: 0 0 0.84em 0;
	& span {
		color: #e94811;
		text-transform: none;
	}

	@media screen and (max-width: 767px) {
		font-size: 18px;
		max-width: 450px;
	}
`;

const Paragraph = styled.p`
	color: #fafafa;
	max-width: 40.52em;
	margin-top: 0em;
	margin-right: 0em;
	margin-left: 0em;

	@media screen and (max-width: 767px) {
		font-size: 14px;
		text-align: center;
		max-width: 327px;
	}
`;
