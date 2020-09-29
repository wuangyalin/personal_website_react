import mongoose from 'mongoose';

const Schema = mongoose.Schema;


// Create Schema
export const project = mongoose.model(
    "Project",
    new Schema({
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        type: {
            type: [String],
        },
        link: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        contribution: {
            type: String,
            required: true
        },
        percentage: {
            type: Number,
            default: 100
        }
    }),
    'projects'
);
