# NodeJS User Management System

Basic user management system, performs standard CRUD operations on the user table in the database.
Uses Knex to perform db operations so it should be compatible with most realational SQL database systems.

## Table Of Contents

- [Database Schema](#database-schema)
- [Usage](#usage)
  - [Create New User](#create-new-user)
  - [Delete User Account](#delete-user-account)
  - [Fetch User Info](#fetch-user-info)

## Database Schema

The service expects the specified users table to have the following structure:
| Field name | Data type |
|------------|-----------|
| id | primary key - automatically generated integer |
| username | unique - varchar(30) |
| first_name | varchar(50) |
| last_name | varchar(50) |
| password_digest | char/varchar(100) |
| email | unique - text |

It is recommended that you implement e-mail pattern validation on the database table schema.

The hash length is still not determined.

## Usage

You can start by passing a knex db connection to a new instance of `UserManager`.

```javascript
const db = new knex({...config...});
const userManager = new UserManager(db);
```

### Create New User

`userManager.createUser(newUserInfo: User)` requires a user object as shown in the code snippet below, and will return a similiar `User` object, containing the user ID in the database but no password.

#### Example

```javascript
const newUser = await userManager.createUser({
  username: "username",
  firstName: "firstName",
  lastName: "lastName",
  password: "password",
  email: "email@example.com",
});
```

### Delete User Account

`userManager.deleteUser(userID: number)` requires a user ID and returns a `User` object with the information of the deleted user except the password.

#### Example

```javascript
const deletedUser = await userManager.deleteUser(userID);
```

### Fetch User Info

`userManager.getUser(searchFilter: number | string)` requires a user ID, username or email and will return a `User` object containing all user info except the password.

Fetching by ID is generally faster since no string parsing happens to validate if the input is an email, and the function checks for IDs first.

#### Example

```javascript
const user = await userManager.getUser(34);
// OR
const user = await userManager.getUser("username");
// OR
const user = await userManager.getUser("email@example.com");
```
