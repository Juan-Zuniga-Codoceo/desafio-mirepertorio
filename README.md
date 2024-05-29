# Mi Repertorio

## Descripción
"Mi Repertorio" es una aplicación web diseñada para gestionar una colección de canciones. Utiliza tecnologías como Node.js, Express y PostgreSQL para ofrecer una solución robusta y fácil de usar para insertar, consultar, actualizar y eliminar registros de canciones en una base de datos.

## Requisitos
- Node.js
- PostgreSQL

## Instalación
Sigue estos pasos para instalar y configurar tu aplicación:

### Clonar el repositorio

    git clone https://github.com/tu-usuario/mi-repertorio.git
    cd mi-repertorio

### Instalar dependencias

    npm install

## Configurar variables de entorno
Crea un archivo .env en el directorio raíz con las siguientes variables:

    DB_USER=tu_usuario_db
    DB_HOST=tu_host_db
    DB_DATABASE=repertorio
    DB_PASSWORD=tu_contraseña_db
    DB_PORT=5432

### Uso
Para iniciar la aplicación, ejecuta:

    npm start

Para desarrollo, puedes usar:

    npm run dev

Visita http://localhost:3000 en tu navegador para acceder a la aplicación.

## API Endpoints
Obtener todas las canciones
* URL: /api/canciones
* Método: GET

Crear una nueva canción
* URL: /api/cancion
* Método: POST
* Cuerpo de la solicitud:
    JSON
    {
    "titulo": "Nombre de la canción",
    "artista": "Nombre del artista",
    "tono": "Tono"
    }

Actualizar una canción
* URL: /api/cancion/:id
* Método: PUT

Eliminar una canción
* URL: /api/cancion
* Método: DELETE
* Parámetros de la solicitud: id

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.