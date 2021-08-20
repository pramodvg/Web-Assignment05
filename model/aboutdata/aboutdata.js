const mongoose = require('mongoose');
const schema = mongoose.Schema;

const aboutSchema = new schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
    }
    , {
        timestamps: true
    }
);

const aboutdata = mongoose.model('Aboutdata', aboutSchema)

exports.aboutData = aboutdata;