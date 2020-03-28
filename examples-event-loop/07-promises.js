setTimeout(() => {
  console.log('timer!');
}, 0);

setImmediate(() => {
  console.log('immediate!');
});

process.nextTick(() => {
  console.log('tick!');
});

Promise.resolve('promise!').then(console.log);