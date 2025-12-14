const mongoose = require(mongoose);
const factCommentSchema = new mongoose.Schema({
    fact: String,
    comments: [String]
})

module.exports = mongoose.model('FactComment', factCommentSchema);