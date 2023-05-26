// AdminModel.js
var mongoose = require('mongoose');
// Setup schema
var AdminSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    Status: {
        type: Boolean,
        default: true
    },
    Createdby: {
        type: String,
        required: false
    },
    Modifiedby: {
        type: String,
        required: false
    },
    Modified_date: {
        type: Date,
        default: new Date(new Date().toUTCString())
    },
    Created_date: {
        type: Date,
        default: new Date(new Date().toUTCString())
    },
    LastLoggedIn_date: {
        type: Date
    },
    LastLoggedOut_date: {
        type: Date
    },
});
// Export Admin model
var Admin = module.exports = mongoose.model('Admin', AdminSchema);
