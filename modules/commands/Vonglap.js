module.exports.config = {
name: "سبام",
	version: "Beta",
	hasPermssion: 2,
	credits: "𝐊𝐈𝐓𝐄 凧",
	description: "ارسال رسائل عشوائية",
	commandCategory: "test",
	usages: "spam",
	cooldowns: 5,
	dependencies: "",
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*vonglap
	
for (i = 0; i < 100; i++) {
 k("🖕🏻");
}
	
	}
	