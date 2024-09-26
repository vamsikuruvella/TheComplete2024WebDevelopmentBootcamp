// const progressBar = (progress, total) => {
//     const percent = (progress / total) * 100;
//     const barLength = 20;  // Length of the bar
//     const progressLength = Math.floor((progress / total) * barLength);
//     const bar = '█'.repeat(progressLength) + '-'.repeat(barLength - progressLength);
    
//     process.stdout.write(`\r|${bar}| ${percent.toFixed(2)}% Complete`);
//   };
  
//   const totalSteps = 100;
//   let progress = 0;
  
//   const interval = setInterval(() => {
//     progressBar(progress, totalSteps);
//     progress += 1;
    
//     if (progress > totalSteps) {
//       clearInterval(interval);
//       console.log('\nDone!');
//     }
//   }, 100);
  

import progress1 from 'progress'
const ProgressBar = progress1

const bar = new ProgressBar(':bar :percent', { total: 100 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
    console.log('\nCompleted!');
  }
}, 100);
