# micro-frontends-feed-me

## Server-side template composition

Run the Nginx container:

```bash
cd server-side-template-composition
docker-compose up
```

Open the URL: [http://localhost:8080/](http://localhost:8080/)

| HTML         | Route             | Description                          |
| ------------ | ----------------- | ------------------------------------ |
| index.html   |                   | Renders the title and menu           |
| browse.html  | `/` or `/browser` | Micro Frontend with the main content |
| order.html   | `/order`          | Micro Frontend                       |
| profile.html | `/profile`        | Micro Frontend                       |
