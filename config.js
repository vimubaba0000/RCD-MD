//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94781226144,94781226144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkQ0WGVXMWZ6NHRZSEswd0syNWF6dC95TkcwQXdQVGFMWkVPZDdDQUEzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1kyLzY3VnplbC9VMjg1MitNbHFIaUNFdXEwTXNhM1FFZXJ1c3RHdUFndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSytnczRQUWMrWkg1VmJGUm1HOXEwalhwc1Z4ZTcyZEJxTy9kbUZqUkU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1amdWR0k4SU5IMGQwTFAyVG96V0JLTkF1SExhampIamJ4OUg5STN1UEJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KUDVLVEU4cm1kNmViMUkwSGdIejhSaVBhTVlnWEpCMnMvV1plVkxOM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ6bklpeXdITzVidGtKU2tUU0gvMUcvRStpNDJTWWI0RHEzT0ptcU5jRjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtSd08yMzVBSlc3OVVnT1ZlTVFYck4vS2dOVVZyMXNyb3ZRMzZrUmtYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjF3S21HUmZ4eVlmaVNFMi9kUlcrNkhtMDhpalp6cFJ6bEZHSmRiaUVIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU5a3hEcmJaRmkyc2NsSGI3dkpHdE1peTdxWCtFZUtBMlM4MW9FWDZTTEcyMXNRd0p0RUVFK1lIeFRBU1BkQW9kZTJkZWRDSCtNaVJ5WlhDYUt5RUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJabERueGMzYnBpVTlNQUx4VjFYSm4zNnVYRlZQU3U2TnBUVUJ2S0FBQmYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMjI2MTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZGREIzMkUyODFFNUUyNzdGQUVFRDlGQThFMDY4Qzg2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA2MjYxMzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdCWlZSZUU1VHg2TjZCb1gyT2o4elEiLCJwaG9uZUlkIjoiYjY1MTAzNjktZTA3OS00MzlhLTgwYWMtNjdmNTg5MjVjODljIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJyNmlOdExoN3ZKbXZoMXZFV3NnMXlTbnlocz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZWV4azl0WU9ic2dqa0p6ajNPMGpwb3dhd009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1pRNzJYN1MiLCJtZSI6eyJpZCI6Ijk0NzgxMjI2MTQ0OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYg8J2QlfCdkIjwnZCM8J2QlCAgIPCdkJLwnZCT8J2QgPCdkJHwnZCTIDzwnZCW8J2QgPCdkIjwnZCTPiAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAg8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pucnlmRUdFTW5YdXJRR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImUrY3h6RHNJR0IwV0dZU1hGWXBTWjJEbFV4a2grNE5na0Z2U2tOZHUyMUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZRUUhzODNOb3NSVUpDMDZBdzIyVXQ5K1ZPS2k1UTRZWTRDZG9BdmIzcUt3VGJJQndoYkpTcDNKaTY4RUJSTEtBall3SmE3dXQwbno0clVxSkZPVEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJST1RCMzZtUnNvZE1ZSVNuM0ltVG9XSlpVSjB1d2tad1hJVEREK29ScDNVTFhrK1dOMnhKWmJLSDJKcE5QYTVHV1dIbElFTS9kb3pLUlVuTXZZbi9Ddz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxMjI2MTQ0OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHZuTWN3N0NCZ2RGaG1FbHhXS1VtZGc1Vk1aSWZ1RFlKQmIwcERYYnR0USJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDYyNjEzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFILzMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "V ɪ  m u  🐼💗🖇️",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
