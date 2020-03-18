const MAX_DEPTH = 20;

const timer = (depth = 0) => {
  
  if (depth >= MAX_DEPTH) return;

  const start = Date.now();

  setTimeout(() => {
    const end = Date.now();
    console.log(`elapsed => ${end-start}`);
    timer(++depth);
  }, 0);

}

timer();