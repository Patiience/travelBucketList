const mongoose = require(mongoose);
const factCommentSchema = new mongoose.Schema({
    url: String,
    comments: String
})

module.exports = mongoose.model('FactComment', factCommentsSchema);