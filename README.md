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


