import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';
import { linkList } from './linkList';

interface Props {
	bgColor: string;
}

const NavBar = ({ bgColor }: Props) => {
	return (
		<NavWrap id='header'>
			<nav id='nav' style={{ background: bgColor }}>
				<NavbarContainer>
					<Link href='/' passHref>
						<NavBrand>
							<Image src={Logo} alt='logo' />
						</NavBrand>
					</Link>

					<NavMenu>
						{linkList.map((link, key) => (
							<Link href={`#${link.id}`} key={key} passHref>
								<NavLink>{link.name}</NavLink>
							</Link>
						))}
					</NavMenu>
					<MobileBtn>
						<NavLink>/Menu</NavLink>
					</MobileBtn>
				</NavbarContainer>
			</nav>
		</NavWrap>
	);
};

export default NavBar;

const NavWrap = styled.header`
	position: sticky;
	top: 0px;
	z-index: 10;
	transition: background 0.01s;
`;

const NavbarContainer = styled.div`
	display: flex;
	margin-right: auto;
	margin-left: auto;
	padding: 0.7em 8.33vw;
	justify-content: space-between;
	width: 100%;

	@media screen and (max-width: 767px) {
		padding: 0.7em 20px;
	}
`;

const NavBrand = styled.a`
	display: flex;
	align-self: flex-start;
	text-decoration: none;
	width: 13.85em;
	height: 2.86em;
	@media screen and (max-width: 992px) {
		width: 222px;
		height: auto;
	}

	@media screen and (max-width: 767px) {
		width: 124.24px;
		height: auto;
	}
`;

const MobileBtn = styled.div`
	display: none;
	& a {
		margin: 0;
	}
	@media screen and (max-width: 991px) {
		display: flex;
		text-transform: uppercase;
	}
`;

const NavMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 992px) {
		display: none;
	}
`;

const NavLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	transition-duration: 200ms;
	font-size: 12.8px;
	line-height: 2;
	text-transform: uppercase;
	white-space: nowrap;
	margin-right: 2.5em;
`;
