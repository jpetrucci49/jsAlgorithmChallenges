module.exports = (runs, method) => {
  let total = 0;
  for (let i = 0; i < runs; i++) {
    const tempArr = [...new Array(5000)].map(() => Math.floor(Math.random() * 100) + 1);
    const start = Date.now();
    method(tempArr);
    const end = Date.now();
    const time = end - start;
    total += time;
    // console.log(`Execution time: ${time} Run: ${i}`)
  }
  return `Average time over ${runs} runs: ${total / runs}ms`;
};
