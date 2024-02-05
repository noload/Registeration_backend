# Registration Management

## setting up project

- Clone the repository
- install all dependancy using `npm install` command
- create `.env` file and add following variables

  - `DATABASE_URL="postgresql://<your_postgre_username>:<your database password>@localhost:5432/<database_name>?schema=public"`

- Run a migration to create your database tables with Prisma Migrate
  - `npx prisma migrate dev --name '<your comments>'`
- run `tsc -b` to build all js files and run specific file using `node dist/file_name.js`

- we used postgresql database and prisma orm to create model
