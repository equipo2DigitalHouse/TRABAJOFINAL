## Equipo de Desarrollo

- Santiago (Líder del proyecto)
- Joaquin (Desarrollador principal)
- Martin (Diseñadora de interfaz)
- Javier (Desarrollador principal)

# Retrospectiva del Equipo - Sprint 1, 2, 3, 4, 5, 6, 7, 8.

## Resumen del Sprint 1

En este SPRINT creamos una cuenta GITHUB personal para cada uno de nosotros,

Nuestro rol fue el de desarrollar el sitio asegurándonos que:
● Sea estéticamente agradable (UI - User Interface).
● Sea fácil de usar (UX - User Experience).
● Sea funcional y cumpla con los requisitos del cliente.
● Las entregas se cumplan en tiempo y forma.
Nuestro rol como product owners será el de mediar entre ustedes y
el cliente asegurándonos que:
● Los requerimientos sean claros.
● Tengan los conocimientos adecuados en cada etapa.
● Se destraben las situaciones que detengan el desarrollo.
● El código producido sea mantenible y comprensible.

1. Creamos el repositorio del proyecto y agregamos colaboradores:
El nombre del repositorio #Shake_It_Up del #Grupo N2.
Agregamos como colaboradores a cada uno de los integrantes del grupo.
Entregamos: URL del repositorio.

2. Definimos la temática del Market Place:
Decidimos crear un grupo de Barra Movil para eventos y fiestas donde los clientes accedan a nuestros servicios
de barras GOLD, PLATINIUM y CLASICA, dependiendo del tipo de servicio que deseen.

Nuestra audiencia puede ser todo tipo de personas que deseen armar una fiesta u evento en la cual accedan a contratar nuestras barras y bartenders para una fiesta agradable a su gusto.

Creamos este archivo README.MD dentro de este REPOSITORIO LOCAL para brindar detalles de todos los movimientos que fuimos haciendo a lo largo de dicho trabajo.

Dado que somos un grupo con distintos tiempos y con muchas actividades, 
nos dividimos de acuerdo a el potencial que cada uno tiene dentro de este proyecto. 

3. Buscamos inspiraciones en referentes del mercado de BARRAS MOVILES muy conocidas tales como MentaBar por ejemplo, donde buscamos: 
● Por los productos o servicios que ofrecen.
● Por los clientes a los que apuntan.
● Por la estética que presentan.
● Por las funcionalidades implementadas.

4. Creamos un wireframe y un boceto del sitio.
En donde cada uno SANTI, JOA, MARTIN y JAVIER presento un BOCETO de nuestro sitio web, 
en donde pondriamos el HEAD, el FOOTER, el HEADER...
Unificamos criterios y armamos un unico BOCETO.

## Resumen del Sprint 2

Arrancamos a codear utilizando HTML y CSS. Con estas dos herramientas van
a pudimos darle “vida” a los bocetos que preparamos anteriormente.

Creamos un Tablero de trabajo y para organizarnos empezamos a repartirnos tareas de acuerdo a cada SPRINT, 
y asi poder organizarnos mejor dado que nuestros tiempos son distintos y a veces cuesta ponernos de acuerdo.
Para dicho Tablero utilizamos TRELLO.

Creamos la estructura de archivos HTML y CSS utilizando Node.js+Express:
Implementamos de estructura MVC (Modelo-Vista-Controlador) para un
proyecto de Node.js.

Página: inicio:
Home del sitio con la oferta de productos y/o servicios.
Historias de usuario:
★ Como cliente quiero ver un resumen de la oferta de productos para poder decidir
rápidamente si quedarme o buscar el producto en otro sitio.
★ Como cliente quiero que el sitio funcione bien en mi teléfono celular para poder
acceder en cualquier momento.
Archivo index.html

Página: detalle de producto:
Historias de usuario
★ Como cliente quiero poder ver toda la información relevante del producto para
decidir si voy a comprarlo.
★ Como cliente quiero poder agregar fácilmente el producto a mi carrito para poder
comprarlo.
Archivo products.html

Página: carrito de compras:
★ Como cliente quiero poder acceder al detalle de mi carrito de compras en
cualquier momento para finalizar la compra.
★ Como cliente quiero poder modificar productos del carrito para poder eliminarlos
de la compra o modificar la cantidad.
Archivo carrito.html

Página: registro:
Página donde el cliente puede registrarse como usuario del sitio.
★ Como cliente quiero poder registrarme para estar en su base de datos y acceder a
mi perfil e historial de compras de una manera más sencilla y, además, facilitar el
proceso de futuras compras.
register.html

