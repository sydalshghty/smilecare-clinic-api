const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'name must be required']
        },
        phone: {
            type: String,
            trim: true,
            required: [true, 'phone number must be required'],
            unique: [true, 'phone number is unique'],
            minlength: [11, 'Phone number is uncorrect']
        },
        subject: {
            type: String,
            trim: true,
            required: [true, 'subject message must be required']
        },
        message: {
            type: String,
            trim: true,
            required: [true, 'message must be required']
        }
    },
    { timestamps: true }
);

const messagesModel = mongoose.model('messagesModel', messagesSchema);

module.exports = messagesModel;