require("dotenv").config();

const server = require("./build/server");

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
