const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_29_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNZZmpreERQZ2tUQWRyd0RKYS9aNEltME1weXMxQkdVb2hLM0RNL1hWYXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5qeGphYTUzUnA2Sndncld6WU0yeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDM5ZGM5NTMtOWU1MS00NGQyLTlmZTAtNTk3MzU1MmZjZWRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDEwLFxuICAgICAgNjEsXG4gICAgICA3NCxcbiAgICAgIDIyOCxcbiAgICAgIDEwMCxcbiAgICAgIDIxNyxcbiAgICAgIDIyNCxcbiAgICAgIDEwNSxcbiAgICAgIDE1MyxcbiAgICAgIDE4MCxcbiAgICAgIDQ0LFxuICAgICAgMjM2LFxuICAgICAgMjUyLFxuICAgICAgMjM3LFxuICAgICAgMTIsXG4gICAgICAyMjYsXG4gICAgICAxMTYsXG4gICAgICAxMTQsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTAyLFxuICAgICAgMjMzLFxuICAgICAgMjM5LFxuICAgICAgMjQwLFxuICAgICAgNzAsXG4gICAgICAyMzUsXG4gICAgICAxMixcbiAgICAgIDc1LFxuICAgICAgMzIsXG4gICAgICAxMSxcbiAgICAgIDIwLFxuICAgICAgODgsXG4gICAgICAxNTcsXG4gICAgICAyOCxcbiAgICAgIDcyLFxuICAgICAgMjE0LFxuICAgICAgMjM5LFxuICAgICAgNzgsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS04yUFRLQjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjIxOTc0Mjg6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTM0NjA1MzIxMDEzNjoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKS2kwNGdGRUlLSzNib0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFhRHN3Z3dpRmZJN0o4b3R3c2F3TXpiWFdNbGMxbXJleE1hWjk5RHpzQms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlYyMjJRSk9VTTdtNjY1SmhYNThsSjlTWHRjMWVrMHpkK3p1UjU0UnBvZkhPNkhuWU5JV1RKeEs4UklhMmVpaWN2UjhXbEwrTUpqWFlFSFhkOEE0RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSllsR05LWVFIQU5OMm83S3hwZVFzZFhISEhLdFVRMFU5Y1Q3cU9QK0s5N0MwaG1pYVUyQUlpSkpBUWNDdkN0bnJOT2k1bXhRU3dyQmFoQ3NEZ1EwQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMjE5NzQyODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM3NzI1NDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
