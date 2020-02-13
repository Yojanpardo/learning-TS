# TypeScritp
es un lenguaje que se transpila a JavaScript, se escribe de forma muy similar y su paradigma es igual excepto porque en TS es tipado, quiere decir que las variables, clases, metodos, etc. se pueden definir con un determinado tipo de dato, objeto, metodo, etc. lo cual le quita flexibilidad pero le suma robustéz.

# Preparando nuestro proyecto
Vamos a utilizar Angular con TypeScript y firebase para la elaboración de nuestro proyecto.

## Qué es Angular?
Desarrollado por Google, Angular es más que un framework, es una plataforma que nos da la posibilidad de desarrollar aplicaciones web y aplicaciones móviles, es un framework de estructura que nos va a brindar funcionalidades para extender el template de nuestra aplicación.

### Ventajas:
* Rapidez
* Mayor estructura y control sobre el proyecto
* SPA ()
* Gran comunidad

### Angular CLI y VS Code
Es una interfaz de línea de comandos de angular con la cual desde una terminal puedes crear aplicaciones, generar componentes, montar un servidor local, y testear el proyecto.  
Snipets:  
* angular 8 snnipet
* bracket pair colorized y el 2
* tslint
* eslint
* javascript ec6 code snipets
* prettier

### Preparando el entorno de desarrollo
primero debemos instalar Node.js, luego el cli de angular y finalmente creamos un nuevo proyecto 

~~~sh
sudo apt install npm
npm install -g @angular/cli
ng new typescript-platzi
~~~

## Firebase
Es una base de datos no relacional provista por Google (SaaS) que nos ayuda en la creación de un sitio web que tenga persistencia de datos y no es necesario tener un backend para ello, Podemos tener bases de datos RealTime. podemos usarlo independientemente del lenguaje de programacion.  
Para poder utilizarlo debemos debemos instalar las siguientes dependencias:  
~~~sh
npm i -s firebase angularfire2
# O
npm i firebase angularfire2
# Cualquiera sirve
~~~

## Diferencias entre React, Angular y Vue

### Angular
Ideal para proyectos grandes, robustos y complejos. Al usar TypeScript da un gran control sobre el proyecto y le da robustez y anglular Cli es muy completo

Contras:  
* al ser tan robusto su curva de aprendizaje es muy elevada
* Se genera código repetitivo por lo tanto los archivos son muy grandes

### React
pros:  
* Tiene una gracn comunidad
* Es muy flexible
* Cuenta con el respaldo de Facebook  
Contras:  
* Existen miles de posibles soluciones para el mismo problema

### Vue
* Basado en componentes
* es muy nuevo y su comunidad es pequeña
* curva de aprendizaje sencilla

## Presentación de la aplicación
Es una aplicación para el manejo de jugadores de un equipo de futbol en los cuales añadiremos jugadores a determinadas posiciones. se pueden crear, eliminar, actualizar y listas los jugadores.


## Servicios 
La idea es crear un archivo para cada servicio dentro de la carpeta de servicios. Un servicio es aquello que nos da una funcionalidad al proyecto, en este caso crearemos un servicio para conectarnos con firebase.  
~~~sh
ng generate service [nombre del servicio]
~~~  

los servicios hay que ponerlos en el arreglo de proveedores de app.module.ts, todos componentes del módulo pueden hacer uso del servicio.