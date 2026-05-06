# Back-End Service

The `back-end` folder contains the Node.js and Express API for Arghavan Exchange.


## Technology stack

- Node.js
- Express
- Sequelize ORM
- MySQL
- Socket.IO
- Nodemailer

## Run with Docker Compose

From the repository root:

```bash
docker compose up --build backend
```

Then access the backend on:

- `http://localhost:4000`

## Local development

Install dependencies:

```bash
cd back-end
npm install
```

Start the backend:

```bash
npm start
```

## Notes

- The backend depends on the MySQL service defined in `docker-compose.yml`.
- Use `docker compose up --build` to ensure the database and backend are built together.
