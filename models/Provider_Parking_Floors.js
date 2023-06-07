// Provider_Parking_Floors.js
var mongoose = require('mongoose');
// Setup schema
var Provider_Parking_Floors = mongoose.Schema({
    ProviderId: {
        type: String,
        required: true
    },
    FloorName: {
        type: String,
        required: true
    },
    TypeOfParking: {
        type: String,
        required: false
    },
    Capacity: {
        type: Number,
        required: false
    },
    NoOfBlocks: {
        type: Number,
        required: false
    },
    FloorMapImage: {
        type: String,
        required: false
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
    }
});
// Export Provider_Parking_Floors model
var Provider_Parking_Floors = module.exports = mongoose.model('Provider_Parking_Floors', Provider_Parking_Floors);
