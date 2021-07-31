const { parse } = require('rss-to-json');

module.exports = (username) => new Promise((resolve, reject)=>{
    const MEDIUM_URL = "https://medium.com/feed/@" + username;
    parse(MEDIUM_URL)
        .then(rss=>{
            if(rss.items) return resolve(rss.items);
            resolve(rss);
        })
        .catch(reject);
});
