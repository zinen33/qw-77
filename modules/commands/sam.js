module.exports.config = {
	name: "سام",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoài Bảo",
	description: "يوم عيد ميلادي > هيج حطيته زيادة",
	commandCategory: "اشياء",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("March 16, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「عيد ميلاد سام」\n» ${days} يوم و ${hours} ساعة و ${minutes} دقيقة , ${seconds} ثانية «`, event.threadID, event.messageID);
} 