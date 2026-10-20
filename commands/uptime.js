export async function uptime(client, message) {
    const remoteJid = message.key.remoteJid
    const uptime = process.uptime()
    
    const days = Math.floor(uptime / 86400)
    const hours = Math.floor((uptime % 86400) / 3600)
    const minutes = Math.floor((uptime % 3600) / 60)
    const seconds = Math.floor(uptime % 60)
    
    const text = `鈹屸攢馃 Mayhen  228  鈹€鈹�
鈹�
鈹� 鈴憋笍 Uptime: ${days}d ${hours}h ${minutes}m
鈹� 馃捑 RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)}MB
鈹�
鈹� "Mayhen Bot."
鈹�     - DC243 -
鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹榒
    
    await client.sendMessage(remoteJid, { text: text })
}

export default uptime