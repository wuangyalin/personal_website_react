import db from "../models/index";

const PersonalInfo = db.personalinfo;
const Project = db.project;

const withDB = async (operations, res) => {
    try {
        await operations();
    } catch (error) {
        res.status(500).json({ message: 'Error', error });
    }
}


exports.getPersonalInfo = (req, res) => {
    withDB(async () => {
        PersonalInfo.find({}, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });
    }, res);
}

exports.updatePersonalInfo = async (req, res) => {
    withDB(async () => {
        const _id = req.params.id;
        const { icon, content, iconType, size } = req.body;
        const perosnalInfoToUpdate = await PersonalInfo.findById({ _id });
        perosnalInfoToUpdate.icon = icon ? icon : perosnalInfoToUpdate.icon;
        perosnalInfoToUpdate.content = content ? content : perosnalInfoToUpdate.content;
        perosnalInfoToUpdate.iconType = iconType ? iconType : perosnalInfoToUpdate.iconType;
        perosnalInfoToUpdate.size = size ? size : perosnalInfoToUpdate.size;
        await perosnalInfoToUpdate.save();
        res.json(perosnalInfoToUpdate);
    }, res);
}

exports.getProjects = async (req, res) => {
    withDB(async () => {
        const result = await Project.find({});
        res.json(result);
    }, res);
}

exports.updateProject = async (req, res) => {
    const _id = req.params.id;
    const { name, id, image, type, link, description, contribution, percentage } = req.body;
    withDB(async () => {
        const projectToUpdate = await Project.findById({ _id });
        projectToUpdate.id = id ? id : projectToUpdate.id;
        projectToUpdate.name = name ? name : projectToUpdate.name;
        projectToUpdate.image = image ? image : projectToUpdate.image;
        projectToUpdate.link = link ? link : projectToUpdate.link;
        projectToUpdate.type = type ? type : projectToUpdate.type;
        projectToUpdate.description = description ? description : projectToUpdate.description;
        projectToUpdate.contribution = contribution ? contribution : projectToUpdate.contribution;
        projectToUpdate.percentage = percentage ? percentage : projectToUpdate.percentage;

        await projectToUpdate.save();
        res.json(projectToUpdate);
    }, res);

}

exports.addProject = async (req, res) => {
    const { name, id, image, type, link, description, contribution, percentage } = req.body;

    const newProject = new Project({
        id: id,
        name: name,
        image: image,
        link: link,
        type: type,
        description: description,
        contribution: contribution,
        percentage: percentage,
    });
    withDB(async () => {
        await newProject.save();
        res.json(newProject);
    }, res);
}

exports.deleteProject = async (req, res) => {
    withDB(async () => {
        const _id = req.params.id;
        await Project.deleteOne({ _id: _id });
        res.json('done');
    })
}