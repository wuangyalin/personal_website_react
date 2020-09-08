import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const role = mongoose.model(
    "Role",
    new Schema({
        name: String
    })
);