import { makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } from 'baileys';
import readline from 'readline';
import deployAsPremium from '../utils/DigixV.js';
import configmanager from '../utils/configmanager.js';
import pino from 'pino';
import fs from 'fs';

const data = 'sessionData';

async function getUserNumber() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question('馃摬 Enter your WhatsApp number (with country code, e.g., 243xxxx): ', (number) => {
            rl.close();
            resolve(number.trim());
        });
    });
}

async function connectToWhatsapp(handleMessage) {
    const { version, isLatest } = await fetchLatestBaileysVersion();
    console.log(version);

    const { state, saveCreds } = await useMultiFileAuthState(data);

    const sock = makeWASocket({
        version: version,
        auth: state,
        printQRInTerminal: false,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        logger: pino({ level: 'silent' }),
        keepAliveIntervalMs: 10000,
        connectTimeoutMs: 60000,
        generateHighQualityLinkPreview: true,
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'close') {
            const statusCode = lastDisconnect?.error?.output?.statusCode;
            const reason = lastDisconnect?.error?.toString() || 'unknown';
            console.log('鉂� Disconnected:', reason, 'StatusCode:', statusCode);
            const shouldReconnect =
                statusCode !== DisconnectReason.loggedOut && reason !== 'unknown';
            if (shouldReconnect) {
                console.log('馃攧 Reconnecting in 5 seconds...');
                setTimeout(() => connectToWhatsapp(handleMessage), 5000);
            } else {
                console.log('馃毇 Logged out permanently. Please reauthenticate manually.');
            }
        } else if (connection === 'connecting') {
            console.log('鈴� Connecting...');
        } else if (connection === 'open') {
            console.log('鉁� WhatsApp connection established!');

            // --- FONCTIONNALIT脡 WELCOME MESSAGE ---
            try {
                const chatId = '22879648066@s.whatsapp.net'; // ton num茅ro ou le groupe cible
                const imagePath = './database/DigixCo.jpg';

                if (!fs.existsSync(imagePath)) {
                    console.warn('鈿狅笍 Image not found at path:', imagePath);
                }

                const messageText = `
鈺斺晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晽
      *Mayhen Bot Connected Successfully* 馃殌
鈺犫晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暎
> "Always Forward. Mayhen, one of the best."
鈺氣晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暆

*Mayhen 228*
                `;

                await sock.sendMessage(chatId, {
                    image: { url: imagePath },
                    caption: messageText,
                    footer: '馃捇 Powered by DigiX Crew',
                });

                console.log('馃摡 Welcome message sent successfully!');
            } catch (err) {
                console.error('鉂� Error sending welcome message:', err);
            }
            

            sock.ev.on('messages.upsert', async (msg) => handleMessage(sock, msg));
        }
    });

    setTimeout(async () => {
        if (!state.creds.registered) {
            console.log('鈿狅笍 Not logged in. Preparing pairing process...');
            try {
                const asPremium = true; // await deployAsPremium();
                const number = 22879648066; // mettez votre num茅ro WhatsApp 

                if (asPremium === true) {
                    configmanager.premiums.premiumUser['c'] = { creator: '22879648066' };
                    configmanager.saveP();
                    configmanager.premiums.premiumUser['p'] = { premium: number };
                    configmanager.saveP();
                }

                console.log(`馃攧 Requesting pairing code for ${number}`);
                const code = await sock.requestPairingCode(number, 'MAYHEN07');
                console.log('馃摬 Pairing Code:', code);
                console.log('馃憠 Enter this code on your WhatsApp app to pair.');

                setTimeout(() => {
                    configmanager.config.users[number] = {
                        sudoList: ['22879648066@s.whatsapp.net'], // emplace par ton num茅ro WhatsApp 
                        tagAudioPath: 'tag.mp3',
                        antilink: true,
                        response: true,
                        autoreact: false,
                        prefix: '.',
                        reaction: '馃幆',
                        welcome: false,
                        record: true,
                        type: false,
                        publicMode: false,
                    };
                    configmanager.save();
                }, 2000);
            } catch (e) {
                console.error('鉂� Error while requesting pairing code:', e);
            }
        }
    }, 5000);

    return sock;
}

export default connectToWhatsapp;