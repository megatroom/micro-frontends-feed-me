# Micro Frontends

Case of study inspired by [Cam Jackson's article in Martin Fowler website](https://martinfowler.com/articles/micro-frontends.html).

# Build-time integration

This approach separates micro frontends into packages and bundles them into one deployment.

## Build-time integration via monorepo with single-spa

Example using [single-spa](https://single-spa.js.org) following the official site article [Starting From Scratch](https://single-spa.js.org/docs/starting-from-scratch.html).

Run the application:

```bash
cd buildtime-single-spa
yarn install
yarn start
```

The application will open automatically.

This approach uses different agnostic packages in a monorepo. This will allow to:

- Use multiple frameworks on the same page.
- Write code using a new framework, without rewriting your existing application
- Lazy load code for improved initial load time.

| Dir              | Route          | Description                                         |
| ---------------- | -------------- | --------------------------------------------------- |
| `/`              |                | Files to build the application                      |
| `/src/navBar`    | `/*`           | React app that always displays top-level navigation |
| `/src/home`      | `/home/*`      | React app using React Router                        |
| `/src/angularJS` | `/angularJS/*` | AngularJS app using angular-ui-router               |

Deployment:

```
yarn build
npx serve -s .
```

# Server-side

This approach process the composition in a server and delivery the entire page.

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
