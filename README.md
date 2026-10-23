# Programación III - Frontend Angular

Proyecto frontend desarrollado con Angular para practicar componentes, routing, formularios reactivos, servicios HTTP y estructura de una aplicación web moderna.

## Descripción general

Este proyecto contiene una interfaz principal con:

- Header y Footer reutilizables
- Dashboard inicial
- Login con consumo de servicio
- Registro con formularios reactivos
- Pasatiempos con formularios dinámicos usando FormArray
- Rutas configuradas para navegación entre páginas

## Tecnologías utilizadas

- Angular 22
- TypeScript
- Angular Router
- Angular Forms
- HttpClient
- RxJS

## Requisitos previos

- Node.js 18 o superior
- npm
- Backend corriendo en `http://localhost:5006` para el login

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

La aplicación queda disponible en:

- `http://localhost:4200/` → Dashboard
- `http://localhost:4200/login` → Login
- `http://localhost:4200/registro` → Formulario de registro
- `http://localhost:4200/pasatiempos` → Formulario dinámico de pasatiempos

## Estructura principal

```text
src/
  app/
    components/      # Header, Footer
    pages/           # Dashboard, Login, Registro, Pasatiempos
    services/        # Servicios HTTP
    models/          # Modelos de datos
```

## Observaciones

- El login consume la API del backend en `http://localhost:5006/api/User/login`.
- El proyecto está pensado como ejercicio académico de Programación III.
- Si querés, podés agregar más pantallas, validaciones avanzadas o pruebas unitarias para mejorar el proyecto.

## Comandos útiles

```bash
npm run build
npm test
```
