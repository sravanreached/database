// Provider_Parking_Floors_Services.js.js
var mongoose = require('mongoose');
// Setup schema
var Provider_Parking_Floors_Services = mongoose.Schema({
    ProviderId: {
        type: String,
        required: true
        },
    FloorId: {
            type: String,
            required: true
            },
    NameOfService: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: false
    },
    Price: {
        type: Number,
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
// Export Admin model
var Provider_Parking_Floors_Services = module.exports = mongoose.model('Provider_Parking_Floors_Services', Provider_Parking_Floors_Services);