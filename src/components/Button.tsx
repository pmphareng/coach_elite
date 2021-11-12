import styled from 'styled-components';

const Button = styled.a`
	position: relative;
	background: linear-gradient(71.48deg, #da0c1a -48.41%, #f8820a 84.47%);
	z-index: 1;
	padding: 20px 30px;
	align-items: center;
	border-style: solid;
	border-width: 1px;
	border-color: #e94811;
	border-radius: 5px;
	font-family: Industry, sans-serif;
	font-size: 13px;
	line-height: 2;
	font-weight: 500;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	margin: 1.8em 0;
	cursor: pointer;

	&:hover {
		background-image: linear-gradient(92.54deg, #da0c1a 0.73%, #f8820a 117.24%);
		transition: background 0.2s linear;
	}

	@media screen and (max-width: 767px) {
		font-size: 9.72px;
		padding: 15px 25px;
	}
`;

const Button2 = styled(Button)`
	position: absolute;
	padding: 1.2em 15px;

	text-align: center;
`;

export { Button, Button2 };
