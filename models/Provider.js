// Provider.js
var mongoose = require('mongoose');
// Setup schema
var ProviderSchema = mongoose.Schema({
    CompanyName: {
        type: String,
        required: true
    },
    CompanyWebsite: {
        type: String,
        required: false
    },
    Email: {
        type: String,
        required: false
    },
    Mobile: {
        type: String,
        required: false
    },
    GSTNumber: {
        type: String,
        required: false
    },
    PANNumber: {
        type: String,
        required: false
    },
    ProfilePic: {
        type: String,
        required: false
    },
    AreaLocalityBuildingNumber: {
        type: String,
        required: false
    },
    City: {
        type: String,
        required: false
    },
    District: {
        type: String,
        required: false
    },
    State: {
        type: String,
        required: false
    },
    Country: {
        type: String,
        required: false
    },
    Currency: {
        type: String,
        required: false
    },
    CurrencySymbol: {
        type: String,
        required: false
    },

    Pincode: {
        type: String,
        required: false
    },
    Location: {
        type: { type: String },
        coordinates: [Number],
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

//adding 2dsphere index
ProviderSchema.index({ location: "2dsphere" });

// Export Provider model
var Provider = module.exports = mongoose.model('Provider', ProviderSchema);
