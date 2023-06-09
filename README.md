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

## Que es el STATE o estado

Es basicamente una variable con informacion relevante, que puede perteneces solo en el componente o se puede compartir.

```
import {useState} from "react"

const [cliente, setCliente] = useState({})
```

React reacciona en base al state, este se renderiza y actualiza cuando este cambia, siempre se modifica con el set.

## Reglas de los Hooks

Se deben colocar antes del return y antes de las funciones.
No se debe de colocar dentro de condicionales y tampoco dentro de returns.
Siempre deben haber la misma cantidad de hooks no se pueden tener de manera condicional.
No pueden ir por fuera del componente.

## Eventos

Es muy similar a los de javascript, usan camelCase, todos los eventos en js estan disponibles en react.
Sintaxis:

```
HTML:
<button onclick="descargarPedido90()" >
  Descargar Pedidos
</button>

JSX:
<button onClick={ descargarPedido90() } >
  Descargar Pedidos
</button>
```

## Props

Es la forma de pasar variables o funciones de otros componentes. Se pasan del padre al hijo, nunca del hijo al padre.
Sintaxis:

```
<Header
 nombreProp={datos o funciones}
/>
```

Para acceder a los datos desde el hijo usamos la palabra reservada `props` y el nombre de la variable o funcion que se le paso, o tambien podemos hacer un destructuring con los nombres de las variables que necesitamos.

### Pasar valores de hijo a padre

Para estos podemos usar una funcion que tome un valor del hijo y la ejecuta o use en el padre.

## Modificar el state

Para modificar el estado siempre hay que usar metodos que no modifiquen el valor original:

```
setPacientes((state) => [...state, datos]);
```

Con esta funcion tomamos el state y le hacemo una copia, y le agregamos el objeto.

## Pasar props mediante children

La palabra children es una reservada y se usa para pasar cualquier tipo de elemento hacia el hijo.

```
{error && <Error><p>Todos los campos son obligatorios</p></Error>}
```

Y en el componente `Error` podemos usarla de la siguiente manera:

```
const Error = ({ children }) => {
 return (
  <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg">
   {children}
  </div>
 );
};

export default Error;
```

La ventaja de esto es que se le puede pasar mas codigo html.

## Generar una lista dinamicamente

Los elementos deben tener id unicos para que react pueda renderizar correctamente para ello creamos una funcion que genera id aleatorios:

```
 const generarId = () => {
  const random = Math.random().toString(36).substring(0, 2);
  const fecha = Date.now().toString(36);
  return random + fecha;
 };
```

## useEffect

Siempre es un callback, que es ejecuta cuando un state cambia o cuando el componenete esta listo.
Al ejecutarse cuando el componente esta listo, se coloca las consultas a API o LocalStorage.
Se puede pasar una dependecia para que se actualize o ejecute cuando cambia la dependencia.

```
import { useEffect } from "react";

useEffect( () => {
 console.log('El Componente esta listo');
}, [] )
```

### Usos

Algunos de sus usos son:

1. Escuchar los cambios de una propiedad en alguna parte del State.

2. Se puede tener multiples useEffect.

3. Sin dependencias se ejecuta una vez.

## Comprobar si un Objeto esta vacio

Se puede hacer con `Object.keys.length > 0` esto resuelve en un booleano.

## LocalStorage
