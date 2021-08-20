const mongoose = require('mongoose');
const schema = mongoose.Schema;

const serviceSchema = new schema(
    {
        title1: { type: String, required: true },
        title2: { type: String, required: true },
        description: { type: String, required: true },
    }
    , {
        timestamps: true
    }
);

const Servicedata = mongoose.model('Servicedata', serviceSchema)

exports.serviceData = Servicedata;