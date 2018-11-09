// var logger = require('./logger')
// console.log(logger)
// function greeting(name){
//   console.log("Hello" + " " + name)
// }
// greeting("vincent")

// var message = " ";
// console.log(message)

// working with filepath or dirpath in node

// const path = require("path")

// var pathobj = path.parse(__filename)

// console.log(pathobj)

// const path = require("path")

// var pathobj = path.parse(__dirname)

// console.log(pathobj)


//working with operating system in node

// const os = require("os")
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

//working with file system in node

// const fs = require("fs")
// var files = fs.readdirSync("./");
// console.log(files)

    //or

// const fs = require("fs")
// var files = fs.readdir("./", function(err, file){
//   if(err) console.log("error", err);
//   else console.log('Result', file)
// })
// console.log(files)

//working with an emitter to display alert

// const EventEmitter = require("events");
// const emitter = new EventEmitter()

// emitter.on("messagelogged", function(arg){
//   console.log("Listener called", arg)
// });
// emitter.emit("messagelogged", {id:1, url: "http://"})


// const EventEmitter = require("events");
// const emitter = new EventEmitter()
// emitter.on("logging", (arg) => {
//   console.log("getting use to emitter", arg);
// })
// emitter.emit("logging", {name:"vincent", password: "pato"})

//extending eventemitter

// const EventEmitter = require("events")
// const Logger = require("./logger")
// const logger = new Logger();

// //Register a listener

// logger.on("messageLogged", (arg) => {
//   console.log('Listener called')
// });
// logger.log("message");


const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === "/") {
    res.write('Hello world');
    res.end();
  }

  if(req.url === "/api/courses") {
    res.write(JSON.stringify([1,2,3,4]))
    res.end();
  }
})
server.listen(3000);
console.log("Listening on port 3000...")