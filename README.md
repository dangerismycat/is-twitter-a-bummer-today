# Is Twitter a Bummer Today?
This is a simple Node app that reads the 50 most recent tweets on your feed and uses the AYLIEN API to perform sentiment analysis to tell you if your feed is more negative or positive right now.

To run, you'll need to supply your own API keys (see below) and then just run `node index` in the project directory. After a few seconds, it'll spit out a result for you. Woo!


# API KEYS

You'll need to supply your own API keys for Twitter and AYLIEN, stored in a `config.js` file. (This app isn't really configured for "production".) Use this format, or modify if you like:
```
const AYLIEN = {
  APP_ID: AYLIENAPPID,
  KEY: AYLIENKEY,
};

const TWITTER = {
  API_KEY: TWITTERAPIKEY,
  API_SECRET: TWITTERAPISECRET,
  ACCESS_TOKEN: TWITTERACCESSTOKEN,
  ACCESS_SECRET: TWITTERACCESSSECRET,
};
```
