import mongoose from 'mongoose';
import { role } from './role';
import { user } from './user';

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = role;
db.user = user;

db.ROLES = ["user", "admin", "moderator"];

export default db;