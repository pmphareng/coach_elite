import React, { createContext } from 'react';
import styled from 'styled-components';
import SideMenu from '../components/SideNav';
import Programs from './programs';
import Feedback from './feedback';
import Swipe from '../components/Swiper';

const index = () => {
	return (
		<>
			<Layout className='container'>
				<SideMenu />
				<SectionsContainer>
					<section id='programs'>
						<Programs />
					</section>
					<section id='client-feedback'>
						<Feedback />
					</section>
				</SectionsContainer>
			</Layout>
		</>
	);
};

export default index;

const SectionsContainer = styled.div`
	overflow: hidden;
`;

const Layout = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-gap: 2em;
	position: relative;

	@media screen and (max-width: 767px) {
		display: block;
	}
`;
