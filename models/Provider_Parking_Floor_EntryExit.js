// Provider_Parking_Floors_Services.js.js
var mongoose = require('mongoose');
// Setup schema
var Provider_Parking_Floor_EntryExit = mongoose.Schema({
    ProviderId: {
        type: String,
        required: true
        },
    FloorId: {
            type: String,
            required: true
            },
    TypeOfGate: {
        type: String,
        required: true
    },
    GateName: {
        type: String,
        required: true
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
// Export Provider_Parking_Floor_EntryExit model
var Provider_Parking_Floor_EntryExit = module.exports = mongoose.model('Provider_Parking_Floor_EntryExit', Provider_Parking_Floor_EntryExit);