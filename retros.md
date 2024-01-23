## Equipo de Desarrollo

- Santiago (Líder del proyecto)
- Joaquin (Desarrollador principal)
- Martin (Diseñadora de interfaz)
- Javier (Desarrollador principal)

# Retrospectiva del Equipo 
 
-Sprint 1
-Sprint 2
-Sprint 3
-Sprint 4
-Sprint 5
-Sprint 6
-Sprint 7
-Sprint 8

## Resumen del Sprint 1
Al comenzar la cursada, al dividirse los grupos y conocernos como equipo entendimos que el desafio no seria facil.
Lo primero que hicimos fue charlar entre nosotros, 
plantearnos como hariamos con todo este desafio, 
hacernos una cuenta en GitHub personal, 
una cuenta para el equipo y armar un boceto basicamente.

## Resumen del Sprint 2
En este Sprint nos armamos un mini - MVC en donde comenzamos a generar todo un maquetado CSS para nuestro archivo HTML.
generamos un archivo con los detalles de producto, 
con sus respectivas imagenes llamadas desde public --> css --> .

## Resumen del Sprint 3
Una vez armado nuestro Modelo --> vista --> controlador,
Ahora nos encargamos de generar nuestro motor "templates" de .ejs con todas las vistas.

Modificar los métodos de los controladores para que utilicen el método render().

sitio actualizado con todas las vistas y rutas implementando EJS.

Crear, dentro de la carpeta views, la carpeta products y la carpeta users.
Usuarios: src/views/users/
Productos: src/views/products/

Dentro de la carpeta de views, separar las áreas
comunes del sitio. Como mínimo nos gustaría ver:
● Head (incluyendo todo el elemento <head></head>) → head.ejs
● Header (incluyendo barras de navegación) → header.ejs
● Footer (incluyendo todo el elemento <footer></footer>) → footer.ejs
● (Opcional) Otras secciones de su sitio que se repitan.

Página: creación y edición de productos
● Nombre del producto (name)
● Descripción (description)
● Imagen (image)
● Categoría (category)
● Colores (o cualquier otro campo similar como: tamaños, talles, etc)
● Precio (price)




## Resumen del Sprint 4

Durante esta iteración su foco será el de modificar el sitio para que muestre productos
dinámicamente a través de una fuente de datos (JSON).

En este Sprint separamos los temas por trello.
Tambien sufrimos una baja de un integrante Mauricio Guddemi.
Trabajamos por separado cada tema y pudimos encausar al final los temas juntos tambien.
Se descargo morgan, se hicieron los ruteos correspondientes, se subio morgan, multer, nos organizamos deacuerdo a MVC, entre otros items mas, y a pesar que tuvimos una baja de un integrante, y de los contratiempos.

Aqui hicimos:
Definir los campos necesarios para los productos y generar archivo JSON
● Identificador (ya hablaremos más sobre este campo): id
● Nombre del producto: name
● Descripción: description
● Imagen: image
● Categoría: category
● Colores (o cualquier otro campo similar como: talle): colors
● Precio: price

Definir los campos necesarios para los usuarios y generar archivo JSON
● Identificador: id
● Nombre: firstName
● Apellido: lastName
● Email: email
● Contraseña: password
● Categoría: category
● Imagen: image

CRUD de productos
Realizamos para el mismo siete rutas:
1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado

## Resumen del Sprint 5
Realizando Middlewares:
Nuestro foco fue el de modificar el sitio para que:
● Permita el flujo de registro, login y logout de usuarios.
● Permita recordar al usuario para que pueda ingresar sin volverse a loguear.
● Tenga rutas accesibles solo por huéspedes (visitantes sin login).
● Tenga rutas accesible solo por usuarios (que hicieron login).

Usuarios y middlewares
● Rutas: src/routes/users.js
● Controlador: src/controllers/usersController.js
● Vistas: src/views/users/
● Directorio para imágenes: public/images/users/
● Colección: src/data/users.json

Implementar el registro de usuarios
Tomando como referencia el formulario de creación de productos, implementar el
formulario de registro de usuarios.
● Deberá incluir los campos mínimos mencionados en el sprint anterior.
● Deberá permitir la subida de una imagen de perfil (con Multer).
● Deberá encriptar la contraseña ingresada por el usuario (con bcrypt.js).
● Deberá guardar los datos enviados en el archivo JSON de usuarios.

Implementar el login de usuarios
implementamos un formulario de login que:
● Incluya los campos de email y password.
● Verifique la información enviada por el usuario y según el caso:
○ Redireccione a la home o a la página de perfil en caso de éxito y muestre
los datos del usuario en algún lugar del sitio, como el header.
○ Redireccione nuevamente al login en caso de error.

