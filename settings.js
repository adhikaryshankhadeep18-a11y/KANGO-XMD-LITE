//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +9190075 09460

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNSV0FKQlhoOTRUOEU4bkdUdlV4b0V5aURXQUtNMW5CUmNFbFY3WnlrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZC9jMVFNeGUzRGNYZnZSTHE4NUNNek5wOFM5U2dWM3MrdjAwNCswZVhIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SkQ2aEZVSTM3QkJFL1pTcE9hdEVhZ3NxczVwdEpUbjRlb00wZTMyWUhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVmVjQWV2NnRPWHdjWVVxQnF5UkE1R09od2ZPbFlZbUlRa1VZNnNXY21zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdOZFlDb1lwMlBtcjdMV29XQ2xUVzkzOVE2ZFlqYjRVTXRabGttcXliVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFiM0ZpT2FadU5SZEJ0YXdQMDJaZ0psR3Y2Yys1dXJYWm9xMm1qM25zRUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0x6c3ZhN2hTWjhXNGxQRDFnRE9hL2wyMThqS1A2UHB3ZFlBUkhUYk9GND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFB6TTF2Smw3Z2YxaEJ4S2s2WVV6VVE2M0JVZk9kVVh0dGErTHM2RjcyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJJK3BSd2ZxSE5Zbm14cFo5RXg4YkZrLzR5QjJqeUVRTlg5UVNUTit2c3I3VGRJNFc4WkdzbDJSd1BObjVXLzljMUdpSG9tWHpTcTFNYnZPUm5POUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6ImxKUFVPaGlXcUN6STJTY2w5bHBjaW9LRFY0eFh2RWIwY1h3bWRsL0Foenc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5MDA3NTA5NDYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNUQyRkYwNjBDQTZGNEU5QThGMTlBMkQ3ODg2MTBERCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcwNTY3ODE3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTkwMDc1MDk0NjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1Njc1MDZDOEZCQjRCQjY4NTQxOUQyRDM5MEYwODM4IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzA1Njc4MTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxOTAwNzUwOTQ2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTU2NjI5NjVBODExRERCQTQ3RTYyNEU3OTFFNUYzNzciLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MDU2NzgxOX1dLCJuZXh0UHJlS2V5SWQiOjgxOSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxOSwiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJONjdZNUdRSiIsIm1lIjp7ImlkIjoiOTE5MDA3NTA5NDYwOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZmluYW5jaWFsIGNvbnN1bHRhbnQiLCJsaWQiOiI2ODQzNjU2MjU3OTYyMDo0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZodXR3R0VQVHdvc3dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSXpGaWMzK0R1dG9qcHdqVDFGZm5ERTJlRGY4Tm12UEp4Z0kycVZ5ekdVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM3h4UVB5aTk2a3dFbVUvWnRFRzVvU2JhYWlsNTNEQnFQWkU5VTQyeTEwSW9QMUduRlNpY1VQenN0SkFISm85NTVBZjhXZktyRXpNVkltUVByb1VyRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9PMWNidWRYdW1FSWdKbWtjVFQ1bFRCaDZYSUpYZno4K2ZHQm0yNXBKbHpqVGpzbUZwM0VwcGFBVHZSd280eHV0L2cvOHZpa0ZkbnpGUittY3poMkFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjg0MzY1NjI1Nzk2MjA6NEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU014WW5OL2c3cmFJNmNJMDlSWDV3eE5uZzMvRFpyenljWUNOcWxjc3hsQSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcwNTY4MDAxLCJsYXN0UHJvcEhhc2giOiI0WlJQNlMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFUZCJ9' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'LORD SHANKHA' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '919007509460' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
