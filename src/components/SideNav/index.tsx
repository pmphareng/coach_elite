import React, { useEffect, useState } from 'react';
import SideNav from './SideNav';

const Index = () => {
	const [activeSection, setActiveSection] = useState<string | null>();

	const updateNav = () => {
		let sections = document.querySelectorAll('section');
		for (var i = 0; i < sections.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = sections[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
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
