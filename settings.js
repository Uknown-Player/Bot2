//base by DGXeon
//recode by Rapikz
//YouTube: @rapikgimangYT
//Instagram: Rapik_Gimang
//Telegram: t.me/6281312651566

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "blm punya" //ur yt chanel name
global.socialm = "blm punya" //ur github or insta name
global.location = "USA" //ur location

//new
global.botname = 'UknownBot' //ur bot name
global.ownernumber = '6282396328667' //ur owner number
global.ownername = 'Lidoz' //ur owner name
global.websitex = "blm bikin"
global.wagc = "blm bikin"
global.themeemoji = '🪀'
global.wm = "Blm bikin"
global.botscript = 'Rahasia' //script link
global.packname = "Bot by LidozScript"
global.author = "KingLidoz"
global.creator = "6282396328667@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["62xx"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Succes'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
