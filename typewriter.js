const sentence = "hello there from lighthouse labs";
let delay =0;

for ( let i=0; i<sentence.length; i++){
  setTimeout(()=>{process.stdout.write(sentence[i])
  if (i===sentence.length-1){
    process.stdout.write('\n');
  }
  }, delay);
    delay+=50;

}
// for (const char of sentence){
//   setTimeout(()=>{process.stdout.write(char)
//   }, delay);
//   delay+=50;
  
// }
