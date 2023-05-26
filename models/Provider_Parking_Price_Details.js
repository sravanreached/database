// Provider_Parking_Price_Details.js
var mongoose = require('mongoose');
// Setup schema
var Provider_Parking_Price_Details = mongoose.Schema({
    ProviderId: {
        type: String,
        required: true
    },
    FloorId: {
        type: String,
        required: true
    },
    Time: {
        type: Number,
        required: true
    },
    Price: {
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
// Export Provider_Parking_Price_Details model
var Provider_Parking_Price_Details = module.exports = mongoose.model('Provider_Parking_Price_Details', Provider_Parking_Price_Details);
