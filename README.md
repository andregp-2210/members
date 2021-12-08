# Empezando con el proyecto
Primero instalar todas las dependencias.
## Scripts disponibles
### `npm start`
Iniciará la aplicación en modo desarrollo.\
Para verlo en el navegador [http://localhost:3000](http://localhost:3000)
## Explicación del proyecto
### Estructura de carpetas
A continuación explicaré un poco sobre la organización del proyecto
### `Assets`
Aquí se encuentran imágenes(en caso hubiese), estilos globales, animaciones, etc.
### `Components`
Podrá encontrar los componentes base en la carpeta src/Components.\
Dentro de esta ruta encontrará 2 tipos de componentes:\
 *Layout: Son los componentes que representan la arquitectura de una o múltiples páginas.\
*Ui: Son las piezas que formarán parte de la interfaz y con las que el usuario podrá interactuar directamente.
### `Context`
Para el manejo del estado se usa createContext y en esta carpeta se podrá encontrar todo lo relacionado al estado global.
### `Pages`
Son los contenedores principales que agrupan los componentes y que representan las vistas o rutas del sistema.
### `Utils`
Esta carpeta tiene como finalidad incluir todos los archivos que como su nombre indica sean de utilidad, por ejemplo archivos no relacionados a React.
### Comentarios finales

Usé algunas librerías para resolver funcionalidades concretas como:
- [X] Axios -> llamadas al servidor.
- [x] react-hook-form -> manejo y validación del formulario.
- [x] react-toastify -> para mostrar las notificaciones.
- [x] styled-components -> para el manejo de los estilos.

En lo personal decidí no usar ningún framework de diseño como podrían ser Mui, Chakra ui, etc. ya que las funcionalidades son muy puntuales.

En cuanto al tiempo de inactividad no estaba seguro de cuándo considerar que el usuario se encuentra inactivo, por lo que el timer sólo se reiniciará cuando el usuario realice una inserción de datos del formulario, si se desea validar el timer, en el archivo de contexto se encuentra la variable "timer" que puede ser usada en la interfaz para verse.


