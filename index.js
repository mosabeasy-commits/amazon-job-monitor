const http = require("http");

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("amazon-job-monitor running");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
