const sentence = 'hello there from lighthouse labs';

const withNewLine = sentence + '\n';
/* only way I could find to make it print on same line and then use new line
all other methods I tried made it print out one letter at a time on a new line per letter */

let initTime = 1000;
// creates a number value to start the print at (kept it at 1000ms delay)

let typewriter = function(sentence) {
  for (const char of withNewLine) {
    // changed 'char of sentence' to be 'char of withNewLine'
    setTimeout(() => {
      process.stdout.write(char);
      /* QUESTION FOR MENTOR!: 
      => how would we implement printing out all the letters as a delay in same line and then newline break?
       Tried doing process.stdout.write(char + '\n') under setTimeout (makes it print out one at a time on new lines)
       Tried doing process.stdout.write(char + '\n') outside of for..of loop (makes it print out one at a time on new lines) */
    }, initTime)

    initTime = initTime + 50
    // updates time by 50ms for each letter
  }
};

typewriter(sentence);