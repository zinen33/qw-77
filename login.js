touconst fs = require("fs");
const login = require("fca-jiser-main");

var credentials = {email:shellymirai@gmail.com "FB_EMAIL", password:Konhi_-oh"FB_PASSWORD"}; // credential information

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // login
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //create appstate
});