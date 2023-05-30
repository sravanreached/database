var mongoose = require('mongoose');
// Setup schema
var gatemanSchema = mongoose.Schema({
    ProviderId: {
        type: String,
        required: true,
    },
    FirstName: {
        type: String,
        trim: true,
    },
    LastName: {
        type: String,
        trim: true,
    },
    Email: {
        type: String,
        unique: true,
        trim: true,
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
    Photo: {
        type: String
    },
    IsActive: {
        type: Boolean,
        default: true
    },
    Createdby: {
        type: String,
    },
    Modifiedby: {
        type: String,
    },
    LastLoggedIn_date: {
        type: Date
    },
    LastLoggedOut_date: {
        type: Date
    },
}, {
    timestamps: {
        createdAt: 'Created_date',
        updatedAt: 'Modified_date',
    },
    toJSON: {
        transform(doc, ret) {
            delete ret.Password;
            delete ret.IsActive;
            delete ret.Role;
            delete ret.__v;
            delete ret.Created_date;
            delete ret.Modified_date;
            delete ret.Createdby;
            delete ret.Modifiedby;
            delete ret.LastLoggedIn_date;
            delete ret.LastLoggedOut_date;
        }
    },
});

gatemanSchema.index({ Mobile: 1 }, { unique: 1 });
gatemanSchema.index({ Email: 1 }, { unique: 1 });

// Export Admin model
module.exports = mongoose.model('Gateman', gatemanSchema);
