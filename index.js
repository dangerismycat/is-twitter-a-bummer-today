const Twit = require('twit');
const { countBy, reject } = require('lodash');

const { TWITTER } = require('./config');
const AYLIEN = require('./aylien');

const T = new Twit({
  consumer_key: TWITTER.API_KEY,
  consumer_secret: TWITTER.API_SECRET,
  access_token: TWITTER.ACCESS_TOKEN,
  access_token_secret: TWITTER.ACCESS_SECRET,
});

const stream = T.stream('statuses/sample');


T.get('statuses/home_timeline', { count: 50 })
.catch((err) => console.error(err))
.then((result) => result.data)
.then((data) => {
  const actions = data.map((tweet) => AYLIEN.getSentimentAnalysis(tweet.text));
  const results = Promise.all(actions);
  results.then((data) => {
    const sentiments = countBy(data);
    delete sentiments.neutral;
    return sentiments;
  })
  .then((results) => {
    const diff = Math.abs(results.negative - results.positive);

    if (diff === 0) {
      console.log('Your feed is pretty neutral right now');
      return;
    }

    let modifier = 'somewhat';
    if (diff < 3) {
      modifier = 'a little';
    }
    if (diff > 6) {
      modifier = 'hella';
    }

    const sentiment = Object.keys(results)[0];
    console.log(`Your feed is ${modifier} ${sentiment} right now`);
  });
})
