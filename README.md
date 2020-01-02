---
title: Intro and Overview of Node.JS
# revealOptions:
#     transition: 'zoom'
---

### Intro and Overview of

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" class="img-reset" style="width: 400px">

---

### What is node.js ?

Node.js® is a JavaScript runtime built on Chrome's <strong>V8 JavaScript engine</strong>. Node.js uses an <strong>event-driven, non-blocking I/O model</strong> that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world - nodejs.org

---

### V8 Javascript Engine

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/1200px-V8_JavaScript_engine_logo_2.svg.png" class="img-reset" style="width: 300px;">

---

### Event Driven

Node.js uses a single threaded model with event looping that's why enforces an asynchronous programming style.

<img src="https://miro.medium.com/max/2932/0*X7Z0k20cwHHi8UOI.png" class="img-reset" style="width: 600px" />

---

### Blocking vs Non-Blocking

<img src="https://miro.medium.com/max/2494/1*7yyXXq1Z5UP4-ePuxOMZ6Q.png" />

---

Not Good 🚫

```
// Blocking
const fs = require('fs');

const data = fs.readFileSync('/file.md'); // blocks here
console.log(data);

moreWork(); // will run after console.log
```

---

Excellent ✅

```
// Non-blocking
const fs = require('fs');

fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});

moreWork(); // will run before console.log
```

---

### When to use the Node.JS runtime ?

<ul>
  <li class="fragment fade-in-then-semi-out">video & audio streaming 🔥</li>
  <li class="fragment fade-in-then-semi-out">real-time apps 🔥</li>
  <li class="fragment fade-in-then-semi-out">live chats 🔥</li>
  <li class="fragment fade-in-then-semi-out">gaming apps 🔥</li>
  <li class="fragment fade-in-then-semi-out">collaboration tools 🔥</li>
  <li class="fragment fade-in-then-semi-out">stock exchange software 🔥</li>
  <li class="fragment fade-in-then-semi-out">CPU intensive operations 💩</li>
</ul>

---

### Node.JS = Runtime + JS Library

---

### File I/O Module

---

### How To Import The Required Module

<br />
The Node.js File System (fs) module can be imported using the following syntax.
<br /><br />

```
const fs = require('fs');
```

---

### Reading A File With Node.JS

Syntax
```
fs.readFile(file, callback)
```

Example
```
fs.readFile('example.txt', (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data.toString());
});
```

---

### Writing A File With Node.JS

Syntax
```
fs.writeFile(file, data, callback)
```

Example
```
fs.writeFile(
  'example.txt',
  'Learn Teach Code Seoul',
  (err) => {
    console.log("Data written successfully!");
  }
);
```

---

### Synchronous vs Asynchronous

<ul class="ul-1">
  <li class="fragment fade-in-then-semi-out">Every method in the fs module has synchronous as well as asynchronous forms.</li>
  <li class="fragment fade-in-then-semi-out">Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error.</li>
  <li class="fragment fade-in-then-semi-out">It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.</li>
  <li class="fragment fade-in-then-semi-out">Asynchronous programming will likely take some time to grasp and master.</li>
</ul>

---

### Events Module

---

### Events In The Browser

<br />
The browser triggers events and we can listen for them.
<br /><br />

```
<button id="myBtn">Click me!</button>
<script>
  document
    .getElementById("myBtn")
    .addEventListener(
      "click",
      function() {
        window.alert('clicked!');
        console.log('clicked!');
      }
    );
</script>
```

---

### Events In Node.JS

<br />
Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
<br /><br />

```
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greeting', (name) => {
  console.log(`Hey, ${name}`);
});

myEmitter.emit('greeting', 'Bob');
```

---

### How To Use Events

<ul class="ul-1">
  <li>All objects that emit events are instances of the EventEmitter class.</li>
  <li>These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.</li>
  <li>Typically, event names are camel-cased strings but any valid JavaScript property key can be used. (except for "error")</li>
  <li>When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.</li>
  <li>Any values returned by the called listeners are ignored and will be discarded.</li>
</ul>

---

### Events In Build-In Modules

<ul class="ul-1">
  <li>a <span  style="background: rgba(0,0,0,0.2);">net.Server</span> object emits an event each time a peer connects</li>
  <li>a <span  style="background: rgba(0,0,0,0.2);">fs.ReadStream</span> object emits an event each time a peer connects</li>
  <li>a <span  style="background: rgba(0,0,0,0.2);">stream</span> object emits an event each time a peer connects</li>
