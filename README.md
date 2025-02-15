# microservicios-cloud
pry-3p-cloud hecho por Genesis Simbaña, Giovanna Soria, Nohely Villegas  

# Sistema de Microservicios con Docker y Azure

Este proyecto consiste en un sistema basado en arquitectura de microservicios, desplegado en una máquina virtual (VM) de Azure utilizando contenedores Docker. El sistema incluye una capa de presentación (frontend) desarrollada en React, dos microservicios (uno para la gestión de usuarios y otro para la gestión de cursos), y dos bases de datos (MySQL y PostgreSQL).

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
proyecto/
├── docker-compose.yml          # Archivo de configuración de Docker Compose
├── microservicios-frontend/    # Carpeta del frontend (React)
│   ├── Dockerfile              # Dockerfile para el frontend
│   ├── package.json            # Dependencias del frontend
│   └── src/                    # Código fuente del frontend
├── micro_usuarios/             # Carpeta del microservicio de usuarios
│   ├── Dockerfile              # Dockerfile para el microservicio de usuarios
│   ├── .env                    # Variables de entorno para el microservicio de usuarios
│   └── src/                    # Código fuente del microservicio de usuarios
├── micro_cursos/               # Carpeta del microservicio de cursos
│   ├── Dockerfile              # Dockerfile para el microservicio de cursos
│   ├── .env                    # Variables de entorno para el microservicio de cursos
│   └── src/                    # Código fuente del microservicio de cursos
```


## Requisitos

- **Docker**: Asegúrate de tener Docker instalado en tu máquina local y en la VM de Azure.
- **Docker Compose**: Necesario para gestionar los contenedores.
- **Azure CLI**: Opcional, pero útil para gestionar recursos en Azure.
- **Node.js**: Para el desarrollo del frontend (solo en local).
- **Java/Spring Boot**: Para los microservicios (solo en local).

## Configuración del Entorno

### 1. Creación de la Máquina Virtual en Azure

1. Crea una VM en Azure con Ubuntu Server 20.04 LTS.
2. Abre los puertos necesarios: 22 (SSH), 80 (HTTP), 3000 (Frontend), 8002 (Micro-Cursos), 8004 (Micro-Usuarios), 3306 (MySQL), 5432 (PostgreSQL).
3. Conéctate a la VM usando SSH:

   ```bash
   ssh mike@57.154.187.103
   ```

### 2. Transferencia de Archivos a la VM

Copia los archivos del proyecto desde tu máquina local a la VM:

```bash
scp -r "C:\Users\giova\OneDrive\Escritorio\7mo\DISTRIBUIDAS\P3\pry\respaldo\pry-3p" mike@57.154.187.103:/home/mike/
```

### 3. Configuración de Permisos

Otorga permisos de ejecución a los scripts de Maven:

```bash
chmod +x micro_cursos/mvnw
chmod +x micro_usuarios/mvnw
```

## Despliegue con Docker Compose

1. Navegar a la carpeta del proyecto en la VM:

   ```bash
   cd pry-3p-cloud
   ```

2. Ejecutar Docker Compose para construir y levantar los contenedores:

   ```bash
   sudo docker compose up -d --build
   ```

3. Verificar que los contenedores estén en ejecución:

   ```bash
   sudo docker ps
   ```

## Acceso al Sistema

- **Frontend:** Acceder a la interfaz de usuario desde un navegador web usando la IP pública de la VM:

  ```
  http://57.154.187.103:3000
  ```

- **Microservicios:**
  - Micro-Usuarios: `http://57.154.187.103:8004`
  - Micro-Cursos: `http://57.154.187.103:8002`

## Pruebas de Funcionalidad

### Micro-Cursos

- **POST**: Crear un nuevo curso.
- **GET**: Obtener la lista de cursos.
- **PUT**: Actualizar un curso existente.
- **DELETE**: Eliminar un curso.

### Micro-Usuarios

- **POST**: Crear un nuevo usuario.
- **GET**: Obtener la lista de usuarios.
- **PUT**: Actualizar un usuario existente.
- **DELETE**: Eliminar un usuario.

### Matrícula y Desmatrícula

- **Matricular**: Asignar un usuario a un curso.
- **Desmatricular**: Remover un usuario de un curso.

## Conclusión

Este proyecto demuestra cómo desplegar un sistema de microservicios en la nube utilizando Docker y Azure. La arquitectura basada en microservicios permite una escalabilidad y mantenimiento sencillo, mientras que Docker facilita la portabilidad y el despliegue en diferentes entornos.

## Recomendaciones

- **Optimización de Recursos:** Para proyectos más grandes, considera usar instancias de Azure con mayor capacidad.
- **Seguridad:** Implementa firewalls y certificados SSL para proteger los servicios expuestos.
- **Monitoreo:** Utiliza herramientas como Azure Monitor o Prometheus para supervisar el rendimiento.
```
