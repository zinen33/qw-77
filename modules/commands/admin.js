module.exports.config = {
￼
	name: "المطور",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "ZINo", //don't change the credits please
	description: "معلومات البوت و المطور",
	commandCategory: "المطور",
	cooldowns: 1,
	Dépendances : 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/JOfDmVg.jpg",
];
var callback = () => api.sendMessage({body:`➢معلومات البوت و الأدمن 🔥🇩🇿

⁂إسمي زيرو: ${global.config.BOTNAME}

إستعمله قبل كل أمر: ${global.config.PREFIX}

صانع البوت: Zino
 رابط حساب المطور: https://www.facebook.com/mokh.tar.186590

➟سيرفر البوت✅

✬اليوم: ${juswa} 

➳تم تشغيل البوت على  ${hours}:${minutes}:${seconds}.

✫شكرا على إستعمالي ${global.config.BOTNAME} بوت✅!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
   