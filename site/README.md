# Front-End Site

The `site` folder contains the Next.js frontend application for Arghavan Exchange.


## Technology stack

- Next.js
- React
- Redux Toolkit
- Material UI
- Tailwind CSS
- Socket.IO Client
- Next sitemap generation

## Run with Docker Compose

From the repository root:

```bash
docker compose up --build frontend
```

Then access the frontend on:

- `http://localhost:3000`

## Local development

Install dependencies:

```bash
cd site
npm install
```

Run the development server:

```bash
npm run dev
```

## Notes

- The frontend expects the backend API at `http://localhost:4000`.
- The Docker Compose service already configures the frontend with the API base URL.
