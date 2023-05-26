// AdminModel.js
var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
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
    OTP: {
        type: String,
        required: true
    },
    IsOTP_verifed: {
        type: Boolean,
        default: false
    },
    Expire_otp: {
        type: Date,
    },
    Role: {
        type: String,
        required: true
    },
    Photo: { 
        type:String 
    },
    Wallet_balance:{
        type: Number,
        default: 0,
    },
    Card_details: [
        {
            Card_no: { type:String },
            Expire_date: { type:String },
            Card_holder_name: { type:String },
            Upi:{ type: String}
        }
    ],
    Status: {
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
},{
    timestamps: {
        createdAt: 'Created_date',
        updatedAt: 'Modified_date',
    },
    toJSON: {
        transform(doc, ret){
            delete ret.OTP;
            delete ret.IsOTP_verifed;
            delete ret.Expire_otp;
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

userSchema.index({
    Mobile: 1,
}, {
    unique: 1,
});
// Export Admin model
module.exports = mongoose.model('User', userSchema);
