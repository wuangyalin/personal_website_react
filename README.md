# personal_website_react

# UNDER CONSTRUCTION
This project is aiming to pratice the MERN Stack skills.
When finished, it can replace my current personal website from WordPress to React.

* **WORDPRESS** VERSION: https://lukegong.com (hosted on CPANEL)
* **MERN** VERSION: http://ec2-3-25-135-244.ap-southeast-2.compute.amazonaws.com/  (hosted on AWS EC2 instance)

---
### For docker integration, checkout branch `docker`

---
## Directory Explaination 

#### frontend: 
Host the frontend files using `create-react-app`

#### backend:
Host the backend files using `express` and `node.js`

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
- [x] Docker (checkout another branch `docker`)
- [x] Deploy using git
- [x] Deploy using Travis (checkout another branch `docker`)

### Unit Testing
- [ ] Use Jest

---

## How to Run Docker
1. Checkout `docker` branch.
2. Check dockerfile for each app
3. Check docker-compose yml file to combine multiple services
4. run `docker-compose up -d mongo` first to initial mongodb
5. run `docker-compose up -d mongo-seed` to add initial data into mongodb
6. run `docker exec -it mongo bash` to check if the initial data is been pushed
7. run `docker-compose up -d backend` to run the web app
8. run `docker-compose up -d frontend` to run the web app
