---
title: Intro and Overview of Node.JS
# revealOptions:
#     transition: 'zoom'
---

### Intro and Overview of

<img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" class="img-reset" style="width: 400px">

---

### What is node.js ?

Node.js® is a JavaScript runtime built on Chrome's <strong>V8 JavaScript engine</strong>. Node.js uses an <strong>event-driven, non-blocking I/O model</strong> that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world - nodejs.org

---

### V8 Javascript Engine

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others.

<img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/1200px-V8_JavaScript_engine_logo_2.svg.png" class="img-reset" style="width: 300px;">

---

### Event Driven

Node.js uses a single threaded model with event looping that's why enforces an asynchronous programming style.

<img data-src="https://miro.medium.com/max/2932/0*X7Z0k20cwHHi8UOI.png" class="img-reset" style="width: 600px" />

---

### Blocking vs Non-Blocking

<img data-src="https://miro.medium.com/max/2494/1*7yyXXq1Z5UP4-ePuxOMZ6Q.png" />

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

<img data-src="https://github.com/LearnTeachCodeSeoul/nodejs-course/raw/master/lesson4/event_loop.jpg" />