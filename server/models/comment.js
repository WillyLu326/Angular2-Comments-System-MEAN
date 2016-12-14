/**
 * Created by zhenglu on 12/13/16.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let commentSchema = new Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
