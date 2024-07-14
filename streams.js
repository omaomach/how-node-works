// TASK: Read  file and then send it to a client

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // SOLUTION 1 - The issue with this is that node has to load the entire file into memory before sending it to the client. Its a problem when the file is big or when there are a alot of requests hitting the server
  // fs.readFile("test-file.txt", "utf8", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // SOLUTION 2 - Using streams to read the file line by line
  // const readable = fs.createReadStream("test-file.txt"); // create a stream from the data that is in the text file, which we can them consume piece by piece.
  // readable.on("data", (chunk) => {
  //   res.write(chunk); // write each chunk of data to the response. The response is a writtable stream.
  // });

  // readable.on("end", () => {
  //   res.end(); // end the response when the file has been read completely
  // });

  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found!"); // send a 500 status code and a message if the file cannot be found or read.
  //   });

  // THE READABLE STREAM THAT WE ARE USING TO READ THE FILE FROM THE DISK IS MUCH MUCH FASTER THAT SENDING THE RESULT WITH THE RESPONSE WRITTABLE STREAM OVER THE NETWORK
  // THIS OVERWHELMS THE RESPONSE STREAM WHICH CAN NOT HANDLE ALL THE INCOMING DATA SO FAST. THIS PROBLEM IS CALLED BACK PRESSURE I.E when the response cant send the data nearly as fast as it is receiving it from the file.

  // SOLUTION 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res); // pipe the readable stream to the response, which automatically sends the data as it is read from the file.
  // readableSource.pipe(writeableDestination)
  // Fixes the problem of back pressure.
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
