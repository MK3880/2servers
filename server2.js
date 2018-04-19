let http = require("http");
const PORT = 7000

let server = http.createServer((request, response) => {
    if( request.url.indexOf("path") > -1 )
        response.end("you , nice person, found the path");
    response.end("it works, genius, request path was: " + request.url);
})

server.listen(PORT, () => {
    console.log("SERVER RUNNING nice ON PORT " + PORT);
})
//++++++++++++moreport+++++++++++++
let http2 = require("http");

const PORT2 = 7500

let server2 = http2.createServer((request, response) => {
    if( request.url.indexOf("path") > -1 )
        response.end("you big dummy");
    response.end("it works, request path was: " + request.url + " you big ruiner");
})

server2.listen(PORT2, () => {
    console.log("SERVER  RUNNING ON stupid PORT " + PORT2);
})