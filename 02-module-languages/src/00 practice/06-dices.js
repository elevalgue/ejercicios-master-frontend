console.log("************** PRACTICE *********************");
console.log("06 - Dices");

function initializeDices() {
  let diceA;
  let diceB;

  const renderDices = {
    reset() {
      let diceA = null;
      let diceB = null;
      console.log(diceA, diceB, 'los dados deberΓ­an ser null');
    },
    
    rollDices(max, min) {
      diceA = Math.floor(Math.random(max, min) * (6 - 1) + 1);
      diceB = Math.floor(Math.random(max, min) * (6 - 1) + 1);
      console.log('Cruza los dedos y tira los dados π²');
      return {
        renderMessage: function () {
          if (diceA === 6 && diceB === 6) {
            console.log('ππ  Enhorabuena! tenemos ganador ππ π');
          } else {
            console.log(`El primer dado es ${diceA} y el segndo ${diceB}`);
          }
          console.log(diceA);
        }
      }
    }
  }
  return renderDices; 
}

let roll = initializeDices();
roll.rollDices();
// roll.renderMessage();
roll.reset();
