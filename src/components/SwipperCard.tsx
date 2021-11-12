import React from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import BeforePic from '../assets/before.png';
import AfterPic from '../assets/after.png';

const SwipperCard = () => {
	return (
		<CardContainer>
			<CardLeft>
				<div>
					<ParagraphSmall>Before</ParagraphSmall>
					<Image src={BeforePic} alt='before' />
				</div>
				<div>
					<ParagraphSmall>After</ParagraphSmall>
					<Image src={AfterPic} alt='after' />
				</div>
			</CardLeft>
			<div>
				<ClientName>Janine Saunders</ClientName>
				<ParagraphSmall>Cape Town, South Africa</ParagraphSmall>
				<ClientInfo>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam,{' '}
				</ClientInfo>
			</div>
		</CardContainer>
	);
};

export default SwipperCard;

const ClientName = styled.p`
	color: #e94811;
`;

const ParagraphSmall = styled.p`
	font-size: 0.8em;
	font-weight: 300;
	margin: 0;
`;

const ClientInfo = styled.p`
	font-size: 0.83em;
	letter-spacing: 0.04em;
`;

const CardContainer = styled.div`
	padding: 0.5em;
	display: grid;
	grid-gap: 1em;
	grid-template-columns: 3fr 4.8fr;
	background-color: #25292c;
	color: white;
	border-radius: 16px;
	max-width: 380px;
	min-height: 165px;

	@media screen and (max-width: 480px) {
		width: 90vw;
	}

	@media screen and (max-width: 992px) {
		width: 350px;
	}
`;

const CardLeft = styled.div`
	position: relative;
	display: grid;
	text-align: center;

	& div:nth-child(1) {
		position: absolute;
		left: 0%;
		right: 45%;
		top: 0%;
		bottom: 20%;
		border-radius: 8px;
	}

	& div:nth-child(2) {
		position: absolute;
		left: 45%;
		right: 0%;
		top: 20%;
		bottom: 0%;
		border-radius: 8px;
	}
`;
