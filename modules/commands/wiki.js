module.exports.config = {
	name: "wiki",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "wikipedia search",
	commandCategory: "information",
	usages: "[en] [Information to look for]",
	cooldowns: 1,
	dependencies: {
        "wikijs": ""
    }
}

module.exports.languages = {
    "en": {
        "missingInput": `اكتب عن ماذا تريد البحث\n\nطريقة الاستخدام?\n${global.config.PREFIX} wiki متبوعة بكلمة البحث \nمثال:\n${global.config.PREFIX}wiki اليابان\n\n صنع بواسطة: MAJD`,
        "returnNotFound": "لا يوجد نتيجة عن %1"
    }
}

module.exports.run = ({ event, args, api, getText }) => {
    const wiki = (global.nodemodule["wikijs"]).default;
    let content = args.join(" ");
    let url = 'https://ar.wikipedia.org/w/api.php';
    if (args[0] == "en") {
        url = 'https://ar.wikipedia.org/w/api.php'; 
        content = args.slice(1, args.length);
    }
    if (!content) return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
    return wiki({ apiUrl: url }).page(content).catch(() => api.sendMessage(getText("returnNotFound", content), event.threadID, event.messageID)).then(page => (typeof page != 'undefined') ? Promise.resolve(page.summary()).then(val => api.sendMessage(val, event.threadID, event.messageID)) : '');

          }