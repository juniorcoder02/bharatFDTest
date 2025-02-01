const axios = require("axios");

async function translate(question, answer) {
  const languages = ["hi", "bn"];
  let translations = {};

  for (const lang of languages) {
    try {
      const translatedQuestion = await axios.get(`https://api.mymemory.translated.net/get?q=${question}&langpair=en|${lang}`);
      const translatedAnswer = await axios.get(`https://api.mymemory.translated.net/get?q=${answer}&langpair=en|${lang}`);
      translations[`question_${lang}`] = translatedQuestion.data.responseData.translatedText;
      translations[`answer_${lang}`] = translatedAnswer.data.responseData.translatedText;
    } catch (error) {
      translations[`question_${lang}`] = question;
      translations[`answer_${lang}`] = answer;
    }
  }
  return translations;
}

module.exports = translate;
