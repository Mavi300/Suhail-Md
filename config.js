const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ timzee²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+2349167151683";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_09_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUGEydHloMm5GWUNLczh3YmlRZ3ZaU1cwQjJaQVVwMGxsMlpJWmZqaFVvQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibWpWXzZZVmRUazZpeFZsUDJxMkFad1wiLFxuICBcInBob25lSWRcIjogXCJlOWJkNWViYS1lM2QyLTQwMjctOGU4Yi1iNmYyMDllMGQyYjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgOTMsXG4gICAgICAxMjEsXG4gICAgICAxMjQsXG4gICAgICA5MSxcbiAgICAgIDk3LFxuICAgICAgMTg2LFxuICAgICAgMTcsXG4gICAgICA4NixcbiAgICAgIDI0MSxcbiAgICAgIDEwNCxcbiAgICAgIDgyLFxuICAgICAgMjIyLFxuICAgICAgMjUxLFxuICAgICAgMjQ2LFxuICAgICAgMTc2LFxuICAgICAgNjAsXG4gICAgICAyNDksXG4gICAgICAyMzUsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxNTUsXG4gICAgICAxNDMsXG4gICAgICAyMDIsXG4gICAgICAwLFxuICAgICAgMTAzLFxuICAgICAgMjI0LFxuICAgICAgMTEsXG4gICAgICAxMTcsXG4gICAgICAyMzgsXG4gICAgICAyMTAsXG4gICAgICA3MyxcbiAgICAgIDgwLFxuICAgICAgMTk3LFxuICAgICAgMTc4LFxuICAgICAgMzYsXG4gICAgICAxNzMsXG4gICAgICAxNDMsXG4gICAgICAxOTYsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLTFlQN0daNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxODA0NTgyMzo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzUzNDM3MjIwOTA1OTk6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3pHZ2J3SEVOVGt1YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFRm1weno5U2xHSDRoYXd2R3huYThYRDNXK3lwTmFmMVoyQ2lOR2lteVRjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkEzVXJNbk9nNlNOZHQ1Z1k1TjFMZ2F3dTV5SXNvSTArcWZURDNMYzBmUDhHMlp4Vk85bGYzNnlqOVlkUHUwV3hmSVlvK2pjVG9qOXVwU1ptSHY5UGhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdOQkRaVXBkTFZTNllnbUY2V2ErZTdnVi9HdVJYNGhHalROSkg4dUlTeHlPU0NDY0JwenBuNlNTcTZoNW8zdmZtSzlSdzJQUVJrcWFsV2Q0cVBISWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTgwNDU4MjM6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzA4NTY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTRBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFNEEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsU2pmb01VSEQ5cVpsZnZEU0M4eEpiUHNZc3JMWENmNzFWYjVXU3dIS25BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDQ5MDI3MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjcwODU3MDU1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
