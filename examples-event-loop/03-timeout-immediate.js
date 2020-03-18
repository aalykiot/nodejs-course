setTimeout(() => {
  console.log('timer!');
}, 0);

setImmediate(() => {
  console.log('immediate!');
});