## Resumen del Sprint 6
Nuestro foco será el de crear e implementar la base de datos de su sitio.
En la primera parte, van a estar pensando en la estructura que será necesaria para que la base
de datos cumpla con los requisitos del negocio: tablas, campos, tipos de datos y relaciones.
La segunda parte la van a pasar implementando la base de datos que crearon en la primera
parte, utilizando el módulo de Sequelize.

Diagrama de base de datos
● Usuarios (recuerden ver los campos sugeridos en el sprint 3).
● Productos (recuerden ver los campos sugeridos en el sprint 3).
● Tablas secundarias (según lo requiera su proyecto).
○ Para productos: categorías, marcas, colores, talles, etc.
○ (Opcional) Para usuarios: categorías.
● (Opcional) Carrito de compras.
○ Con detalle de quién hizo la compra, cantidad de ítems y precio total.
● (Opcional) Productos de cada carrito de compras.

Script de estructura
sentencias de SQL que crearán las tablas y sus relaciones.
● Deberá incluir la creación de la base de datos (create database...).
● Deberá incluir la creación de todas las tablas del sitio (create table...).
● Deberá incluir los tipos de datos de los campos y sus restricciones (primary keys,
(not) null, unique, default, etc).
● Deberá incluir las relaciones entre las diferentes tablas (foreign keys).

Script de datos
El script debería:
● Poblar la tabla de usuarios.
● Poblar la tabla de productos.
● Poblar las tablas secundarias (categorías, marcas, colores, talles, etc).
● (Opcional) Poblar la tabla de carrito de compras.
● (Opcional) Poblar la tabla de productos de carritos de compras.

Creación de carpeta Sequelize y archivos de
modelos:
La carpeta database deberá incluir:
● Los archivos de configuración para que Sequelize se conecte a la base de datos.
● Los archivos de modelos para representar las tablas de:
○ Usuarios.
○ Productos.
○ Tablas secundarias (categorías, marcas, colores, talles, etc).
○ (Opcional) Carrito de compras.
○ (Opcional) Productos de cada carrito de compras.
● Los modelos deben incluir todas las relaciones existentes en la base de datos.

¡CRUD!
Para productos:
○ Crear
○ Editar
○ Eliminar
○ Listar
○ Ver el detalle
○ Buscar

Para usuarios:
○ Crear
○ Editar
○ Ver el detalle
● (Opcional) CRUDs de tablas secundarias.
● (Opcional) Agregar paginado a los listados y buscadores.

## Resumen del Sprint 7
Vamos a estar validando los formularios del sitio trabajando de atrás para adelante.
En la primera parte vamos a estar validando los datos desde el back-end. Esta es una
protección muy importante ya que como sabemos el usuario no puede acceder al mismo.
En la segunda parte vamos a estar validando en el front-end. Con esto evitaremos estar
enviando información inválida al servidor y, además, mejoraremos la experiencia del visitante.
Importante tener en cuenta que la validación del front-end puede ser deshabilitada desde el
navegador. Por eso es indispensable que también validemos en el back-end.

Validaciones del back-end:
● Registro de usuarios
○ Nombre y apellido
■ Obligatorio.
■ Deberá tener al menos 2 caracteres.
○ Email
■ Obligatorio.
■ Deberá ser un formato de e-mail válido.
■ No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria.
■ Deberá tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial.

○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
● Login de usuarios (este ya lo deberían tener de sprints anteriores 😊☝️)
○ Email
■ Obligatorio.
■ Deberá ser válido.
■ Deberá existir en base.
○ Contraseña
■ Obligatoria.
■ Deberá coincidir con la existente en base.

● Creación y modificación de productos
○ Nombre
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base.

● (Opcional) Resto de los formularios del sitio

Validaciones del front-end:
1. Por un lado, vamos a validar los datos antes de enviarlos para evitarle procesos
innecesarios al servidor.
2. Por el otro, vamos a darle feedback inmediato y de calidad a nuestro visitante.
Esto se traduce en una mucho mejor experiencia (UX) dentro de nuestro sitio.

● Registro de usuarios
○ Nombre y apellido
■ Obligatorio.
■ Deberá tener al menos 2 caracteres.
○ Email
■ Obligatorio.
■ Deberá ser válido.
■ (Opcional) → No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria.
■ Deberá tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial.

○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
● Login de usuarios (este ya lo deberían tener de sprints anteriores 😊☝️)
○ Email
■ Obligatorio.
■ Deberá ser válido.
■ (Opcional) → Debe existir en la base.
○ Contraseña
■ Obligatoria.

● Creación y modificación de productos
○ Nombre
■ Obligatorio.
■ Deberá tener al menos 5 caracteres.
○ Descripción
■ Deberá tener al menos 20 caracteres.
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
● (Opcional) Resto de los formularios del sitio

