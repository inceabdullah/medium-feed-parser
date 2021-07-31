const mediumJSON = require("./mediumJSON");
const contentParse = require("./contentParse");

module.exports = (username="coingeciyomu") => new Promise(async (resolve, reject)=>{
    const articles = await mediumJSON(username)
        .catch(reject);
    if (!articles) return;
    try {
        const result = articles.map(({
            title,
            link: url,
            content_encoded: content
        })=>({
            title,
            url,
            desc: contentParse({content, tag: "p"}),
            thumbnail: contentParse({content, tag: "img"})
        }));
        resolve(result);
    } catch(err) {
        reject(err);
    }
});
