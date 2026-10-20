import stylizedChar from "../utils/fancy.js"
import axios from 'axios'

export async function play(message, client) {
    const remoteJid = message.key.remoteJid
    const rawText = message.message?.conversation || message.message?.extendedTextMessage?.text || ''
    const text = rawText.toLowerCase().trim()

    try {
        const query = text.split(/\s+/).slice(1).join(' ')
        if (!query) {
            await client.sendMessage(remoteJid, {
                text: stylizedChar('鉂� Fournis un titre de vid茅o.')
            })
            return
        }

        console.log('馃幆 Recherche :', query)

        await client.sendMessage(remoteJid, {
            text: stylizedChar(`馃攷 Recherche : ${query}`),
            quoted: message
        })

        const searchUrl = `https://apis.davidcyriltech.my.id/play?query=${encodeURIComponent(query)}`
        const searchResponse = await axios.get(searchUrl, { timeout: 10000 })

        if (!searchResponse.data.status || !searchResponse.data.result) {
            throw new Error('Vid茅o non trouv茅e.')
        }

        const videoData = searchResponse.data.result
        const videoUrl = videoData.url || videoData.download_url

        if (!videoUrl) {
            throw new Error('URL de t茅l茅chargement non disponible.')
        }

        const apiUrl = `https://youtubeabdlpro.abrahamdw882.workers.dev/?url=${encodeURIComponent(videoUrl)}`
        
        await client.sendMessage(remoteJid, {
            image: { url: videoData.thumbnail },
            caption: `馃幍 *${videoData.title}*\n鈴憋笍 ${videoData.duration || 'Inconnu'}\n馃憗锔� ${videoData.views || 'Inconnu'} vues\n\n漏 Digital Crew 243`,
            quoted: message
        })

        await client.sendMessage(remoteJid, {
            audio: { url: apiUrl },
            mimetype: 'audio/mp4',
            ptt: false,
            quoted: message
        })

        console.log('鉁� Audio envoy茅 :', videoData.title)

    } catch (error) {
        console.error('鉂� Erreur play :', error.message)
        await client.sendMessage(remoteJid, {
            text: stylizedChar('鉂� Erreur de t茅l茅chargement.')
        })
    }
}

export default play