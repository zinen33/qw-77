function convert(time){
  var date = new Date(`${time}`);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var formattedDate = `${ day < 10 ? "0" + day : day}` + "/" +`${ month < 10 ? "0" + month : month}` + "/" + year + "||" + `${ hours < 10 ? "0" + hours : hours}` + ":" + `${ minutes < 10 ? "0" + minutes : minutes}` + ":" + `${ seconds < 10 ? "0" + seconds : seconds}`;
  return formattedDate;
};

const headers = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
  "accept": "application/json, text/plain, /"
};

module.exports.config = {
  name: "معلوماتي",
  version: "0.0.1",
  hasPermsion: 0,
  credits: "Arjhil",
  description: "الحصول على معلومات حسابك👤",
  usePrefix: true,
  usages: "[reply/uid/@mention]",
  commandCategory: "info",
  usePrefix: true,
  cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
  const request = require("request");
  const axios = require("axios");
  const fs = require("fs");
  let path = __dirname + `/cache/ArjhilPogi1.png`;
  let token = "EAAD6V7os0gcBO9SgxkRcKCUatcjQV3G2AZB0qk75EGFFSMX94BRYXYvnvDgYoftExLIBISF14QvbMUiJgbTsbsqpRBAI903yDQztOdqPBJJxcIcCXVA9ywUu2FFs4yqEsa6ZAur9P6ACFFWbclQEzzY6HNNtn7xIZCSNHWpWL7WxPBajhPoDmOSFwZDZD"; 

  if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
  else var id = args[0] || event.senderID;
  if(event.type == "message_reply") { var id = event.messageReply.senderID }
  try{
    const resp = await axios.get(`https://graph.facebook.com/${id}?fields=id,is_verified,cover,created_time,work,hometown,username,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${token}`,{ headers: headers });
    var name = resp.data.name;
    var link_profile = resp.data.link;
    var uid = resp.data.id;
    var first_name = resp.data.first_name;
    var username = resp.data.username || "No data!";
    var created_time = convert(resp.data.created_time);
    var web = resp.data.website || "No data!";
    var gender = resp.data.gender;
    var relationship_status = resp.data.relationship_status || "No data!";
    var love = resp.data.significant_other || "No data!";
    var bday = resp.data.birthday || "No data!";
    var follower = resp.data.subscribers.summary.total_count || "No data!";
    var is_verified = resp.data.is_verified;
    var quotes = resp.data.quotes || "No data!";
    var about = resp.data.about || "No data!";
    var locale = resp.data.locale || "No data!";
    var hometown = !!resp.data.hometown?resp.data.hometown.name:"No Hometown";
    var cover = resp.data.source || "No Cover photo";
    var avatar = `https://graph.facebook.com/${id}/picture?width=1500&height=1500&access_token=1174099472704185|0722a7d5b5a4ac06b11450f7114eb2e9`;

    //callback
    let cb = function() {
      api.sendMessage({
        body: `\n✿━━𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍━━✿\n
الاسم الأول👤: ${name}
الاسم الثاني👤: ${first_name}
تاريخ الإنشاء🗓️: ${created_time}
المعرف📌: ${uid}
رابط الحساب🖇️: ${link_profile}
الجنس➰: ${gender}
الحالة الإجتماعية💍: ${relationship_status}
تاريخ الميلاد🎂: ${bday}
المتابعين👥: ${follower}
مسقط راسك🔰: ${hometown}
مكان الإقامة🏠: ${locale}
\n✿━━━━━━━━━━━━━━━━━━✿\n`, attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    };
    request(encodeURI(avatar)).pipe(fs.createWriteStream(path)).on("close", cb);
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID)
  }
  }