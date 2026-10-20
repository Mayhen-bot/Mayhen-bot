// Font maps
const cursiveMap = {
  a: '饾挾', b: '饾挿', c: '饾捀', d: '饾捁', e: '饾憭', f: '饾捇', g: '饾憯', h: '饾捊', i: '饾捑', j: '饾捒', k: '饾搥',
  l: '饾搧', m: '饾搨', n: '饾搩', o: '饾憸', p: '饾搮', q: '饾搯', r: '饾搰', s: '饾搱', t: '饾搲', u: '饾搳',
  v: '饾搵', w: '饾搶', x: '饾搷', y: '饾搸', z: '饾搹',
  A: '饾挏', B: '饾惖', C: '饾挒', D: '饾挓', E: '饾惛', F: '饾惞', G: '饾挗', H: '饾惢', I: '饾惣', J: '饾挜',
  K: '饾挦', L: '饾惪', M: '饾憖', N: '饾挬', O: '饾挭', P: '饾挮', Q: '饾挰', R: '饾憛', S: '饾挳', T: '饾挴',
  U: '饾挵', V: '饾挶', W: '饾挷', X: '饾挸', Y: '饾挻', Z: '饾挼'
};

const boldMap = {
  a: '饾悮', b: '饾悰', c: '饾悳', d: '饾悵', e: '饾悶', f: '饾悷', g: '饾悹', h: '饾悺', i: '饾悽', j: '饾悾',
  k: '饾悿', l: '饾惀', m: '饾惁', n: '饾惂', o: '饾惃', p: '饾惄', q: '饾惇', r: '饾惈', s: '饾惉', t: '饾惌',
  u: '饾惍', v: '饾惎', w: '饾惏', x: '饾惐', y: '饾惒', z: '饾惓',
  A: '饾悁', B: '饾悂', C: '饾悅', D: '饾悆', E: '饾悇', F: '饾悈', G: '饾悊', H: '饾悋', I: '饾悎', J: '饾悏',
  K: '饾悐', L: '饾悑', M: '饾悓', N: '饾悕', O: '饾悗', P: '饾悘', Q: '饾悙', R: '饾悜', S: '饾悞', T: '饾悡',
  U: '饾悢', V: '饾悤', W: '饾悥', X: '饾悧', Y: '饾悩', Z: '饾悪'
};

const italicMap = {
  a: '饾槩', b: '饾槪', c: '饾槫', d: '饾槬', e: '饾槮', f: '饾槯', g: '饾槰', h: '饾槱', i: '饾槳', j: '饾槴',
  k: '饾槵', l: '饾槶', m: '饾槷', n: '饾槸', o: '饾槹', p: '饾槺', q: '饾槻', r: '饾槼', s: '饾槾', t: '饾樀',
  u: '饾樁', v: '饾樂', w: '饾樃', x: '饾樄', y: '饾樅', z: '饾樆',
  A: '饾槇', B: '饾槈', C: '饾槉', D: '饾構', E: '饾槍', F: '饾槏', G: '饾槑', H: '饾槒', I: '饾槓', J: '饾槕',
  K: '饾槖', L: '饾槗', M: '饾様', N: '饾槙', O: '饾槚', P: '饾槜', Q: '饾槝', R: '饾槞', S: '饾槡', T: '饾槢',
  U: '饾槣', V: '饾槤', W: '饾槥', X: '饾槦', Y: '饾槧', Z: '饾槨'
};

const boldItalicMap = {
  a: '饾櫀', b: '饾櫁', c: '饾櫂', d: '饾櫃', e: '饾櫄', f: '饾櫅', g: '饾櫆', h: '饾櫇', i: '饾櫈', j: '饾櫉',
  k: '饾櫊', l: '饾櫋', m: '饾櫌', n: '饾櫍', o: '饾櫎', p: '饾櫏', q: '饾櫐', r: '饾櫑', s: '饾櫒', t: '饾櫓',
  u: '饾櫔', v: '饾櫕', w: '饾櫖', x: '饾櫗', y: '饾櫘', z: '饾櫙',
  A: '饾樇', B: '饾樈', C: '饾樉', D: '饾樋', E: '饾檧', F: '饾檨', G: '饾檪', H: '饾檭', I: '饾檮', J: '饾檯',
  K: '饾檰', L: '饾檱', M: '饾檲', N: '饾檳', O: '饾檴', P: '饾檵', Q: '饾檶', R: '饾檷', S: '饾檸', T: '饾檹',
  U: '饾檺', V: '饾檻', W: '饾檼', X: '饾檽', Y: '饾檾', Z: '饾檿'
};

