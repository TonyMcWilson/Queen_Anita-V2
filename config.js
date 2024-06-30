//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9rTFlxUnJZSmZUeXE1THVQRlZXUzFEUmhZWGFNVGFkWDJwNDJpMjFsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG9Ia0lRaTQxdzExdVRTQkhCcnRlZFFZZzFGVnJ6dVkzK243c2VaNFlrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSlRRVUpQV1JRMVhuMGF5V1lBdVhRb3pSQm5mR0NGa2RLa0trb2svY2w0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrblkrRVoxQ2JjdzBqa3JGNmRES1NQLzFaSWo0bXhqQkFXMGFrSXc0M3lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFV3E2SldXWUhaTmV3TmZ3MnpTeTFqNWNHZGxycUN0OTFMTmlMZ01KbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ2TkZ6U01IckV5STVZSkFxcjFaSEs5M3lCcmcrR3VJWFRkTUFGaE1uZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0R0bzJLa1pNUlF2SXQzbU5SVE9sL1BrejU0eUNieGRuQVY5VW9NekQwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWhPU3loWVlNUnlwQUtYbTFTRTJ1VFp5ajNlY3JzVUtkSXRLdzdUMEtRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJsL25xSUxvK3lmaDV2M1lPUGlqS1V4WE9HaHBIL2pSakkzRTJjQ0dXRHlMS3pvSW12R3FNYlUvL01HK2tBc1lvSTFodE1XVFhTZWwvQmxKTWtEWWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiIyK3hubkZJNWZ1a1Ewbjhtbk9NOXVXRmhyeWFBbjNSSTlxSUI1Z1FaeFlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmSU16U1I0MVFJMkZoLWhEcUctWGRBIiwicGhvbmVJZCI6ImU0NTQxNDJkLTFmNDgtNDhkZC1hZDgyLTdlM2E1ZTgxYzQyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3ZnVQTjBCZTlQWm0rSVlQMFJPNkJVeUEwYWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVdPbDcwbjhxdVE5ZkFILy9FaWxlMHg1VG1jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBaTko3TFgzIiwibWUiOnsiaWQiOiIyNTY3NjMwODg4MjE6MTFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIQnFQc0hFTHIyaGJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im13S3ZyWjRYMkhVL3FPY1B6dmh1VUFQZEJTak11dkg3SnM2VjVnM3BPSFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlEzQzgrUm0zSUd0QVBWc1NWeVNmWHBacmhTMkdlRXBUbHMwSE5TcFV2S2JrSkg4RlU5OWRvOWkwbUtUaWhrUUFqdkdhcTFYc01BRGtCeTZjL25XZUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzblFwb3J4Sm1GZG9aNEdJU21vOEJ0MWVjZ1ltTUtSeHYzWlNUTEs1cmh4N1d1S0VRQmYya1dxQ3EzT1pjZ1IzeWhEZm1za051YVh1MnRiQnpOejNqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc2MzA4ODgyMToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJac0NyNjJlRjloMVA2am5EODc0YmxBRDNRVW96THJ4K3liT2xlWU42VGgwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzYxNzM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJIMyJ9";
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
  caption: process.env.CAPTION || "`©MR_UPDATE_DATA `",
  author: process.env.PACK_AUTHER || "MR_UPDATE_DATA",
  packname: process.env.PACK_NAME || "MAGEZI_TONY_WILSON",
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
global.warncount = process.env.WARN_COUNT || 40;
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
