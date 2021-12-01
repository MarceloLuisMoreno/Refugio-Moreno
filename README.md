![Refugio Tienda Deco](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/refugio.png?raw=true)
# REFUGIO Tienda Deco 
## _Proyecto e-commerce de una tienda de objetos de decoración._
> Proyecto final E-commerce, Curso React-Js de [CoderHouse](https://www.coderhouse.com/). Año 2021 

## Contenido
- Este proyecto (actuanmente en desarrollo) tiene una única rama, main.
- Incompleto para comercializar.

## Objetivos y Características

> El objetivo del proyecto es crear una Tienda  E-commerce  (un sistema de venta de productos con gestión de 
> su base de datos a través de Firebase), en una single-page application (SPA), o aplicación de página única. 
>Donde se puede navegar por los distintos productos (también sobre sus categorías)
>e ir a sus detalles. Desde el detalle se puede ver la descripción, foto y precio del producto y permite 
>agregarlos al carrito. También se pueden ver y modificar los elementos del carrito, para luego finalizar la compra de
>los elementos cargados al mismo a través del llenado de un formulario de compra. Y finaliza guardando la orden
>de compra (con todos sus productos más la fecha de compra) en una base de datos del proyecto, alojada en Firebase.


## Tenología

Este proyecto se está desarrolando en React-Js:

- [React-Js](https://create-react-app.dev/) - La App fue creada con Create React App
- Utiliza una serea de librerías externas (detalladas en Complementos).

## Instalación

Refugio Tienda Deco requiere [Node.js](https://nodejs.org/en/) para ejecutarse.

Instale las dependencias y devDependencies e inicie el servidor.

```sh
$ cd coderhouse-ecommerce
$ npm install

```

Para clonar este repositorio debe seguir las siguientes instrucciones:

1 - Abre el Visual Studio Code

2 - Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.

3 - Escribe `git clone` y luego pega la siguiente URL `https://github.com/MarceloLuisMoreno/Refugio-Moreno.git`

4 - Presiona `Enter` para crear tu clon local.

Por mayor información: `https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository`

## Complementos

Una vez clonado el repositorio, para que el proyecto se ejecute correctamente, se deben instalar las siguientes librerias:

`react-router.dom`  : Es una librería que nos permite el enrutamiento y navegabilidad entre los diferentes componentes de nuestra SPA. Para instalarlo se debe ejecutar en la terminal lo siguiente:

```sh
npm install react-router-dom
```

`•	Firebase`  : Libreria de servicios de Google, que nos facilita y permite desarrollar el front-end, sin preocuparnos del back-end. Permite satisfacer las distintas necesidades de esta aplicación y su ciclo de desarrollo, dentro de las cuales encontramos: Seguridad y autenticación, Almacenamiento y consulta, Hosting, Monitoreo, Functions y más.

`•	react-bootstrap 5.1.1`  : Es un framework front-end con el que le damos los diferentes estilos a la SPA.

```sh
npm install react-bootstrap@next bootstrap@5.1.3
```
`•	bootstrap 5.0`  : Kit de herramientas de código abierto de front-end, con el cual se le da estilo al proyecto. El mismo está inyectado a través de un link agregado a index.html

```sh
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

`•	bootstrap icons`  : Biblioteca de íconos de código abierto, de alta calidad y gratuitos. Inyectados al proyecto a través de un Link.

```sh
<link	rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"	/>
```

`•	react-awesome-reveal`  : Biblioteca de React que nos permite la animación de los componentes del proyecto, de manera fácil y eficiente. Para agregarlo, ejecute el siguiente comando desde la raíz del proyecto.

```sh
npm install --save react-awesome-reveal
```

## Ejecución

Para ejecutar este proyecto simplemente escriba y ejecute en su consola de Visual Studio Code:

```sh
npm start
```
>Esto hará que la aplicación se ejecute en modo de desarrollo.
>Abra http: // localhost: 3000 para verlo en el navegador.


## Estado del Proyecto

Actualmente cuenta con los siguientes Componentes: 
- `HomeContainer` : componente de bienvenida.
- `UsContainer` : componente donde se detalle que es Refugio Tienda Deco.
- `GalleryContainer` : componente con una galería de imágenes.
- `ContactContainer` : componente con información de contacto de Refugio.
- `NavBar` : barra de navegación de la SPA.
- `ItemListContainer` : En donde mostramos el catálogo, en conjunción con los compomentes `ItemList` e `Item`.
- `ItemDetailContainer` : Para mostrar la información del item seleccionado `ItemDetail`, en  dónde ingresaremos la cantidad y nos permite la opción de agregar al carrito `ItemCount`.
- `CardWidget` : componente para mostrar en la barra de navación la cantidad de productos seleccionados (en desarrollo).
- `getFirestone` : componente que nos vincula y permite la configuración de la base de datos que usa el Proyecto en Firebase.
- `Cart` : nos devuelve el listado de los productos agregados al carrito `CartList` , indicando el total del mismo. Si el carrito está vacío el componente `CartEmpty` no solicita ir a comprar. El comopente `CartList` permite la elimación de productos y da la opción de Generar la orden de compra, a través del llenado del formulario de compra `CartForm`.
- `CartContext` : que contiene todas las funcionalidades asociadas al carrito de compras.
- `ShowError` : modal para mostrar los errores surgidos durante la ejecución del proyecto.

## Demo del Proyecto
- [REFUGIO Tienda Deco](https://xenodochial-varahamihira-6b59cf.netlify.app/)

## Avance del Proyecto

Vista del proyecto en ejecución:

Home
![home](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/home.png?raw=true)

Nosotros
![productos](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/nosotros.png?raw=true)

Galería
![galeria](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/galeria.png?raw=true)

Catálogo:
![catalogo](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/catalogo.png?raw=true)

Item:
![item](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/item.png?raw=true)

Carrito Compra:
![carrito](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/carrito.png?raw=true)

Formulario Compra:
![formulario](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/formularioCompra.png?raw=true)

Contacto:
![contacto](https://github.com/MarceloLuisMoreno/Refugio-Moreno/blob/main/public/assets/avanceProyecto/contacto.png?raw=true)
## Licencia

- [MLM](https://www.linkedin.com/in/marceloluismoreno/)
Marcelo Luis Moreno

**Software Libre!!!**
