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