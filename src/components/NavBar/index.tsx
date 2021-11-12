import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';

const Index = () => {
	const [bgColor, setBgColor] = useState('rgb(23, 26, 28)');

	useEffect(() => {
		// initiate the event handler
		window.addEventListener('scroll', changeNavbarColor);

		return function cleanup() {
			window.removeEventListener('scroll', changeNavbarColor);
		};
	}, []);

	const changeNavbarColor = () => {
		const headerDiv = document.querySelector('header');
		const headerHeight = headerDiv?.clientHeight;

		let ratio = headerHeight ? window.scrollY / headerHeight : 1;

		if (ratio > 0 && ratio < 1) {
			setBgColor(`rgb(23, 26, 28, 0`);
		} else if (ratio >= 1) {
			setBgColor('rgb(23, 26, 28)');
		}
	};
	return (
		<>
			<NavBar bgColor={bgColor} />
		</>
	);
};

export default Index;
