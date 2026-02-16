const https = require('https');
// 替换成你自己的 Render 网址
const YOUR_URL = 'https://pairdrop-rbo5.onrender.com';

// 每10分钟访问一次自己
setInterval(() => {
  https.get(YOUR_URL, (res) => {
    console.log('✅ 自唤醒成功', res.statusCode);
  }).on('error', (err) => {
    console.log('❌ 自唤醒失败', err.message);
  });
}, 10 * 60 * 1000); // 10分钟

console.log('🚀 PairDrop 防休眠已启动');
