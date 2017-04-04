# Reddit Clone Assessment

## Project Setup
- create repo, clone
- git init
- git remote add origin
- install dependencies from npm
  - express
  - nodemon
  - ejs
  - body-parser
  - method-override
  - pg
  - knex
  - morgan
- add node_modules and DS_Store to .gitignore

## Server Setup
- `createdb` servername
- connect to server

## Table & Record Creation
- create Users table & columns with migrate make
- migrate make:latest
- create records with migrate make seed
- migrate seed:run (check if this is right?)


## File Setup
- Migrations Folder (auto generated)
- Seeds Folder (auto generated)
- Create a `Views` folder (or .ejs files)
- Create a `Routes` folder
- Create a `knexfile.js` (check that this is .js)
- Create an `app.js` file

## REST endpoints
`/` - show main menu

`/users` - show all users

`/users/:id`- view one user

`/users/:id/edit` - edit one user

`/users/:id/delete` - delete one user

`/users/new` - create new user record

## UX
First screen:
  - View All Users
  - Create a New User

On Click of "View All Users":
  - Display all Users as `<li>` w/ `.forEach`
  - View, Edit & Delete links next to user
  - Link back to main page

  On Click of "Create New User":
    - Display a form with these items:
      - fullname
      - username
      - user_id
      - submit button
        - on submit, display all users w/ new user

## CRUD w/ Users table
- Create (.post): post a new user record
- Read (.get): select * from users table
- Update (.put/.patch): edit a record from users
- Delete (.delete): remove a record from users

## To push
- `git add`
- `git commit -m [commit message here]`
- `git push origin master`

## Don't Forget!!!
- This is the flow:
  - Create a route
  - Create a view
  - Use the route
