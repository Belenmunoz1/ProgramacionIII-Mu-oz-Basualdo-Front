# Programación III - Angular frontend - Muñoz - Basualdo

Proyecto Angular: Header, Dashboard, Footer, login y ejercicios de angular form y service.


## Ejecutar

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


