import mongoose from 'mongoose';
import { role } from './role';
import { user } from './user';
import { personalinfo } from './personalinfo';
import { project } from './project';

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = role;
db.user = user;
db.personalinfo = personalinfo;
db.project = project;

db.ROLES = ["user", "admin", "moderator"];

export default db;