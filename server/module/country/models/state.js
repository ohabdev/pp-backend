
const Schema = require('mongoose').Schema;

// State collection schema
const schema = new Schema({
    name: { 
        type: String 
    },
    // alpha 2
    countryCode: {
        type: String,
        index: true
    },
    countryId: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }
});

module.exports = schema;