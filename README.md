# personal_website_react

# UNDER CONSTRUCTION
This project is aiming to pratice the MERN Stack skills.
When finished, it can replace nmy current personal website from WordPress to React.

---
## Directory Explaination 
#### frontend: 
Host the frontend files using `create-react-app`

#### backend:
Host the backend files using `express` and `node.js`

#### fullsite
Combine the `build` frontend files into backend. 

---
## Technology used

#### Front-end
- [x] React.js

### Backend
- [x] Node.js
- [x] Express

### DB
- [x] mongo

### Functionality 
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
- [x] Admin page
  - [x] Edit Form
  - [x] Form Syle (dropdown, rich text)
  - [x] New Form
  - [x] Delete  
- [ ] Contact Form send email

### CI/CD
- [ ] Docker
- [ ] Deploy using git

### Unit Testing
- [ ] Use Jest

---