Página: login:
Página donde el cliente puede ingresar con el usuario que creó previamente.
★ Como cliente quiero poder loguearme para acceder a mi historial de compras.
★ Como cliente quiero tener la opción de que el sitio me recuerde para no escribir mi
usuario y contraseña cada vez.
★ Como cliente quiero poder recuperar la contraseña para poder ingresar si me la
olvido.
Archivo login.html

## Resumen del Sprint 3

Modificamos el sitio para que:
● Reutilice los componentes compartidos: header, menu, footer, etc.
● Muestre contenido dinámicamente a través de un motor de templates (Express+EJS).

Implementar el motor de templates
Implementamos el módulo EJS y renombrar todas las vistas actuales para que utilicen la
extensión .ejs.
Modificar los métodos de los controladores para que utilicen el método render().

Separamos las vistas en carpetas:
Usuarios: src/views/users/
Productos: src/views/products/

Separar los componentes repetidos en archivos parciales:
ver:
● Head (incluyendo todo el elemento <head></head>) → head.ejs
● Header (incluyendo barras de navegación) → header.ejs
● Footer (incluyendo todo el elemento <footer></footer>) → footer.ejs
● Otras secciones de su sitio que se repitan.

Página: creación y edición de productos:
formularios del tipo:
● Nombre del producto (name)
● Descripción (description)
● Imagen (image)
● Categoría (category)
● Colores (o cualquier otro campo similar como: tamaños, talles, etc)
● Precio (price)

## Resumen del Sprint 4

En este Sprint separamos bien los temas por trello, le dimos mucha mas importancia a Trello dado que tuvimos contratiempos para reunirnos.
Tambien sufrimos una baja de un integrante Mauricio Guddemi.
Trabajamos por separado cada tema y pudimos encausar al final los temas juntos tambien.
Se descargo morgan, se hicieron los ruteos correspondientes, se subio morgan, multer, nos organizamos deacuerdo a MVC, entre otros items mas, y a pesar que tuvimos una baja de un integrante, y de los contratiempos.

Nos encargamos de modificar el sitio para que muestre productos
dinámicamente a través de una fuente de datos (JSON).

La retrospectiva
Para esta altura comenzamos a encontrar puntos de mejora.
Implementemos nuevamente la dinámica de la estrella de mar, resaltando aquello que hay que:
1. Comenzar a hacer
2. Hacer más
3. Continuar haciendo
4. Hacer menos
5. Dejar de hacer
Esto nos ayudo bastante a ver las debilidades, las fortalezas y las cuestiones a mejorar.

Definimos los campos necesarios para los productos y generamos archivos JSON:
● Identificador (ya hablaremos más sobre este campo): id
● Nombre del producto: name
● Descripción: description
● Imagen: image
● Categoría: category
● Colores (o cualquier otro campo similar como: talle): colors
● Precio: price

Definimos los campos necesarios para los usuarios y generamos archivos JSON:
● Identificador: id
● Nombre: firstName
● Apellido: lastName
● Email: email
● Contraseña: password
● Categoría: category
● Imagen: image

CRUD de productos:
Esto significa "Crear, Leer, Actualizar y Borrar", es decir, poder crear,
leer, actualizar y borrar un producto en particular.
necesitamos de siete rutas:
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

Aqui modificamos el sitio para que:
● Permita el flujo de registro, login y logout de usuarios.
● Permita recordar al usuario para que pueda ingresar sin volverse a loguear.
● Tenga rutas accesibles solo por huéspedes (visitantes sin login).
● Tenga rutas accesible solo por usuarios (que hicieron login).

Implementamos la entidad de usuarios:
● Rutas: src/routes/users.js
● Controlador: src/controllers/usersController.js
● Vistas: src/views/users/
● Directorio para imágenes: public/images/users/
● Colección: src/data/users.json

Implementamos el registro de usuarios:
Tomamos como referencia el formulario de creación de productos, implementamos el
formulario de registro de usuarios.
● Incluye los campos mínimos mencionados en el sprint anterior.
● Permite la subida de una imagen de perfil (con Multer).
● Encripta la contraseña ingresada por el usuario (con bcrypt.js).
● Guarda los datos enviados en el archivo JSON de usuarios.

Implementamos el login de usuarios:
Formulario de login que:
● Incluya los campos de email y password.
● Verifique la información enviada por el usuario y según el caso:
○ Redireccione a la home o a la página de perfil en caso de éxito y muestre
los datos del usuario en algún lugar del sitio, como el header.
○ Redireccione nuevamente al login en caso de error.

Implementamos rutas de usuarios:
● Rutas accesibles por cualquiera → sin cambios
● Rutas accesibles solo sin login → redirigen al perfil
● Rutas accesibles solo con login → redireccionan al login


