const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

const apiProxy = proxy.createProxyMiddleware("/api", {
    target: 'https://shop-app-bpiw-b7a002c8bc28.herokuapp.com/',
    changeOrigin: true,
    pathRewrite: {
        '^/api':''
    }
})

app.use(apiProxy);
app.use(express.static(__dirname + "/dist/shop"));

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/dist/shop/index.html");
});

app.listen(process.env.PORT || 3000);