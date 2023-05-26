// Provider_Parking_Slots.js.js
var mongoose = require('mongoose');
// Setup schema
var Provider_Parking_Slots = mongoose.Schema({
    ProviderId: {
        type: String,
        required: true
    },
    FloorId: {
        type: String,
        required: true
    },
    SlotMarkerId: {
        type: String,
        required: true
    },
    SlotCode: {
        type: String,
        required: true
    },
    SlotNumber: {
        type: Number,
        required: true
    },
    SlotCodeNumber: {
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
    }
});
// Export Admin model
var Provider_Parking_Slots = module.exports = mongoose.model('Provider_Parking_Slots', Provider_Parking_Slots);
