import styled from 'styled-components';

const Header = styled.h1`
	font-family: Industry, sans-serif;
	font-size: 3.97em;
	line-height: 1.32;
	font-weight: 700;
	text-transform: uppercase;
	color: #e94811;
	margin: 0 0 0.42em 0;

	@media screen and (max-width: 767px) {
		font-size: 38.25px;
	}
`;

const Header2 = styled.h2`
	font-size: 2.54em;
	font-family: Industry, sans-serif;
	line-height: 1.32;
	font-weight: 700;
	text-transform: uppercase;
	color: #e94811;
	margin: 0;

	@media screen and (max-width: 767px) {
		font-size: 29.03px;
	}
`;

export { Header, Header2 };
