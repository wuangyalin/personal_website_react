import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

const withDB = async (operations,res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db('personal');
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/personalinfo', async (req, res) =>{
    withDB(async (db) => {
        const personalinfo = await db.collection('personalinfo').find({}).toArray();
        res.status(200).json(personalinfo);
    },res);
});

app.get('/api/projects', async (req, res) =>{
    withDB(async (db) => {
        const projects = await db.collection('projects').find({}).toArray();
        res.status(200).json(projects);
    },res);
});


app.get('/api/projectlist', async (req, res) =>{
    withDB(async (db) => {
        const projectlist = await db.collection('projectlist').find({}).toArray();
        res.status(200).json(projectlist);
    },res);
});

app.get('/api/sections', async (req, res) =>{
    withDB(async (db) => {
        const sections = await db.collection('sections').find({}).toArray();
        res.status(200).json(sections);
    },res);
});

app.get('/api/skills', async (req, res) =>{
    withDB(async (db) => {
        const skills = await db.collection('skills').find({}).toArray();
        res.status(200).json(skills);
    },res);
});

app.get('/api/socials', async (req, res) =>{
    withDB(async (db) => {
        const socials = await db.collection('socials').find({}).toArray();
        res.status(200).json(socials);
    },res);
});


app.listen(7000, () => console.log('listening on port 7000'));