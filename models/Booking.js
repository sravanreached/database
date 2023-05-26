// AdminModel.js
var mongoose = require('mongoose');
// Setup schema
var bookingSchema = mongoose.Schema({

    Provider_name: { 
        type: String, 
        required: true,
    },
    Providerid: { 
        type: String, 
        required: true,
    },
    Address: { 
        type: String, 
        required: true,
    },
    Ticket_number: {
        type: String, 
        required: true,
    },
    Ticket_type: {
        type: String,
        enum: ['DAILY','WEEKLY', 'MONTHLY'],
        default: 'DAILY'
    },
    Slotid: { 
        type: String, 
        required: true,
    },
    Slot: { 
        type: String, 
        required: true,
    },
    Floorid: { 
        type: String, 
        required: true,
    },
    Floor: { 
        type: String, 
        required: true,
    },
    Selected_time: {
        type: Number, 
        required: true,
    },
    Expaired_at: {
        type: Date,
        required: true,
    },
    CheckIn: { 
        type: Date, 
    },
    CheckOut: { 
        type: Date,
    },
    Service: [{
        serviceid: {type: String},
        name: {type: String},
        price: {type: Number}
    }],
    Parking_fair: { 
        type: Number,
        default: 0,
    },
    Total_fair: {
        type: Number,
        default: 0,
    },
    Status:{
        type: String,
        enum: ['BOOKED','PARKED', 'EXPIRED','FAILED'],
        default: 'BOOKED'
    },
    IsExtended:{
        type: Boolean,
        default: false,
    },
    Createdby: {
        type: String,
    }, 
    Modifiedby: {
        type: String,
    },
},{
    timestamps: {
        createdAt: 'Created_date',
        updatedAt: 'Modified_date',
    },
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
            delete ret.Created_date;
            delete ret.Modified_date;
        }
    },
});

bookingSchema.index({
    Provider_id: 1,
    Createdby: 1,
    Status: 1,
});
// Export Admin model
module.exports = mongoose.model('Booking', bookingSchema);
