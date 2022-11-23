# Node User Manager
Basic user management system, performs standard CRUD operations on the user table in the database.
Uses Knex to perform db operations so it should be compatible with most realational SQL database systems.

## Table Of Contents
- [Database Schema](#database-schema)
- [Usage](#usage)
  - [Create New User](#create-new-user)

## Database Schema
The service expects the specified users table to have the following structure:
| Field name | Data type |
|------------|-----------|
| id         | primary key - automatically generated integer |
| username   | unique - varchar(30) |
| first_name | varchar(50) |
| last_name  | varchar(50) |
| password_digest | char(hashLength) |
| email      | unique - text |

It is recommended that you implement e-mail pattern validation on the database table schema.

The hash length is still not determined.

## Usage
You can start by passing a knex db connection to a new instance of `UserManager`.
```javascript
const db = new knex({...config...});
const userManager = new UserManager(db);
```

### Create New User
Still yet not implemented.