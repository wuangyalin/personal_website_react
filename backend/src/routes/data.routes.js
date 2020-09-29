import * as controller from "../controllers/data.controller";


const dataRoute = (app) => {

    app.get(
        "/api/personalinfo",
        controller.getPersonalInfo
    );

    app.post(
        "/api/personalinfo/:id/update",
        controller.updatePersonalInfo
    );

    app.get(
        "/api/projects",
        controller.getProjects
    )

    app.post(
        "/api/projects/:id/update",
        controller.updateProject
    );

    app.post(
        "/api/projects/add",
        controller.addProject
    );

    app.post(
        "/api/projects/:id/delete",
        controller.deleteProject
    );

};


export default dataRoute;