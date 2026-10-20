import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "ðŸ“¡ Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `ðŸš€ Mayhen Bot Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `Mayhen 228`
        )
    }, { quoted: message })
}