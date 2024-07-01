//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURsdnRZT045Szc5UDFtVjlKakNrUk11NzlvZVZ5TU4vdUJzdTJFb2lYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmZ5U1R5Um51K3h3dXZNOVZBcXdrL1NtUXNGK2c0WG11MmlCWS8vQVZnQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR2xDNm9KMGVTTEdMbUdlQjJ5ak5TZ2JCNHB5aVhKcjlYUE92aHN2ZVdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaNGhDdVhoZ2FSTVBNQS9icGZneHBhUTBDK01HMExsVW5IeHBuMHJjU1JVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCTTR3aEhyWFo0OXV5YnRqUFNYSVU1SFdTVS9Yb1ExR2grdld1NVliWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVzMHV5RGExQ3EybGJtdG55aXFiajB2TVRsMHVTclBYZkZGUWd2d1lCeGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdQbkkreG9HK3k1QmoxMHV3NVBXaTZuZEYrdUdHQk1NNGx5UVVPa3hYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDlVMUZ2b0JHL01WMk5ETExkUmlLNWxoNkZGUWtUTFRtcmdDRlJUQUEyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ0alkvSGo4WFBWaXZsRTJzWXhlVWlSMm92UFdhVnladmErRE9lQWl0T3I0VmxNZG0yNHdjOUNJSklpc2NsUTNHL2FHa1NLNHRxa016RzMxUkpyVWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJrK0JGUVJOZTM5am9nejBtc003d3Uvd2d0SXpScUo0bi9abUI5RjFXOVlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0LU85N0Myb1NrQzlSalViYWZJTzF3IiwicGhvbmVJZCI6IjM3ODA4OWIzLTlhZWItNDg4Ni04ZTAzLTRjMGRhNjI1MGY0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKL3VYTThqSDhIY1lJMFhnVjVvLzRYVFFVWE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWpXTExNWkc1MlcyNTNPcGhjcGtHL0Y0V0swPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFTTVJENDlGIiwibWUiOnsiaWQiOiIyNTY3NjMwODg4MjE6MTRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tQQnFQc0hFTEx5aTdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im13S3ZyWjRYMkhVL3FPY1B6dmh1VUFQZEJTak11dkg3SnM2VjVnM3BPSFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZSckVzZnl2dTdZdWNFK0xId0drVHpBL29yaExsQ3FHVUFkTmRTOFI3UW8yV0c4aVFIY1BNWUdtUVUwMm1QdjJscXJTWlpvbnNMelluTkFnYkRkMkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkVGY5bXJ1RVcwWHFUOUgya3Vyb0pqVnFseHRPS1Rwc1hlNWVvTENQWElkNnVRMGYvMHNBWXp0TTFuYUkya3RTS0I3YnEwbVMyZG9XMWVhcC8yMXlnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc2MzA4ODgyMToxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJac0NyNjJlRjloMVA2am5EODc0YmxBRDNRVW96THJ4K3liT2xlWU42VGgwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODU5NTE5fQ==";
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
  "https://telegra.ph/file/950d71dab4293f0c0781c.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/950d71dab4293f0c0781c.jpg" ;
  ///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©MR_UPDATE_DATA `",
  author: process.env.PACK_AUTHER || "MR_UPDATE_DATA",
  packname: process.env.PACK_NAME || "MR_UPDATE_DATA",
  botname: process.env.BOT_NAME || "MR_UPDATE_DATA WA_BOT",
  ownername: process.env.OWNER_NAME || "MR_UPDATE_DATA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
global.location = "Kenya";
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
global.warncount = process.env.WARN_COUNT || 30;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
