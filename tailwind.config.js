/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		colors: {
		color1:'#e5e5e5',	
		color2:'#d9d9d9',	
		color3:'#247b7b',	
		color4:'#284b63',	
		color5:'#001219',	
		color6:'#ff595e',	
		},
		extend: {},
	},
	plugins: [require('tailwind-scrollbar')],
};
