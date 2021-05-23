# AnchorFM Episodes

Easily retrieve the list of all a podcast episodes

### Installation
- Using npm
```bash
$ npm install anchorfm-episodes
```

### Usage
```js
const listAnchorEpisodes = require("anchorfm-episodes");

// Replace with your RSS feed url from anchor: https://help.anchor.fm/hc/en-us/articles/360027712351-Locating-your-Anchor-RSS-feed
const rssUrl = "YOUR_RSS_FEED_URL";
listAnchorEpisodes(rssUrl)
  .then((episodes) => {
    // Do whatever you want with your episodes e.g Embed on your site
  })
  .catch(console.error) // Handle any errors
```

### Author 
George Benjamin