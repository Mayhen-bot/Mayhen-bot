import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import configs from "../utils/configmanager.js";
import { getDevice } from "baileys";
import stylizedChar from "../utils/fancy.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
}

function getCategoryIcon(category) {
  const c = category.toLowerCase();

  if (c === "utils") return "鈿欙笍";
  if (c === "media") return "馃摳";
  if (c === "group") return "馃懃";
  if (c === "bug") return "馃悶";
  if (c === "tags") return "馃彿锔�";
  if (c === "moderation") return "馃樁鈥嶐煂笍";
  if (c === "owner") return "鉁�";
  if (c === "creator") return "馃憫";

  return "馃幆"; 
}


export default async function info(client, message) {
  try {
    const remoteJid = message.key.remoteJid;
    const userName = message.pushName || "Mayhen";

    
    const usedRam = (process.memoryUsage().rss / 1024 / 1024).toFixed(1);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(1);
    const uptime = formatUptime(process.uptime());
    const platform = os.platform();

   
    const botId = client.user.id.split(":")[0];
    const prefix = configs.config.users?.[botId]?.prefix || "!";

    
    const now = new Date();
    const daysFR = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    ];

    const date =
      `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const day = daysFR[now.getDay()];

    
    const handlerPath = path.join(__dirname, "../events/messageHandler.js");
    const handlerCode = fs.readFileSync(handlerPath, "utf-8",);

    const commandRegex =
      /case\s+['"](\w+)['"]\s*:\s*\/\/\s*@cat:\s*([^\n\r]+)/g;

    const categories = {};
    let match;

    while ((match = commandRegex.exec(handlerCode)) !== null) {
      const command = match[1];
      const category = match[2].trim();

      if (!categories[category]) categories[category] = [];
      categories[category].push(command);
    }

    
let menu = `
DigiX Crew 馃幆
鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
鈥� Prefix   : ${prefix}
鈥� User     : ${stylizedChar(userName)}
鈥� Version  : 1.0.0
鈥� Uptime   : ${uptime}
鈥� RAM      : ${usedRam}/${totalRam} MB
鈥� Platform : ${platform}
鈥� Date     : ${date} - ${stylizedChar(day)}
鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€
`;

    for (const [category, commands] of Object.entries(categories)) {
      const icon = getCategoryIcon(category);
      const catName = stylizedChar(category);
      menu += `鈹忊攣鈹佲攣 ${icon} ${catName} 鈹佲攣鈹�
`;
commands.forEach(cmd => {
  menu += `鈹�   鈥� ${stylizedChar(cmd)}\n`;
});
menu += `鈹椻攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣
`;
    }

    menu = menu.trim();

    
    try {
      const device = getDevice(message.key.id);

      if (device === "android") {
        await client.sendMessage(remoteJid, {
          image: { url: "database/menu.jpg" },
          caption: stylizedChar(menu),
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: { conversation: " Mayhen Bot " },
            isForwarded: true
          }
        });
      } else {
        await client.sendMessage(
          remoteJid,
          {
            video: { url: "database/DigiX.mp3" },
            caption: stylizedChar(menu)
          },
          { quoted: message }
        );
      }
    } catch (err) {
      await client.sendMessage(
        remoteJid,
        { text: "鉂� Erreur lors de l'envoi du menu : " + err.message },
        { quoted: message }
      );
    }

    console.log(menu);

  } catch (err) {
    console.log("error while displaying menu:", err);
  }
}