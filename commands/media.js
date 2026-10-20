import fs from 'fs'
import { downloadMediaMessage } from 'baileys'

export async function photo(client, message) {
    try {
        const quoted = message.message?.extendedTextMessage?.contextInfo?.quotedMessage
        const target = quoted?.stickerMessage
        
        if (!target) {
            return await client.sendMessage(message.key.remoteJid, {
                text: '馃摳 *Mayhen Bot 228*\n\nR茅pondez 脿 un sticker pour le convertir en image.\n\nUsage: .photo (r茅ponse 脿 un sticker)'
            })
        }

        const buffer = await downloadMediaMessage({ message: quoted }, "buffer")
        const filename = `./temp/sticker-${Date.now()}.png`

        if (!fs.existsSync('./temp')) fs.mkdirSync('./temp')
        fs.writeFileSync(filename, buffer)

        await client.sendMessage(message.key.remoteJid, {
            image: fs.readFileSync(filename),
            caption: '鉁� Digital Crew 243'
        })

        fs.unlinkSync(filename)

    } catch (e) {
        console.log(e)
        await client.sendMessage(message.key.remoteJid, {
            text: '鉂� Erreur de conversion.'
        })
    }
}

export async function tomp3(client, message) {
    try {
        const quoted = message.message?.extendedTextMessage?.contextInfo?.quotedMessage
        const target = quoted?.videoMessage
        
        if (!target) {
            return await client.sendMessage(message.key.remoteJid, {
                text: '馃幍 *Mayhen Bot 228*\n\nR茅pondez 脿 une vid茅o pour extraire l\'audio.\n\nUsage: .toaudio (r茅ponse 脿 une vid茅o)'
            })
        }

        const buffer = await downloadMediaMessage({ message: quoted }, "buffer")
        const inputPath = `./temp/video-${Date.now()}.mp4`
        const outputPath = `./temp/audio-${Date.now()}.mp3`

        if (!fs.existsSync('./temp')) fs.mkdirSync('./temp')
        fs.writeFileSync(inputPath, buffer)

        const { exec } = await import('child_process')
        await new Promise((resolve, reject) => {
            exec(`ffmpeg -i ${inputPath} -vn -ab 128k -ar 44100 -y ${outputPath}`, (err) => {
                if (err) return reject(err)
                resolve()
            })
        })

        await client.sendMessage(message.key.remoteJid, {
            audio: fs.readFileSync(outputPath),
            mimetype: 'audio/mp4',
            ptt: false
        })

        fs.unlinkSync(inputPath)
        fs.unlinkSync(outputPath)

    } catch (e) {
        console.log(e)
        await client.sendMessage(message.key.remoteJid, {
            text: '鉂� Erreur de conversion audio.'
        })
    }
}

export default { photo, tomp3 }