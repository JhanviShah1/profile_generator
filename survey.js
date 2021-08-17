const readline = require('readline');
const rl  = readline.Interface({
  input: process.stdin,
  output:process.stdout,
  
});
const store = [];
rl.question('What\'s your name? Nicknames are also acceptable :)?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  store.push(answer);
  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    store.push(answer);
    rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      store.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        store.push(answer);
        rl.question('Which sport is your absolute favourite?', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          store.push(answer);

          rl.question('What is your superpower? In a few words, tell us what you are amazing at!?', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            store.push(answer);
            console.log(store);
            rl.close();
          });
        });
      });
    });
  });
  
});