## Resumen del Sprint 6

En este SPRINT nos dedicamos a Bases de datos con MySQL y XAMPP, conectadas a:
1. Fuente de datos de usuarios y productos: los archivos JSON serán su fuente de
inspiración.
2. CRUD de productos y usuarios: que hoy funcionan para JSON y sobre los cuales
implementamos la magia de Sequelize.

En la primera parte, vamos a estar pensando en la estructura que será necesaria para que la base
de datos cumpla con los requisitos del negocio:
tablas, campos, tipos de datos y relaciones.

La segunda parte implementamos la base de datos que creamos en la primer
parte, utilizando el módulo de Sequelize.

Diagrama de base de datos:
● Usuarios (ver los campos sugeridos en el sprint 3).
● Productos (ver los campos sugeridos en el sprint 3).
● Tablas secundarias (según proyecto).
○ Para productos: categorías, marcas, colores, talles, etc.
○ (Opcional) Para usuarios: categorías.
● (Opcional) Carrito de compras.
○ Con detalle de quién hizo la compra, cantidad de ítems y precio total.
● (Opcional) Productos de cada carrito de compras.

Script de estructura:
Tomamos como referencia el diagrama del punto anterior, tienen que escribir las
sentencias de SQL que crearán las tablas y sus relaciones.
● Debe incluir la creación de la base de datos (create database...).
● Debe incluir la creación de todas las tablas del sitio (create table...).
● Debe incluir los tipos de datos de los campos y sus restricciones (primary keys,
(not) null, unique, default, etc).
● Debe incluir las relaciones entre las diferentes tablas (foreign keys).

Script de datos:
Debería,
● Poblar la tabla de usuarios.
● Poblar la tabla de productos.
● Poblar las tablas secundarias (categorías, marcas, colores, talles, etc).
● (Opcional) Poblar la tabla de carrito de compras.
● (Opcional) Poblar la tabla de productos de carritos de compras.

Creación de carpeta Sequelize y archivos de
modelos:
Mediante la herramienta sequelize-cli deberán creamos la carpeta que contiene los
archivos de configuración de Sequelize. 
Una vez configurado Sequelize, sigue crear los
archivos de modelos para explicarle cómo es la estructura de la base de datos.
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
A esta altura fue hora de tener los CRUD como la gente. 
Qué bueno que tenemos a Sequelize de
nuestro lado. Entonces en nuestro sitio SHAKE IT UP se puede:
● Para productos:
○ Crear
○ Editar
○ Eliminar
○ Listar
○ Ver el detalle
○ Buscar

● Para usuarios:
○ Crear
○ Editar
○ Ver el detalle
● (Opcional) CRUDs de tablas secundarias.
● (Opcional) Agregar paginado a los listados y buscadores.

Entregamos: rutas, controladores y vistas necesarias para que suceda lo detallado
previamente utilizando Sequelize para trabajar con la base de datos.


## Resumen del Sprint 7

Aqui nuestro objetivio principal es la Base de datos bien configurada: 
la protección final y más importante es la de la base de
datos. 
Si todo falla, la base de datos evitará que se carguen datos que puedan dañarla.

Primera parte: vamos a estar validando los datos desde el back-end. 
Esta es una protección muy importante ya que como sabemos el usuario no puede acceder al mismo.
Segunda parte vamos a estar validando en el front-end. 
Con esto evitaremos estar enviando información inválida al servidor y, 
además, mejoraremos la experiencia del visitante.

Validaciones de back-end y front-end

● Registro de usuarios
○ Nombre y apellido
■ Obligatorio.
■ Debe tener al menos 2 caracteres.
○ Email
■ Obligatorio.
■ Debe ser un formato de e-mail válido.
■ No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria.
■ Debe tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial.

○ Imagen
■ Debe ser un archivo válido (JPG, JPEG, PNG, GIF).
● Login de usuarios (este ya lo deberían tener de sprints anteriores 😊☝️)
○ Email
■ Obligatorio.
■ Debe ser válido.
■ Debe existir en base.
○ Contraseña
■ Obligatoria.
■ Debe coincidir con la existente en base.

● Creación y modificación de productos
○ Nombre
■ Obligatorio.
■ Debe tener al menos 5 caracteres.
○ Descripción
■ Debe tener al menos 20 caracteres.
○ Imagen
■ Debe ser un archivo válido (JPG, JPEG, PNG, GIF).
○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base.

● (Opcional) Resto de los formularios del sitio


Validaciones del front-end:

