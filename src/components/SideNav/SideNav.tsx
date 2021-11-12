import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { sectionsList } from './sections';
import { Button2 } from '../Button';
import { SectionLink } from './types';

type Props = {
	activeSection: string | null | undefined;
	handleClick: (id: string) => void;
};

const SideNav = ({ activeSection, handleClick }: Props) => {
	return (
		<div>
			<NavContainer>
				<NavList>
					{sectionsList.map((section: SectionLink, key) => (
						<li key={key}>
							<NavLink
								onClick={() => handleClick(section.id)}
								className={activeSection === section.id ? 'active' : ''}
							>
								{section.name}
							</NavLink>
						</li>
					))}
				</NavList>
				<Button2>Subscribe to Tristan</Button2>
			</NavContainer>
		</div>
	);
};

export default SideNav;

const NavContainer = styled.div`
	position: sticky;
	top: 100px;
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

const NavList = styled.ul`
	text-decoration: none;
	list-style-type: none;
	color: #fafafa;
	margin-bottom: 4.3em;
	padding: 0;
	line-height: 1.94em;
	margin-top: 0;
`;

const NavLink = styled.a`
	display: flex;
	align-items: center;
	transition-duration: 200ms;
	font-size: 12.8px;
	line-height: 2.6em;
	text-transform: uppercase;
	white-space: nowrap;
	cursor: pointer;
	opacity: 0.2;

	&:hover {
		opacity: 0.5;
	}

	&.active {
		opacity: 1;
	}
`;
