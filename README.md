# Contenido de pill sobre arquitectura y diseño de aplicaciones con vanillajs

[Demo](https://merunga.github.io/product-list-vanillajs/)

## Getting started

- Instalar deps con `yarn`
- Servidor de desarrollo con `yarn start`
- Tests con `yarn test`
- Deploy a gh-pages con `yarn deploy`

## Pasos de la demo
- mostrar el producto terminado
- extraer historias de usuario 
- comenzar con el boilerplate listo en codesandbox

### Controlador
- explorar las historias de usuario y determinar cuales serian las funciones de `controller`
  - `productoCrear`
  - `productoIncStock`
  - `productoDecStock`
  - `productoEliminar`
  - `productosFiltrar`
- escribir los tests para cada funcion, explicar rapidamente el mock de utils

### Modelo
- Discutir la forma de debe tener el state

### Vista
- Comenzar con el mock estatico ya listo, tanto html como css
- Identificar los "bloques de la interfaz"(aka componentes)
- Extraer el html estatico a 2 archivos, uno para form y otro para lista y crear `view-controller`para hacer el `renderUI` on `window.load`
- Crear un array estatico de productos y generar dinamicamente la lista

### Modelo
- Crear store

### Vista-Controlador
- Crear event listener para el form
- Crear event listeners para los productos

### Vista
- crear un `renderList` independiente

Si hay tiempo implementar funcionalidad de filtrado:
- tests
- controller
- ui
- event-listener

### Model
- localstorage
