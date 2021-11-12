import React from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import TristanPic from '../assets/cardPic.png';

const Card = () => {
	return (
		<CardContainer>
			<Image src={TristanPic} alt='tristan' />
			<CardContent>
				<Price>
					<p>
						R<span>400</span>p/m
					</p>
				</Price>
				<CardTitle>
					Powerlifting pro <span> (16 weeks)</span>
				</CardTitle>
				<CoachName>Tristan Marais</CoachName>
				<PillContainer>
					<Pill>Intermediate</Pill>
					<Pill>Strength</Pill>
					<Pill>Basic</Pill>
				</PillContainer>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco
				</Paragraph>
			</CardContent>
		</CardContainer>
	);
};

export default Card;

const CardContent = styled.div`
	padding: 1em;
	position: relative;
`;

const Price = styled.div`
	position: absolute;
	padding: 10px;
	background: #e9481160;
	border-radius: 6px;
	top: -24px;
	p {
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 16px;
		margin: 0;
		letter-spacing: 0.06em;

		span {
			font-size: 18px;
		}
	}
`;

const CardContainer = styled.div`
	background-color: #25292c;
	color: white;
	border-radius: 16px;
	max-width: 350px;
`;

const CardTitle = styled.h3`
	font-family: Industry, sans-serif;
	line-height: 1.32;
	font-weight: 700;
	text-transform: uppercase;
	// letter-spacing: 0.04em;
	font-size: 1.1em;
	& span {
		font-size: 0.6em;
		font-weight: 400;
		line-height: 0.5;
	}
`;

const CoachName = styled.h4`
	font-weight: 300;
	letter-spacing: 0.04em;
`;

const PillContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Pill = styled.a`
	margin-right: 0.5em;
	padding: 8px;
	align-items: center;
	border-style: solid;
	border-width: 1px;
	border-color: #e94811;
	border-radius: 10px;
	font-size: 0.8em;
	font-weight: 300;
	letter-spacing: 0.04em;
`;

const Paragraph = styled.p`
	font-size: 0.83em;
	letter-spacing: 0.04em;
`;
