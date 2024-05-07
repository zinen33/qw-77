module.exports.config = {
name: "كلمات",
version: "1.0.0",
hasPermssion: 0,
credits: "ƤӇƠƬƠƝ 𖠰",
description: "عرض كلمات مع الصورة المصغرة",
commandCategory: "وسائط",
usages: "[اسم الاغنية]",
cooldowns: 2
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
        let juswa = args.join(" ");
	const res = await axios.get(`https://api.reikomods.repl.co/sus/lyrics?lyrics=${juswa}`);
      	console.log(res.data);
	var data = res.data;
      let callback = function() {
            return api.sendMessage({
                body:`العنوان: ${data.title}\nالفنان: ${data.artist}\nالكلمات:\n\n${data.lyrics}`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), messageID);
        };
		return request(encodeURI(data.img)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        return console.log(`[ERR]: ${err}`)
    }
}