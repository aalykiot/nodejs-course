const start = new Date();

const timer = (depth = 0) => {
  if (depth === 10) {
    const stop = new Date();
    console.log(`Timers => ${stop-start}ms`);
    return;
  }
  setTimeout(() => {
    timer(++depth);
  }, 0);
}

timer();

const start_i = new Date();

const immediate = (depth = 0) => {
  if (depth === 10) {
    const stop = new Date();
    console.log(`Immediate => ${stop-start_i}ms`);
    return;
  }
  setImmediate(() => {
    immediate(++depth);
  });
}

immediate();