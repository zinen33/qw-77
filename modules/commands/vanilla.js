module.exports.config = {
	name: "vanilla",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "Random Hentai Photo Random",
	commandCategory: "nsfw",
	usages: "vanilla",
	cooldowns: 10
};

module.exports.run = async ({ api, event, Currencies }) => {
	const akaneko = require('akaneko');
  const fs = require('fs-extra');
  const request = require('request');
  const axios = require('axios');
var money = (await Currencies.getData(event.senderID)).money
	
      if(money < 100)  api.sendMessage("تحتاج 100 دولار لرؤية الصورة!",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})

		
  await akaneko.nsfw.hentai().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream(__dirname +"/cache/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("صورة هنتاي لعزيزي الساخن الويبر"),
         attachment: fs.createReadStream(__dirname + "/cache/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 100);                            })    
  }
                              }