## Resumen del Sprint 8
En la primera parte van a estar armando una API de usuarios y de productos que exponga los
datos más importantes de su aplicación.
En la segunda parte van a estar armando un dashboard hecho en React que consuma los datos
de la API y muestre de manera resumida las principales métricas de su negocio.
Un dashboard nos permite ver a simple vista si todo está funcionando bien. Pueden pensarlo
como el tablero de un auto, donde toda la información que necesitamos está a simple vista.

API de usuarios:
● api/users/
○ Deberá devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de usuarios en la base.
■ users → array con la colección de usuarios, cada uno con:
● id
● name
● email
● detail → URL para obtener el detalle.

● api/users/:id
○ Deberá devolver un objeto literal con la siguiente estructura:
■ Una propiedad por cada campo en base.
■ Una URL para la imagen de perfil (para mostrar la imagen).
■ Sin información sensible (ej: password y categoría).

API de productos:
● api/products/
○ Deberá devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de productos en la base.
■ countByCategory → objeto literal con una propiedad por categoría
con el total de productos.
■ products → array con la colección de productos, cada uno con:
● id
● name
● description
● un array con principal relación de uno a muchos (ej:
categories).
● detail → URL para obtener el detalle.

● api/products/:id
○ Deberá devolver un objeto literal con la siguiente estructura:
■ una propiedad por cada campo en base.
■ un array por cada relación de uno a muchos (categories, colors,
sizes, etc).
■ Una URL para la imagen del producto (para mostrar la imagen).

(Opcional) Paginado
Agregar a los endpoints de listado, la posibilidad de paginar los resultados.
● api/users/
● api/products/
○ 10 resultados por página (recuerden limit y offset 😉☝️).
○ next → URL a la próxima página (si corresponde).
○ previous → URL a la página previa (si corresponde).

Dashboard en React:
contener al menos:
● 3 a 6 paneles simples con los siguientes totales:
○ Total de productos
○ Total de usuarios
○ Total de categorías
● Panel de detalle de último producto o usuario creado.
● Panel de categorías con el total de productos de cada una.
● Panel con el listado de productos.

(Opcional) Funcionalidades adicionales:
● Total de productos vendidos / total de ventas.
● Últimos 5 productos vendidos / los 5 más vendidos.
● Vista de creación de productos como Administrador.
● Vista de edición de productos como Administrador.
● Opción de eliminar productos como Administrador.

## Dinámica de la Estrella de Mar

En esta retrospectiva, utilizaremos la dinámica de la "Estrella de Mar" para identificar áreas de mejora y reflexionar sobre nuestro trabajo en equipo. Cada punto de la estrella corresponde a una categoría específica:

1. **Comenzar a hacer**: Reunirnos mas seguidos para hablar de la dinamica de estrella de mar.

2. **Hacer más**: encontrarnos al menos 1 o 2 veces a la semana para trabajar juntos en el proyecto.

3. **Continuar haciendo**: Subir constantemente los cambios a las ramas de Github, tambien usar las fortalezas en el equipo que tenemos cada uno.

4. **Hacer menos**: Trabajar por separado en algunos momentos no fue tan bueno.

5. **Dejar de hacer**: A pesar de los tiempos desencontrados que tuvimos en este sprint. No debemos permitirnos trabajar algunos temas por separado. Es indispensable juntarnos para despejar ciertas dudas que van surgiendo a lo largo del trello.

## Reflexiones del Equipo

### Comenzar a hacer

- [Ejemplo]: Incluir una revisión de código más exhaustiva antes de finalizar una tarea.

### Hacer más

- [Javier]: Realizar reuniones de sincronización diarias para mantenernos actualizados.

### Continuar haciendo

- [Ejemplo]: Celebrar reuniones de retrospectiva al final de cada sprint para la mejora continua.

### Hacer menos

- [Ejemplo]: Reducir el número de interrupciones durante las horas de trabajo.

### Dejar de hacer

- [Ejemplo]: Dejar de aplazar tareas importantes para el final del sprint.

## Plan de Acción

Basándonos en las reflexiones del equipo, definiremos un plan de acción para implementar mejoras en el próximo sprint.

1. [Ejemplo]: Designar a un miembro del equipo para liderar las revisiones de código.

2. [Ejemplo]: Mantener las reuniones diarias de sincronización en el próximo sprint.

3. [Ejemplo]: Continuar con las reuniones de retrospectiva al final de cada sprint.

4. [Ejemplo]: Establecer un período específico para manejar interrupciones.

5. [Ejemplo]: Priorizar tareas importantes al comienzo del sprint.

## Cierre

Agradecemos a todos los miembros del equipo por sus contribuciones en esta retrospectiva y esperamos ver mejoras en nuestro próximo sprint.

