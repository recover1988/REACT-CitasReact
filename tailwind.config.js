/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		colors: {
		color1:'#ffffff',	
		color2:'#d9d9d9',	
		color3:'#3c6e71',	
		color4:'#284b63',	
		color5:'#353535',	
		color6:'#ff595e',	
		},
		extend: {},
	},
	plugins: [],
};
