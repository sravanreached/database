// Provider_Parking_SlotsMarker.js
var mongoose = require('mongoose');
// Setup schema
var Provider_Parking_SlotsMarker = mongoose.Schema({
    ProviderId: {
        type: String,
        required: true
    },
    FloorId: {
        type: String,
        required: true
    },
    SlotCode: {
        type: String,
        required: true
    },
    Start: {
        type: Number,
        required: true
    },
    End: {
        type: Number,
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
// Export Provider_Parking_SlotsMarker model
var Provider_Parking_SlotsMarker = module.exports = mongoose.model('Provider_Parking_SlotsMarker', Provider_Parking_SlotsMarker);
