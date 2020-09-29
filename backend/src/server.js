import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';
import mongoose from 'mongoose';
import db from './models/index';
import authRoute from './routes/auth.routes';
import dataRoute from './routes/data.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/** AUTH */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/personal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
}).catch(err => {
    console.error("Connection error", err);
    process.exit();
});

const Role = db.role;

authRoute(app);
dataRoute(app);

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}


/** AUTH END */

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('personal');
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

// get project types 
app.get('/api/projectlist', async (req, res) => {
    withDB(async (db) => {
        const projectlist = await db.collection('projectlist').find({}).toArray();
        res.status(200).json(projectlist);
    }, res);
});


// get the homepage sections
app.get('/api/sections', async (req, res) => {
    withDB(async (db) => {
        const sections = await db.collection('sections').find({}).toArray();
        res.status(200).json(sections);
    }, res);
});


// get the homepage sections
app.get('/api/sections/:section', async (req, res) => {
    const section = req.params.section;
    withDB(async (db) => {
        const result = await db.collection('sections').find({ id: section }).toArray();
        res.status(200).json(result);
    }, res);
});

// update section by id
app.post('/api/sections/:id/update', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const { name, description, image, id } = req.body;

    withDB(async (db) => {
        const typeToUpdate = await db.collection('sections').findOne({ _id: _id });

        await db.collection('sections').updateOne({ _id: _id }, {
            '$set': {
                id: id ? id : typeToUpdate.id,
                name: name ? name : typeToUpdate.name,
                image: image ? image : typeToUpdate.image ? typeToUpdate.image : '',
                description: description ? description : typeToUpdate.description ? typeToUpdate.description : '',
            }
        });

        res.status(200).json({ success: true });

    }, res);

});

// get the tech skills
app.get('/api/skills', async (req, res) => {
    withDB(async (db) => {
        const skills = await db.collection('skills').find({}).toArray();
        res.status(200).json(skills);
    }, res);
});

// update skill by id
app.post('/api/skills/:id/update', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const { name, id, content, icon, iconType, size } = req.body;

    withDB(async (db) => {
        const typeToUpdate = await db.collection('skills').findOne({ _id: _id });

        await db.collection('skills').updateOne({ _id: _id }, {
            '$set': {
                id: id ? id : typeToUpdate.id,
                name: name ? name : typeToUpdate.name,
                content: content ? content : typeToUpdate.content,
                icon: icon ? icon : typeToUpdate.icon,
                iconType: iconType ? iconType : typeToUpdate.iconType,
                size: size ? size : typeToUpdate.size,
            }
        });
        res.status(200).json({ success: true });
    }, res);
});

// delete skill
app.post('/api/skills/:id/delete', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    withDB(async (db) => {
        await db.collection('skills').deleteOne({ _id: _id });
        res.status(200).json('success');
    }, res);
    res.status(200).json({ success: true });
});

// add skill
app.post('/api/skills/add', async (req, res) => {
    const { name, id, content, icon, iconType, size } = req.body;
    withDB(async (db) => {
        const newProject = {
            id: id,
            name: name,
            content: content,
            icon: icon ? icon : 'html5',
            iconType: iconType ? iconType : 'fab',
            size: size ? size : '4x',
        };
        await db.collection('skills').insertOne(newProject);

        res.status(200).json({ success: true });
    }, res);
});

// get the social contacts
app.get('/api/socials', async (req, res) => {
    withDB(async (db) => {
        const socials = await db.collection('socials').find({}).toArray();
        res.status(200).json(socials);
    }, res);
});

// update social contact by id
app.post('/api/socials/:id/update', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const { name, id, link, icon, iconType, size } = req.body;

    withDB(async (db) => {
        const typeToUpdate = await db.collection('socials').findOne({ _id: _id });

        await db.collection('socials').updateOne({ _id: _id }, {
            '$set': {
                id: id ? id : typeToUpdate.id,
                name: name ? name : typeToUpdate.name,
                link: link ? link : typeToUpdate.link,
                icon: icon ? icon : typeToUpdate.icon,
                iconType: iconType ? iconType : typeToUpdate.iconType,
                size: size ? size : typeToUpdate.size,
            }
        });
        const updatedTypeToUpdate = await db.collection('socials').findOne({ _id: _id });
        res.status(200).json(updatedTypeToUpdate);
    }, res);
});

// delete social contact
app.post('/api/socials/:id/delete', async (req, res) => {
    const _id = new ObjectId(req.params.id);
    withDB(async (db) => {
        await db.collection('socials').deleteOne({ _id: _id });
        res.status(200).json('success');
    }, res);
});

// add social contact
app.post('/api/socials/add', async (req, res) => {
    const { name, id, link, icon, iconType, size } = req.body;
    withDB(async (db) => {
        const newProject = {
            id: id,
            name: name,
            link: link,
            icon: icon ? icon : 'html5',
            iconType: iconType ? iconType : 'fab',
            size: size ? size : '4x',
        };
        await db.collection('socials').insertOne(newProject);

        res.status(200).json('success');
    }, res);
});

app.listen(8000, () => console.log('listening on port 8000'));