module.exports.config = {
	name: "كلب",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐊𝐈𝐓𝐄 凧",
	description: "صور كلاب",
	commandCategory: "Edit-IMG",
	usages: "كلب [نص]",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://nekos.life/api/v2/img/woof').then(res => {
	let ext = res.data.file.substring(res.data.file.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/dog.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dog.${ext}`), event.messageID);
				};
				request(res.data.file).pipe(fs.createWriteStream(__dirname + `/cache/dog.${ext}`)).on("close", callback);
			})
  }