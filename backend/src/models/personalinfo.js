import mongoose from 'mongoose';

const Schema = mongoose.Schema;


// Create Schema
export const personalinfo = mongoose.model(
    "PersonalInfo",
    new Schema({
        type: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        iconType: {
            type: String,
            default: 'fas'
        },
        size: {
            type: String,
            default: '1x'
        }
    }),
    'personalinfo'
);
