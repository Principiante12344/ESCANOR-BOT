import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Owners and mods configuration
global.owner = [
  ['59172945992', 'FG98', true],
  ['5491168352204']
]; // Owner numbers

global.mods = ['']; 
global.prems = ['50489079501', '573143917092'];

// API configuration
global.APIs = {
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
};

global.APIKeys = {
  'https://api.fgmods.xyz': 'm2XBbNvz' // 100 requests per day limit. Register at https://api.fgmods.xyz/
};

// Sticker watermark configuration
global.packname = 'Senna┃ᴮᴼᵀ'; 
global.author = '@fg98'; 

// FG info
global.botName = 'Senna';
global.fgig = 'https://instagram.com/fg98_ff';
global.fgsc = 'https://github.com/FG98F/dylux-fg';
global.fgyt = 'https://youtube.com/fg98f';
global.fgpyp = 'https://paypal.me/fg98f';
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs';

// WhatsApp groups
global.id_canal = '120363177092661333@newsletter'; // WhatsApp channel ID
global.fgcanal = 'https://whatsapp.com/channel/0029VaCeuZd6mYPQiWqxXj1F';
global.bgp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr';
global.bgp2 = 'https://chat.whatsapp.com/I7bvd8XCAOUHjgkHteqFC7';
global.bgp3 = 'https://chat.whatsapp.com/F0JTTyZ3hsoL7OlU8TEpuH'; // NSFW group

// Status messages
global.wait = '⌛ _Cargando..._\n*▬▬▬▭*';
global.rwait = '⌛';
global.dmoji = '🤭';
global.done = '✅';
global.error = '❌';
global.xmoji = '🔥';

// Other configurations
global.multiplier = 69;
global.maxwarn = '2'; // Maximum warnings

// Watch file for changes
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
