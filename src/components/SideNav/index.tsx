import React, { useEffect, useState } from 'react';
import SideNav from './SideNav';

const Index = () => {
	const [activeSection, setActiveSection] = useState<string | null>();

	const updateNav = () => {
		let sections = document.querySelectorAll('section');
		for (let i = 0; i < sections.length; i++) {
			let windowHeight = window.innerHeight;
			let elementTop = sections[i].getBoundingClientRect().top;
			let elementVisible = 150;

			console.log('windowHeight', windowHeight);
			console.log('elementTop', elementTop);
			if (elementTop > 0 && elementTop < windowHeight - elementVisible) {
				const sectionId = sections[i].getAttribute('id');
				setActiveSection(sectionId);
			}
		}
	};

	const handleClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', updateNav);

		return function cleanup() {
			window.removeEventListener('scroll', updateNav);
		};
	}, []);

	return (
		<>
			<SideNav activeSection={activeSection} handleClick={handleClick} />
		</>
	);
};

export default Index;
