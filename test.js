const mediumFeedParsed = require("./index");

mediumFeedParsed("coingeciyomu")
  .then(articles=>console.log({articles}))
  .catch(err=>console.error({err}));