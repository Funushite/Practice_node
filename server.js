// モジュール準備
const http = require("http");
const fs = require("fs");

// サーバー作成
const server = http.createServer((_, res) => { // ("GET", "POST")
  // html を返却する準備
  fs.readFile("./public/index.html", "UTF-8", (_, data) => { // ("参照", charset)
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

// サーバー起動 （テンプレ）
const port = 3000;
server.listen(port, function() {
  console.log("Node.js server Started:" + port);
});