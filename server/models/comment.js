/**
 * Created by zhenglu on 12/13/16.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let commentSchema = new Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    id: { type: String, default: String(Date.now()), unique: true }
});

module.exports = mongoose.model('Comment', commentSchema);
