# personal_website_react

# UNDER CONSTRUCTION
This project is aiming to pratice the MERN Stack skills.
When finished, it can replace nmy current personal website from WordPress to React.

## Front-end
- [x] React.js

## Backend
- [x] Node.js
- [x] Express

## DB
- [x] mongo/dynamodb

## Functionality 
- [x] View page
- [x] Three.js
- [x] login
  1. Connect to mongoose
  2. check Role table, if table is empty, create three roles.
  3. /api/auth/signup
     1. Middleware 1：verifySignUp.checkDuplicateUsernameOrEmail
     2. Middleware 2: verifySignUp.checkRolesExisted
     3. controller.signup => save to mongodb, object is User and Role
  4. /api/auth/signin
     1. controller.signin => finduser by username in mongodb
     2. use bcrypt.compareSync to check password
     3. get token by jwt.sign 
     4. res to send roles and token
  5. /api/test/(user or mod or admin)
     1. middleware: authJwt to verify token
- [ ] Admin page
  - [ ] Edit Form
  - [ ] New Form
  - [ ] Delete  

## Unit Testing
- [ ] Use Jest
