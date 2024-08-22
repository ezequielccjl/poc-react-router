# Demo proyecto pasantes

## JSON server

Para evitar tener que crear el entorno backend utilizamos la libreria "json-server", de esta forma podemos hacer POST, DELETE, PUT and GET y almacenar los datos en el archivo data/db.json.

### Levantar server

```bash
npx json-server --port 3001 -w data/db.json
```

## Vite

Vamos a utilizar vite con React + Typescript.

### Levantar app

```bash
npm run dev
```
