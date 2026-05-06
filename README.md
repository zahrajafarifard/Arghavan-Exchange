# Arghavan Exchange

A full-stack exchange platform with a **Next.js** frontend and **Node.js/Express** backend, designed for modern cryptocurrency pricing and transaction display.

## Projects

- `back-end/` — Node.js + Express backend, with Sequelize and MySQL.
- `site/` — Next.js frontend with Redux, Material UI, Tailwind CSS, and Socket.IO client.

## Run locally with Docker Compose

### Prerequisites

- Docker Desktop installed
- Docker Compose available

### Start the application

From the repository root:

```bash
docker compose up --build
```

This starts:

- `mysql` database on port `3307`
- `backend` API on port `4000`
- `frontend` website on port `3000`

### Stop the application

```bash
docker compose down
```

## Notes

- The frontend is configured to use `http://localhost:4000` for the backend API.
- Database data is persisted using the `db_data` Docker volume.
- If you need to recreate the database completely, run:

```bash
docker compose down -v
```

## Repository structure

- `back-end/` — API server and backend source code
- `site/` — Next.js frontend source code
- `docker-compose.yml` — service orchestration for development

---

## Author

- Zahra Jafarifard

## GitHub

Repository: https://github.com/zahrajafarifard/Arghavan-Exchange