const squaredMap = {
  A: '馃劙', B: '馃劚', C: '馃劜', D: '馃劤', E: '馃劥', F: '馃劦', G: '馃劧', H: '馃劮', I: '馃劯', J: '馃劰',
  K: '馃労', L: '馃劵', M: '馃劶', N: '馃劷', O: '馃劸', P: '馃効', Q: '馃厐', R: '馃厑', S: '馃厒', T: '馃厓',
  U: '馃厔', V: '馃厖', W: '馃厗', X: '馃厙', Y: '馃厛', Z: '馃厜'
};

// Fonts 4鈥�7 and 10 with maps
const classicFonts = [
    (t) => t, // 1. Normal
    (t) => t.toUpperCase(), // 2. UPPERCASE
    (t) => t.toLowerCase(), // 3. lowercase
    (t) => [...t].map(c => cursiveMap[c] || c).join(''), // 4. Cursive 鉁�
    (t) => [...t].map(c => boldMap[c] || c).join(''),    // 5. Bold 鉁�
    (t) => [...t].map(c => italicMap[c] || c).join(''),  // 6. Italic 鉁�
    (t) => [...t].map(c => boldItalicMap[c] || c).join(''), // 7. Bold Italic 鉁�
    (t) => `\`\`\`${t}\`\`\``, // 8. Monospace
    (t) => [...t].map(c => '鈸愨搼鈸掆摀鈸斺摃鈸栤摋鈸樷摍鈸氣摏鈸溾摑鈸炩摕鈸犫摗鈸⑩摚鈸も摜鈸︹摟鈸ㄢ摡'['abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase())] || c).join(''), // 9. Circled
    (t) => [...t].map(c => squaredMap[c.toUpperCase()] || c).join(''), // 10. Squared 鉁�
    (t) => [...t].map(c => `(${c})`).join(''), // 11. Bracketed
    (t) => [...t].map(c => `険疊CD茙隇捚懫揌I趴隇瓣灜隇隇灠隇瓣灠隇瓣灠隇瓣灠隇瓣灠`['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c.toUpperCase())] || c).join(''), // 12. Weird caps
    (t) => [...t].map(c => c + '亭').join(''), // 13. Ghost text
    (t) => t.split('').join(' '), // 14. Spaced
    (t) => t.split('').map(c => c + '蜏汀').join(''), // 15. Hacker style
    (t) => `嗉�${t}嗉巂, // 16. Double brackets
    (t) => `銆�${t}銆峘, // 17. Japanese-style quote
    (t) => `銆庘槄${t}鈽呫€廯, // 18. Star-bracket
    (t) => `鉄�${t}鉄, // 19. Math brackets
    (t) => `*${t}*`, // 20. Classic bold marker
    // ... continue other styles unchanged
];



const decorativeFonts = [
    // 21鈥�30: Emojified / decorative styles
    (t) => `鉁� ${t} 鉁╜,
    (t) => `馃敟 ${t.toUpperCase()} 馃敟`,
    (t) => [...t].map(c => `馃拃${c}`).join(''),
    (t) => `嗉� ${t} 嗉抈,
    (t) => `嗉� ${t} 嗉絗,
    (t) => `鈽呭健 ${t} 褰♀槄`,
    (t) => `醽�${t.toUpperCase()}醽宍,
    (t) => `馃巰 ${t} 馃巰`,
    (t) => `馃憫${t}馃憫`,
    (t) => `鉁э渐锞�: *鉁э渐锞�:* ${t} *:锝ワ緹鉁�*:锝ワ緹鉁,
];

const fancyFonts = [...classicFonts, ...decorativeFonts];

export async function fancyCommand(client, message) {
    const remoteJid = message.key.remoteJid;
    const text = message.message?.extendedTextMessage?.text || message.message?.conversation || '';
    const parts = text.trim().split(' ');
    const args = parts.slice(1).filter(p => p.trim() !== '');

    // Preview all if no number or only whitespace
    if (args.length === 0 || isNaN(parseInt(args[0]))) {
        const sampleText = "Fancy Text";
        const preview = fancyFonts.map((f, i) => `*${i + 1}.* ${f(sampleText)}`).join('\n\n');
        return await client.sendMessage(remoteJid, { text: preview });
    }

    const styleIndex = parseInt(args[0]) - 1;
    const content = args.slice(1).join(' ');

    if (styleIndex < 0 || styleIndex >= fancyFonts.length) {
        return await client.sendMessage(remoteJid, {
            text: `鉂� Invalid style number. Use *.fancy* to view styles.`,
        });
    }

    if (!content.trim()) {
        return await client.sendMessage(remoteJid, {
            text: `鈿狅笍 Please provide text to style.\nExample: *.fancy 3 Hello World!*`,
        });
    }

    const styled = fancyFonts[styleIndex](content);
    await client.sendMessage(remoteJid, { text: styled });
}

export default fancyCommand;