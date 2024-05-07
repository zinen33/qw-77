module.exports.config = {
    name: "777",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Binee",
    description: "اطلب نفس الفاكهة: 33",
    commandCategory: "game",
    usages: "[عدد العملات المطلوب وضعها]",
    cooldowns: 5,
};

module.exports.languages = {
    "vi": {
        "missingInput": "[ SLOT ] Số tiền đặt cược không được để trống hoặc là số âm",
        "moneyBetNotEnough": "[ SLOT ] Số tiền bạn đặt lớn hơn hoặc bằng số dư của bạn!",
        "limitBet": "[ SLOT ] Số coin đặt không được dưới 50$!",
        "returnWin": "🎮 %1 | %2 | %3 🎮\nBạn đã thắng với %4$",
        "returnLose": "🎮 %1 | %2 | %3 🎮\nBạn đã thua và mất %4$"
    },
    "en": {
        "missingInput": "[ SLOT ] يجب ألا يكون مبلغ الرهان فارغًا أو رقمًا سالبًا",
        "moneyBetNotEnough": "[ SLOT ] الأموال التي راهنت بها أكبر من رصيدك!",
        "limitBet": "[ SLOT ] رهانك منخفض جدًا ، الحد الأدنى هو 50 دولارًا",
        "returnWin": "🎮 %1 | %2 | %3 🎮\nلقد فزت مع %4$",
        "returnLose": "🎮 %1 | %2 | %3 🎮\nلقد خسرت وخسرت %4$"
    }
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const slotItems = ["🍇", "🍉", "🍊", "🍏", "7⃣", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽"];
    const moneyUser = (await getData(senderID)).money;

    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
	if (moneyBet > moneyUser) return api.sendMessage(getText("moneyBetNotEnough"), threadID, messageID);
	if (moneyBet < 50) return api.sendMessage(getText("limitBet"), threadID, messageID);
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(getText("returnWin", slotItems[number[0]], slotItems[number[1]], slotItems[number[2]], moneyBet), threadID, messageID);
            await increaseMoney(senderID, moneyBet);
            break;
        }
        case false: {
            api.sendMessage(getText("returnLose", slotItems[number[0]], slotItems[number[1]], slotItems[number[2]], moneyBet), threadID, messageID);
            await decreaseMoney(senderID, moneyBet);
            break;
        }
    }
      }