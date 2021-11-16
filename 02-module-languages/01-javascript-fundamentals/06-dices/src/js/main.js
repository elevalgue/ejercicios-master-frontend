console.log("************** PRACTICE *********************");
console.log("09 - Primes");

// let diceA; 
// let diceB; 

function renderDices() {
  let diceA; 
  let diceB;
  console.log(diceA, diceB, 'hello world from render');
  
  function rollDices(min, max) {
    diceA = Math.random(min, max) * (6 - 1) + 1;
    diceB = Math.random(min, max) * (6 - 1) + 1;
  }

  function reset() {
    diceA = null; 
    diceB = null;
    console.log(diceA, diceB, 'hello world from reset');
  }
  
  return {
    renderMessage: function () {
      rollDices()
      console.log(diceA, diceB, 'hello, its me');
      reset();
    }
  }

}

renderDices();
