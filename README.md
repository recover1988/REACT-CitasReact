# Citas React

Para leventar la aplicacion:

```
npm run dev
```

## Que es un JSX?

Javascritp Syntax Xtension. Lenguaje de templates con todas las funciones de JS para React.
Una vez creado el bundle todo pasa a ser JS.

## Reglas

Todas las etiquetas tienen apertura y cierre y las de solo apertura finalizan con cierre como:

```
 <link />
 <img />
 <input />
```

Cada componente debe tener un return y commo maximo un elemento con el nivel mas alto del arbol de elementos.
Este puede ser div o fragments.

## JS con HTML en JSX

Antes del return se puede crear funciones o validaciones. Estas se pueden colocar en expresiones con las llaves {} para que sea tratado como JS en el return.
Dentro de las llaves se pueden colocar ternarios, para asi ejecutarlos, no se puede utilizar condicionales como if.

## Componente

Se puede crear varios componentes en un mismo archivos pero es mejro hacer lo en archivos separados.
Los archivos de componentes deben empezar en mayuscula, y tener la extension en `.jsx` asi lo requiere `vite`.
Para mostrarlo hay que importarlo:

```
import Header from "./components/Header";

function App() {

	return (
		<div className="App">
			<h1>Hola mundo</h1>
      <Header />
		</div>
	);
}

export default App;
```

Se puede crear compnenetes usando los snippeds como

```
rafce
rfce
rcc
```

## Escribir CSS en React

Existen muchas formas de escribir CSS incluso frameworks te dan componentes personalizables.
Algunas son:

```
CSS Plano
Framework CSS
Modulo CSS
Componentes
SASS
Styled Components
```

## Instalar Tailwind

Intalar:

```
npm install -D tailwindcss postcss autoprefixer
```

Luego hay que crear los archivos de configuracion:

```
npx tailwindcss init
```

Luego en el `index.css` hay que agregar dependencias de tailwind:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

En el `tailwind.config.js` tenemos que agregas los paths de los archivos que van a usar tailwind:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

Que son el index.html y todos los archivos dentro de `src` que tengan extension `.jsx`

## Extensiones para Tailwind

Son:
Tailwind Intellsense
CSS Peek

### Tips

- `md:` media query para pantallas medianas.
- `lg:` large query para pantallas grandes.
- `transition-all` para agregar animacion.
- `font-black` para agregar ancho a las letras.
- En las etiquetas label usar el HTMLfor para linkearlo con el input atraves del id, esto sirve para dar mayor accesibilidad.

- `overflow-y-scroll` para activar las scroll bar en y

### tailwind scrollbar

Para modificar los colores y grosor de la barra de scroll usar el:

```
yarn add -D tailwind-scrollbar
or
npm install --save-dev tailwind-scrollbar

Add it to the plugins array of your Tailwind config.
plugins: [
    // ...
    require('tailwind-scrollbar'),
],
```

# REACT HOOKS

## Que son?

Es una api sencilla que permite crear todo tipo de aplicaciones con estos, estan disponibles desde la version 16, previo a ello se usaban clases para crear y modificar el estado, con los hooks no es necesario.
Estos se dividen en basicos y adicionales.

## Categorias de Hooks

Basicos:

- useState
- useEffect
- useContext
  Adicionales:
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

Tambien se puede crear propios hooks,de esta forma se puede separar el codigo en funciones reutilizables.
