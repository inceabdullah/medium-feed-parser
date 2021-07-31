const cheerio = require('cheerio');

module.exports = ({content, tag}) => {
    const $ = cheerio.load(content);
    switch (tag) {
        case 'img':
            try{
                const imgs = $(tag);
                const first = imgs[0];
                const att = first.attribs;
                const src = att.src;
                return src;
            } catch(err) {
                throw err;
            }
        case 'p':
            try{
                const pTags = $(tag);
                const data = [];
                pTags.each((i, item)=>{
                    if(item.next.name === "p" && item.children[0] && item.children[0].data) data.push(item.children[0].data);
                });
                const first = data[0];
                return first;
            } catch(err) {
                throw err;
            }
        default:
          return;
      }

}
