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
    Photo: {
        type: String
    },
    Wallet_balance: {
        type: Number,
        default: 0,
    },
    Card_details: [
        {
            Card_no: { type: String },
            Expire_date: { type: String },
            Card_holder_name: { type: String },
            Upi: { type: String }
        }
    ],
    IsActive: {
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
            delete ret.OTP;
            delete ret.IsOTP_verifed;
            delete ret.IsEmail_verifed;
            delete ret.Expire_otp;
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

AdminSchema.index({ Email: 1 }, { unique: 1 });
AdminSchema.index({ Mobile: 1 }, { unique: 1 });
// Export Admin model
var Admin = module.exports = mongoose.model('Admin', AdminSchema);
