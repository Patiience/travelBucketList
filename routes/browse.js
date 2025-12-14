const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FactComment = require('../schemas/factComment');

router.get("/", async (request, response) => {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    FactComment.find({}).then(factComments => {
        let browseContent = '';
        factComments.forEach(factComment => {
            browseContent += `<h2>${factComment.fact}</h2>`;
            factComment.comments.forEach(comment => {
                browseContent += `<p>- ${comment}</p>`;
            });
        });
        response.render("browsePage", { browseContent: browseContent });
        mongoose.disconnect();
    });
});

module.exports = router;