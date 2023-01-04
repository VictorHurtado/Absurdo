# Next.js Absurdo Shop

Para correr localmente se requiere la base de datos
```
docker-compose up -d
```
* el -d significa __detached__

- El Local corre en: mongodb://localhost:27017/entriesdb
Reconstruir Node Modules y levantar
```
yarn install
yarn dev
```

Llamar la base de datos con datos de prueba

- localhost:3000/api/seed

