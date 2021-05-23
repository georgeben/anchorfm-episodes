const http = require("https");
const parser = require("fast-xml-parser");

/**
 * @typedef Episode
 * @property {string} title Title of episode
 * @property {string} description Description of episode
 * @property {string} link URL of episode
 * @property {string} guid
 * @property {string} pubDate Date episode was published 
 */

/**
 * 
 * @param {string} rssUrl - RSS URL of your podcast
 * @returns {Promise<Episode[]>} episodes - Array of podcast episodes
 */
module.exports = function(rssUrl) {
  return new Promise((resolve, reject) => {
    http
      .get(rssUrl, (res) => {
        let data = [];
        res.on("data", (chunk) => data.push(chunk));
        res.on("end", () => {
          data = Buffer.concat(data).toString();
          const json = parser.parse(data);
          const episodes = Array.isArray(json.rss.channel.item) ? json.rss.channel.item : [json.rss.channel.item];

          resolve(episodes)
        });
      })
      .on("error", (err) => {
        console.log(
          "An error occurred while fetching episodes from Anchor FM",
          err,
        );
        reject(err);
      });
  });
};
