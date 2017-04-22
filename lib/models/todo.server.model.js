const Mongoose = require('Mongoose');

const titleValidator = [
    (val) => {
        return val.length && val.length > 3 && val.length < 21;
    },
    'Title must be between 4 and 20 characters'
];

const noteValidator = [
    (val) => {
        return val.length && val.length > 9 && val.length < 151;
    },
    'Note must be between 10 and 150 characters'
];

const schema = new Mongoose.Schema({
    title: { type : String, required: true, validate: titleValidator },
    note: { type : String, required: true, validate: noteValidator },
    createdOn: { type: Date, default: Date.now }
});

module.exports = Mongoose.model('todo', schema);
