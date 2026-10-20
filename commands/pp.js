import { writeFileSync, unlinkSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

export async function setpp(client, message) {
    try {
        const remoteJid = message.key.remoteJid
        const quoted = message.message?.extendedTextMessage?.contextInfo?.quotedMessage
        
        if (!quoted && !message.message?.imageMessage) {
            return await client.sendMessage(remoteJid, {
                text: '馃摳 R茅ponds 脿 une image.'
            })
        }

        const media = quoted ? quoted : message
        const imageBuffer = await client.downloadMediaMessage(media)
        
        if (!imageBuffer) {
            return await client.sendMessage(remoteJid, {
                text: '鉂� Impossible de t茅l茅charger l\'image.'
            })
        }

        const tempPath = join(tmpdir(), `pp_${Date.now()}.jpg`)
        writeFileSync(tempPath, imageBuffer)

        await client.updateProfilePicture(client.user.id, { url: tempPath })
        
        unlinkSync(tempPath)

        await client.sendMessage(remoteJid, {
            text: '鉁� Photo chang茅e 馃殌'
        })

    } catch (err) {
        console.error('SETPP ERROR:', err.message)
        await client.sendMessage(message.key.remoteJid, {
            text: '鉂� Erreur'
        })
    }
}

export async function getpp(client, message) {
    try {
        const remoteJid = message.key.remoteJid
        const args = message.message?.conversation?.split(' ') || []
        
        let targetJid
        if (args[1] && args[1].includes('@')) {
            targetJid = args[1]
        } else if (message.message?.extendedTextMessage?.contextInfo?.participant) {
            targetJid = message.message.extendedTextMessage.contextInfo.participant
        } else if (remoteJid.includes('@g.us')) {
            targetJid = remoteJid
        } else {
            targetJid = client.user.id.split(':')[0] + '@s.whatsapp.net'
        }

        const profilePic = await client.profilePictureUrl(targetJid, 'image')
        
        if (profilePic) {
            await client.sendMessage(remoteJid, {
                image: { url: profilePic },
                caption: '馃摳 Photo r茅cup茅r茅e 鉁�'
            })
        } else {
            await client.sendMessage(remoteJid, {
                text: '鉂� Aucune photo trouv茅e.'
            })
        }

    } catch (err) {
        console.error('GETPP ERROR:', err.message)
        await client.sendMessage(message.key.remoteJid, {
            text: '鉂� Impossible.'
        })
    }
}

export default { setpp, getpp }