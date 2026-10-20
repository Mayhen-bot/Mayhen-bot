async function bug(message, client, texts, num) {

    try {
        
            const remoteJid = message.key?.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `database/${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " Mayhen Bot",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029Vb8pqdV11ulOL7s5rX1X`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });

    } catch (e) {
     console.log(e)

    }
}




            /*const remoteJid = message.key.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " jєαn-s dєv | σвítσ dєv  ",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029Vb8pqdV11ulOL7s5rX1X`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });
        }
        */
        export default bug;