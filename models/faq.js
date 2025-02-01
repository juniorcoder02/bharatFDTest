const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    question_hi: String,
    answer_hi: String,
    question_bn: String,
    answer_bn: String,
  }
});

module.exports = mongoose.model("FAQ", FAQSchema);
