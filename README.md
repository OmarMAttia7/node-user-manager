# Node User Manager
Basic user management system, performs standard CRUD operations on the user table in the database.
Uses Knex to perform db operations.

## Usage
You can start by passing a knex db connection to a new instance of `UserManager`.
```
const userManager = new UserManager();
```