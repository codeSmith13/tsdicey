let newDice = document.getElementById("newDiceBtn");
let rollDice = document.getElementById("rollDiceBtn");
let sumDice = document.getElementById("sumDiceBtn");
let diceArea = document.getElementById("diceArea");
let sumArea = document.getElementById("sumArea");
// let dice1 = document.getElementById("gg-dice-1");
// let dice2 = document.getElementById("gg-dice-2");
// let dice3 = document.getElementById("gg-dice-3");
// let dice4 = document.getElementById("gg-dice-4");
// let dice5 = document.getElementById("gg-dice-5");
// let dice6 = document.getElementById("gg-dice-6");
let diceArr: Dice[] = [];


class Dice {
  val: number;
  div: HTMLDivElement;
  
  constructor(val: number) {
    this.val = val;
    this.div = document.createElement("div");
    this.div.className = "dice";
    this.div.addEventListener("click", () => this.randomNum());
    this.randomNum();
    diceArea.appendChild(this.div);
    diceArr.push(this);


  }
  // random number function
  randomNum() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    this.val = randomNum;
    this.div.innerHTML = this.val;
  }

  // Add to event listener outside of constructor  
  // sumOfDice(){
  //   let sum = 0;
  //   diceArr.forEach((dice) => (sum += dice.value));
  //   console.log(sum);
  //  }
}
newDice.addEventListener("click", () => new Dice());
rollDice.addEventListener("click", () => diceArr.forEach((dice) => dice.randomNum()));

sumDice.addEventListener("click", () => {
  
  let sum = 0;
  diceArr.forEach((dice) => (sum += dice.val));
  console.log(sum);
  this.sum = sum;
  this.sumArea.innerHTML = this.sum;

});


Reset.addEventListener("click", () => { window.location.reload("") });