</ul>

---

### Event-Driven Programming

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

<img src="https://github.com/LearnTeachCodeSeoul/nodejs-course/raw/master/lesson4/event_loop.jpg" />

---

### Streams In Node.JS

"Almost all Node.js applications, no matter how simple, use streams in some manner."

---

### What are Streams?

Streams can be readable, writable, or both using buffers (a sort of queue or a byte array) in memory. We can process data while still receiving it. The feature is useful for extra large datasets such as video or database migration.

---

#### Analogy

<ul class="ul-1">
  <li>Streaming music VS. Downloading MP3 files</li>
  <li>Watching video clips on YouTube VS. Downloading video files.</li>
</ul>
<br /><br />

#### Streams VS. Arrays

<p>You can think of streams as being like arrays, but...</p>

<ul class="ul-1">
  <li>Arrays: having data distributed over space</li>
  <li>Streams: having data distributed over time</li>
</ul>

---

### Types of Node.JS Streams

There are four fundamental stream types

<ul class="ul-1">
  <li><strong>Readable:</strong> streams from which data can be read</li>
  <li><strong>Writable:</strong> streams to which data can be written</li>
  <li><strong>Duplex:</strong> streams that are both Readable and Writable</li>
  <li><strong>Transform:</strong> Duplex streams that can modify or transform the data as it is written and read</li>
</ul>

---

### Readable Streams

Readable streams are an abstraction for a source from which data is consumed. Readable streams use the EventEmitter API for notifying application code when data is available to be read off the stream.

---

### Readable Streams Events

<ul class="ul-1">
  <li>
    <q>data</q>
      <ul class="ul-1">
        <li>emitted when there is data available to be read from the stream.</li>
        <li>indicates that the stream has new information</li>
      </ul>
  </li>
   <li>
    <q>end</q>
      <ul class="ul-1">
        <li>emitted when there is no more data to be consumed from the stream.</li>
        <li>The 'end' event will not be emitted unless the data is completely consumed.</li>
      </ul>
  </li>
</ul>

---

### Example

```
const fs = require('fs');

const file = fs.createReadStream("example.txt");

file.on('data', (chunk) => {
	console.log(chunk.toString());
});

file.on('end', () => {
	console.log('There will be no data.')
});
```

---

### Writable Streams

Writable streams are an abstraction for a destination to which data is written. Writable streams expose methods such as write() and end() that are used to write data onto the stream.

---

### Writable Streams Methods

<ul class="ul-1">
  <li>
    writable.write(chunk)
      <ul class="ul-1">
        <li>writes some data to the writable stream.</li>
      </ul>
  </li>
   <li>
    writable.end([chunk])
      <ul class="ul-1">
        <li>signals that no more data will be written to the writable stream.</li>
        <li>the optional chunk allow one final additional chunk of data to be written immediately before closing the stream.</li>
      </ul>
  </li>
</ul>

---

### Example

```
const fs = require('fs');

const file = fs.createWriteStream('example.txt');

file.write('Intro and overview of node.js');

file.end();
```

---

### Piping Streams

<p style="font-size: 23pt">This provides an efficient way to write out data as soon as it's ready, without waiting for the complete resource to be read and written out.</p>

<p style="font-size: 23pt">The <strong>readable.pipe()</strong> method attaches a Writable stream to the Readable, causing it push all of its data to the attached Writable.</p>

<p style="font-size: 23pt; background: rgba(0,0,0,0.1)">**It's the most recommended way when we use Steram APIs.</p>

---

### Example

```
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	req.pipe(res);
});

server.listen(8080);
```

---

### HTTP Module

---

### Apache vs Nginx Performance

<img src="https://blog.webfaction.com/wp-content/uploads/2008/12/nginx-apache-reqs-sec.png" />
<br />
Hmmm... 🤔

---

### Apache vs Nginx Memory Usage

<img src="https://blog.webfaction.com/wp-content/uploads/2008/12/nginx-apache-memory.png" />
<br />

<p>What ??? 😬</p>

---

### Building a Simple Server

Here's an example of an HTTP server that simply responds to any request with "Hello, LTCS!".

```
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.write('Hello, LTCS!');
  res.end();
});

server.listen(3000);
```

---

### Reading Request Body Data

