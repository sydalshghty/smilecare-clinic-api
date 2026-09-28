const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Name must be required'],
            minlength: [3, 'Too short name']
        },
        slug: {
            type: String,
            lowercase: true
        },
        phone: {
            type: String,
            required: [true, 'phone number must be required'],
            unique: [true, 'phone number is unique'],
            trim: true
        },
        email: {
            type: String,
            unique: [true, 'email is unique'],
            trim: true
        },
        serviceType: {
            type: String,
            required: [true, 'service type must be required'],
            trim: true
        },
        dateOrder: {
            type: String,
            required: [true, 'date order is required']
        },
        timeOrder: {
            type: String,
            required: [true, 'time order is required'],
            trim: true,
        },
        doctor: {
            type: String,
            trim: true
        },
        notes: {
            type: String,
        }
    },
    { timestamps: true }
)

const ordersModel = mongoose.model('ordersModel', ordersSchema);

module.exports = ordersModel;