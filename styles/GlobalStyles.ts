import { Cinzel, Inter } from 'next/font/google';
import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const cinzel = Cinzel({ weight: '700', subsets: ['latin'] });
export const interRegular = Inter({ weight: '400', subsets: ['latin'] });
export const interBold = Inter({ weight: '700', subsets: ['latin'] });

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	* {
		box-sizing: border-box;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	body {
		background-image: url("/assets/background.png");
		background-repeat: no-repeat;
		background-size: 100vw 100vh;
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button {
		font-family: ${cinzel.style.fontFamily};
		font-weight: ${cinzel.style.fontWeight};
		color: #CCCCCC;
	}

	b {
		font-weight: 700;
	}

	p,
	span,
	input,
	textarea {
		font-family: ${interRegular.style.fontFamily};
		font-weight: ${interRegular.style.fontWeight};
		color: #CCCCCC;
	}
	
	img {
		object-fit: none;
	}

	.object-cover {
		object-fit: cover;
		aspect-ratio: 2 / 1;
	}

	.object-cover-1-4 {
		object-fit: cover;
		aspect-ratio: 4 / 1;
	}

	/* Webkit Browsers */
	::-webkit-scrollbar {
		width: 8px; /* Width of the scrollbar */
	}

	::-webkit-scrollbar-track {
		background: #212121; /* Background of the scrollbar track */
	}

	::-webkit-scrollbar-thumb {
		background: #888; /* Color of the scrollbar thumb */
		border-radius: 6px; /* Rounded corners for the scrollbar thumb */
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555; /* Color of the scrollbar thumb when hovered */
	}

	.text-center {
		text-align: center;
	}

	.absolute {
		position: absolute;
	}
`;

export default GlobalStyle;
