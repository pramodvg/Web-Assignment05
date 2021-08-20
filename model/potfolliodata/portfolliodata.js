const mongoose = require('mongoose');
const schema = mongoose.Schema;

const portfolioSchema = new schema(
    {
        title: { type: String, required: true },
        imglink: { type: String, required: true },
        link1: { type: String, required: true },
        link2: { type: String, required: true },
        author: { type: String, required: true },
    }
    , {
        timestamps: true
    }
);

const portfoliodata = mongoose.model('Portfoliodata', portfolioSchema)

exports.portfolioData = portfoliodata;