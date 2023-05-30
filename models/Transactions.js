// AdminModel.js
var mongoose = require('mongoose');
// Setup schema
const transactionSchema = new mongoose.Schema({
    RazorpayPaymentId: {
        type: String,
    },
    RazorpayOrderId: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required: true,
    },
    Currency: {
        type: String,
        required: true,
    },
    Method: {
        type: String,
    },
    Email: {
        type: String,
    },
    Contact: {
        type: String,
    },
    RazorpayStatus: {
        type: String,
        required: true,
    },
    Createdby: {
        type: String,
    },
    Modifiedby: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: 'Created_date',
        updatedAt: 'Modified_date',
    },
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            delete ret.Created_date;
            delete ret.Modified_date;
            delete ret.Createdby;
            delete ret.Modifiedby;
        }
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);
