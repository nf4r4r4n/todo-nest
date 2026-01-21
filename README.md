# Simple Todo App made with NestJS and SQLite

The purpose of this project is to understand the core functionality of the framework NestJS.

## Setup

To setup before starting the project, there are some options that need to be set up.

- Environment variable in the **.env** file:

```sh
DATABASE_URL="file:./todos.db" # As we are using sqlite
```

- Run the migrations for SQL:

```sh
npx prisma migrate dev --name init
```

## Conception & Purpose

There are some basic endpoints for simple operations to manage todos such as **CRUD**.

- **/todos** - **POST**: Create a todo
- **/todos** - **GET**: Get the list of todos
- **/todos/:id** - **GET**: Get the specific todo with "**_id_**"
- **/todos/:id** - **PATCH**: Update partially the specific todo with "**_id_**"
- **/todos/:id** - **DELETE**: Delete the specific todo with "**_id_**"

## Technologies & Libraries

As the main description, this project aims to understand the framework **NestJS**. Our todos need to be stored in Database so that we will take the simplest option: **SQLite**.

For more clarity and to facilitate the usage and testing the projet, we will add API documentation with **OpenAPI Swagger**.

At the end, we will choose **Prisma** as an ORM because of its popularity and its complete documentation.

## Entity

For the understanding of the project description and the framework, we only need one entity so far: **Todos**.

```sh
model Todos {
  id          Int
  description String
  is_done     Boolean
  created_at  Date
}
```

To simplify the understanding of the code, each function, class and instructions will be commented and explained as necessary.

Good luck and enjoy XD !

## Starting project

You can start project by running:

```sh
npm run start # Starting project after the build
npm run start:dev # Starting project in development mode
```

## Implemented features

- [ ] **/todos** - **POST**: Create a todo

- [ ] **/todos** - **GET**: Get the list of todos

- [ ] **/todos/:id** - **GET**: Get the specific todo with "**_id_**"

- [ ] **/todos/:id** - **PATCH**: Update partially the specific todo with "**_id_**"

- [ ] **/todos/:id** - **DELETE**: Delete the specific todo with "**_id_**"

- [ ] Swagger documentation

- [ ] Securization: Secure the API with a key
