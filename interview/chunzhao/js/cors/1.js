const http = require('http');

// 定义允许跨域的白名单
const allowedOrigins = ['http://example.com', 'http://another-example.com'];

const server = http.createServer((req, res) => {
    const origin = req.headers.origin;

    // 检查请求的 origin 是否在白名单中
    if (allowedOrigins.includes(origin)) {
        // 如果在白名单中，设置允许的 origin
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // 设置其他 CORS 响应头
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 处理 OPTIONS 请求
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // 处理其他请求
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});