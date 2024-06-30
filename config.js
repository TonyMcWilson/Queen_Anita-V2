//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxsVDlreStQZ2ZiR3hNMkEwVmlWTmpad2Rqd0h5Qy9CajlmeVI5dzMxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjBWU1NLaVE0ZWQzZmxiWndZYWJDSkMvNnVkNnZKZ0UrZlg5bmJzN3hYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQmVWakw4UDVNWDVlWHpBbGJTZVpDV2pvMG9ndUNWUlFjOGNWaDFBNjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmeUVZL2RTbWhiK1h0aStHMWxQUytQWHREdVFncnU2eTA4MnhFRkI2QUdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDWUszZmpPRUJCVk42bTA4U0FZd0owa0lKUnVXV1dUYXViM2ZVbWszV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhYV2FoK3Fsei95TXBxS3VTeEhTRjJKUjV0UkFhMDZaYVFPNURWSTRwbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdOMDJBVUM1d0JuZkduSWZZaUNQaGdGMHN0SW8wVzBza0xVOUtHb3RWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkkwZXZRcGU5UDJLcTBicllsSFQvSFQvU1R6SWR0MWN0Yk9qU2RVSmQyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJEeE9ab2wySkQvRTFMQmZ1cnJqUzFvL3IxYVF3aWl4Yk85ZWVtck1jQ1Y1SW9BRUUzR3VXNnV0ZWtnMStJMmlLeEYrNVlQOXlveWNqem9NbHZFN0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6IklrK3lEZlhsV3N4UE9yZVJ5TnJtamdIWXlUZXF2eDlyZ212c3REWTJYVFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkozV2h0U2tEVFVTMzdOWFBpOEZNbWciLCJwaG9uZUlkIjoiMTVkZTIyMWItZTJkNC00MDY5LTllNzAtM2RhZmFiZDU2YTlhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ4ODlvZE93UENLckZZUElMM2lWQ3FHc2l4dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0L055WWFsUUpTL3d6b2EydDZmYTcvSUtEaGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRFlYVE4xUzEiLCJtZSI6eyJpZCI6IjI1Njc2MzA4ODgyMTo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKekJxUHNIRUlTYWhiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtd0t2clo0WDJIVS9xT2NQenZodVVBUGRCU2pNdXZIN0pzNlY1ZzNwT0hRPSIsImFjY291bnRTaWduYXR1cmUiOiIvL0MvcCsyQlRGZ3l0M0pLMmlSYXUyOHAvU1oxV2tyK2FjdUNoU2JUcDg0cnBxUUZJTVNhSkU3QVhqL0FQZ09VY0hVdm5wK2RNZUZCdi9VR3ZTbVNBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ1BOaC9nQzZuUmlSY1hFeG1TRms1K09JQzVCVytFWFhYbnZWM08vNnd3ZVlobEVKTDRla0F3R3g5ODBrYVlPa0c3aGdQazNjOTc0UGl0MTQ3SkNXQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NjMwODg4MjE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJac0NyNjJlRjloMVA2am5EODc0YmxBRDNRVW96THJ4K3liT2xlWU42VGgwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzQ5OTA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxtSSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "256763088821";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/82176ef2fe50e86d5475b.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/82176ef2fe50e86d5475b.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©MR_UPDATE_DATA WA_BOT `",
  author: process.env.PACK_AUTHER || "MR_UPDATE_DATA",
  packname: process.env.PACK_NAME || "MAGEZI TONY WILSON",
  botname: process.env.BOT_NAME || "MAGEZI_TONY_WILSON",
  ownername: process.env.OWNER_NAME || "MAGEZI_TONY_WILSON",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X7DoBq2WxaM7EbubOjAOT3BlbkFJo8RYkNeh8QjPvSCXhBtU",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "MrUpdateDataTweaks@gmail.com";
global.location = "Uganda";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "256763088821";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || "50";
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "true"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
