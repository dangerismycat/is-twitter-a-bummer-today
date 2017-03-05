const AYLIENTextAPI = require('aylien_textapi');

const { AYLIEN } = require('./config');


const textapi = new AYLIENTextAPI({
  application_id: AYLIEN.APP_ID,
  application_key: AYLIEN.KEY,
});

function getSentimentAnalysis(text) {
  return new Promise((resolve, reject) => {
    return textapi.sentiment({ text, mode: 'tweet' }, (err, response) => {
      if (err) {
        reject(err);
      }
      resolve(response.polarity);
    });
  });
}

module.exports = {
  getSentimentAnalysis,
};
