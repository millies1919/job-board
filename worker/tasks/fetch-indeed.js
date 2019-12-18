var fetch = require('node-fetch');
var redis = require('redis'),
  client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = 'http://api.indeed.com/ads/apisearch';

async function fetchIndeed() {
  console.log('fetching Indeed');
}