Nuestro objetivo acá fue doble:
1. Por un lado, vamos a validar los datos antes de enviarlos para evitarle procesos
innecesarios al servidor.
2. Por el otro, vamos a darle feedback inmediato y de calidad a nuestro visitante.
Esto se traduce en una mucho mejor experiencia (UX) dentro de nuestro sitio.

Vamos con esas consignas:
● Registro de usuarios
○ Nombre y apellido
■ Obligatorio.
■ Debe tener al menos 2 caracteres.
○ Email
■ Obligatorio.
■ Debe ser válido.
■ (Opcional) → No puede repetirse con los e-mails ya registrados.
○ Contraseña
■ Obligatoria.
■ Debe tener al menos 8 caracteres.
■ (Opcional) → Deberá tener letras mayúsculas, minúsculas, un
número y un carácter especial.

○ Imagen
■ Debe ser un archivo válido (JPG, JPEG, PNG, GIF).
● Login de usuarios (este ya lo deberían tener de sprints anteriores 😊☝️)
○ Email
■ Obligatorio.
■ Debe ser válido.
■ (Opcional) → Debe existir en la base.
○ Contraseña
■ Obligatoria.

● Creación y modificación de productos
○ Nombre
■ Obligatorio.
■ Debe tener al menos 5 caracteres.
○ Descripción
■ Debe tener al menos 20 caracteres.
○ Imagen
■ Debe ser un archivo válido (JPG, JPEG, PNG, GIF).

● (Opcional) Resto de los formularios del sitio


## Resumen del Sprint 8

Base de datos de usuarios y productos: en este sprint vamos a trabajar con los datos
que ya existen en nuestro sitio, por eso necesitamos la base completa y funcionando.

Primera parte armamos una API de usuarios y de productos que exponga los
datos más importantes de su aplicación.
Segunda parte armamos un dashboard hecho en React que consuma los datos
de la API y muestre de manera resumida las principales métricas de su negocio.

Un dashboard nos permite ver a simple vista si todo está funcionando bien. Pueden pensarlo
como el tablero de un auto, donde toda la información que necesitamos está a simple vista.

APIs y dashboard

API de usuarios:
Nuestra API de usuarios va a proveernos de dos endpoints muy importantes. 
El primero nos entregará la lista completa de usuarios y el segundo nos permitirá consultar los
detalles de un usuario en particular.

● api/users/
○ Debe devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de usuarios en la base.
■ users → array con la colección de usuarios, cada uno con:
● id
● name
● email
● detail → URL para obtener el detalle.

● api/users/:id
○ Debe devolver un objeto literal con la siguiente estructura:
■ Una propiedad por cada campo en base.
■ Una URL para la imagen de perfil (para mostrar la imagen).
■ Sin información sensible (ej: password y categoría).
Aqui los URL funcionales devolven datos de usuarios en formato JSON.

API de productos:
Nuestra API de productos es muy similar. 
Sus dos endpoints entregarán la lista completa de productos,
y el detalle de un producto en particular.
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
Aqui los URL funcionales devolven datos de productos en formato JSON.

<!-- Paginado:
Agregamos a los endpoints de listado, 
la posibilidad de paginar los resultados.
● api/users/
● api/products/
○ 10 resultados por página (recuerden limit y offset).
○ next → URL a la próxima página (si corresponde).
○ previous → URL a la página previa (si corresponde). -->

Dashboard en React:
Ya tenemos nuestra fuente de datos y ahora solo queda consumirlas para darle vida a
nuestro dashboard.
Para este punto lo recomendado es que partamos de los archivos que les compartimos
durante las ejercitaciones presenciales de React.
El dashboard deberá contener al menos:
● 3 a 6 paneles simples con los siguientes totales:
○ Total de productos
○ Total de usuarios
○ Total de categorías
● Panel de detalle de último producto o usuario creado.
● Panel de categorías con el total de productos de cada una.
● Panel con el listado de productos.

<!-- (Opcional) Funcionalidades adicionales:
● Total de productos vendidos / total de ventas.
● Últimos 5 productos vendidos / los 5 más vendidos.
● Vista de creación de productos como Administrador.
● Vista de edición de productos como Administrador.
● Opción de eliminar productos como Administrador. -->






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

Fin de trabajos y resumen con el SPRINT 8:
Fue un largo camino de mucho aprendizaje, con horas y horas de clases, de sentarnos a realizar tareas en PLAYGROUND,
Con trabajos individuales que muchas veces nos hizo levantar la mano.
Trabajar en equipo fue un gran desafio, pero lo logramos, dimos lo mejor que pudimos mas alla de algunos contratiempos.
Nos pusimos de acuerdo, lo logramos, 
y llegamos a esta instancia de presentar nuestro TRABAJO FINAL, 

SOMOS SHAKE IT UP.
