export default async function react(client, message) {
  const remoteJid = message.key.remoteJid;

  await client.sendMessage(remoteJid, {
    react: {
      text: '馃惁鈥嶐煍�',
      key: message.key
    }
  });
}