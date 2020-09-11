# personal_website_react

# UNDER CONSTRUCTION
This project is aiming to pratice the MERN Stack skills.
When finished, it can replace nmy current personal website from WordPress to React.

---
## Directory Explaination 
#### frontend: 
Host the frontend files using `create-react-app`

**Docker added**: if you want to run on localhost, you have to do the following things:
1. change the `"proxy": "http://backend:8000/"` to `"proxy": "http://localhost:8000/"`

#### backend:
Host the backend files using `express` and `node.js`

**Docker added**: if you want to run on localhost, you have to do the following things:
1. In `server.js`, change the `mongodb://mongo:27017` to `mongodb://localhost:27017`

#### fullsite

Combined the `build` frontend files into backend, no docker setup, so you have to have your own mongo client installed and import the initial files under `mongo-seed` directory. 


#### mongo-seed
for docker container: add the default data into mongo docker client.

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

## How to Run Docker
1. create dockerfile for each app
2. create docker-compose yml file to combine multiple services
3. run `docker-compose up -d mongo` first to initial mongodb
4. run `docker-compose up -d mongo-seed` to add initial data into mongodb
5. run `docker exec -it mongo bash` to check if the initial data is been pushed
6. run `docker-compose up -d backend` to run the web app
7. run `docker-compose up -d frontend` to run the web app
