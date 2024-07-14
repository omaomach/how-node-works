const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  // This contains the object that observes the emitter and waits until it emits the newSale event i.e THE OBSERVER PATTERN.
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left`);
});

myEmitter.emit("newSale", 9); // This contains the object that emits the event

//////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another request received!");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  // We are starrting the server here
  console.log("Waiting for requests");
});
