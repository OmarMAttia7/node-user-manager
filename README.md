# Node User Manager
Basic user management system, performs standard CRUD operations on the user table in the database.
Uses Knex to perform db operations so it should be compatible with most realational SQL database systems.

## Table Of Contents
- [Usage](#usage)
  - [Create New User](#create-new-user)

## Usage
You can start by passing a knex db connection to a new instance of `UserManager`.
```javascript
const db = new knex({...config...});
const userManager = new UserManager(db);
```

### Create New User
Still yet not implemented.