const server = require("./server.js");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => `\n== Server running on localhost:${PORT} ==\n`);
