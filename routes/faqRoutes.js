const express = require("express");
const FAQ = require("../models/FAQ");
const translate = require("../utils/translate");
const redisClient = require("../utils/redis");

const router = express.Router();

// Fetch FAQs
router.get("/", async (req, res) => {
  const lang = req.query.lang || "en";

  // Check Redis Cache
  const cacheKey = `faqs_${lang}`;
  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) return res.json(JSON.parse(cachedData));

  // Fetch from DB
  const faqs = await FAQ.find();
  const translatedFAQs = faqs.map(faq => ({
    question: lang === "en" ? faq.question : faq.translations[`question_${lang}`] || faq.question,
    answer: lang === "en" ? faq.answer : faq.translations[`answer_${lang}`] || faq.answer
  }));

  await redisClient.set(cacheKey, JSON.stringify(translatedFAQs), "EX", 3600);
  res.json(translatedFAQs);
});

// Add FAQ
router.post("/", async (req, res) => {
  const { question, answer } = req.body;
  const translations = await translate(question, answer);
  const newFAQ = new FAQ({ question, answer, translations });
  await newFAQ.save();
  res.json(newFAQ);
});

module.exports = router;