<p>When Node.js HTTP parser reads in and parses request data, it makes that data available in the form of data events that contains chunks of parsed data ready to be handled by the callback funtion.</p>

```
req.on('data', function(data) {
  console.log(data);
});
```

---

### Writing Response Body Data

First, call the res.write() method, which writes response data, and then use the res.end() method to end the response.

```
res.write('Hello, LTCS!\n');
res.write('Bye, LTCS!');
res.end();
```

<p>As shorthand, res.write() and res.end() can be conbined into one statement, which can be nice for small responses.</p>

```
res.end('Hello, LTCS!\nBye, LTCS!');
```

---

### Setting Response Headers

<p>
You should add headers in any order, but only up to the first res.write() or res.end(). After the first part of the response body is written, HTTP headers that thave been set will be flushed.
</p>

```
// plain text
res.setHeader('Content-Type', 'text/plain');

// html document
res.setHeader('Content-Type', 'text/html');
```

---

### Setting the Status Code of an HTTP Response

<p>
Set res.statusCode property. This property also should be assigned before the first call to res.write()or res.end().
</p>

<br />

```
res.statusCode = 404; // Not Found
```

<br />

**The default HTTP status code is 200.

---

### HTTP Status Codes

<ul class="ul-1">
  <li>2xx Success: 200 OK, 201 Created</li>
  <li>3xx Redirection: 301 Moved Permanently, 302 Found, 303 See Other</li>
  <li>4xx Client Error: 400 Bad Request, 401 Unauthorized, 404 Not Found</li>
  <li>5xx Server Error: 500 Internal Server Error, 503 Service Unavailable</li>
</ul>

---

### Modules And NPM

---

### Modules

<p>Java or Python use the import function to load other libraries, while PHP and Ruby use require. Node.js implements the CommonJS interface for modules. In Node.js you can also load other depencies using the require keyword.</p>

---

### Requring Modules


```
// look in the same directory
const some_module = require('./some_module');

// look in the parent directory
const some_module = require('../some_module');

// look in the root directory
const some_module = require('/Users/dale/some_module');

// look in the node_modules directory
const some_module = require('some_module');

```

---

### Creating and Exporting a Module

<p>Let’s look at how to create our own module and export it for use elsewhere in our program. Start off by creating a <strong>user.js</strong> file and adding the following:</p>

```
function getName() {
  return 'Jim';
}

module.exports.getName = getName;
```

---

### Creating and Exporting a Module

<p>Now create an <strong>index.js</strong> file in the same folder and add this:</p>

```
const user = require('./user');

console.log(`User: ${user.getName()}`);
```
<br />
<p>Run the program using node index.js and you should see the following output to the terminal:</p>

```
User: Jim
```

---

### Exporting Multiple Methods and Values

<p>We can export multiple methods and values in the same way:</p>

```
const getName = () => {
  return 'Jim';
};

const getLocation = () => {
  return 'Munich';
};

const dateOfBirth = '12.01.1982';

module.exports.getName = getName;
module.exports.getLocation = getLocation;
module.exports.dob = dateOfBirth;

```

---

### Export As You Go

We should also mention that it’s possible to export methods and values as you go, not just at the end of the file.

```
module.exports.getName = () => {
  return 'Jim';
};

module.exports.getLocation = () => {
  return 'Munich';
};

module.exports.dob = '12.01.1982';
```

---

### Exporting a Default Value

<p style="font-size: 18pt;">In the above example, we’re exporting functions and values individually. This is handy for helper functions that could be needed all over an app, but when you have a module that exports just the one thing, it’s more common to use module.exports:</p>

```
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
  }

  getUserStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
    `;
  }
}

module.exports = User;
```

---

### NPM (Node Package Manager)

The Node Package Manager is a utility that comes bundled with Node.js.

It allows you to easily install third-party packages and globally publish any Node.js packages you yourself create.

```
$ npm --version
$ npm help
```

---

### Installing NPM packages

Install a package into your node_modules directory using <span style="background: rgba(0,0,0,0.1);">`npm install <package>`</span>:

```
$ npm install lodash
$ ls node_modules
lodash
```
---

### Uninstalling NPM packages

Remove a package from your node_modules directory using <span style="background: rgba(0,0,0,0.1);">`npm uninstall <package>`</span>:

```
$ npm uninstall lodash
$ ls node_modules
```