"use strict";
var _this = this;
var newDice = document.getElementById("newDiceBtn");
var rollDice = document.getElementById("rollDiceBtn");
var sumDice = document.getElementById("sumDiceBtn");
var diceArea = document.getElementById("diceArea");
var sumArea = document.getElementById("sumArea");
// let dice1 = document.getElementById("gg-dice-1");
// let dice2 = document.getElementById("gg-dice-2");
// let dice3 = document.getElementById("gg-dice-3");
// let dice4 = document.getElementById("gg-dice-4");
// let dice5 = document.getElementById("gg-dice-5");
// let dice6 = document.getElementById("gg-dice-6");
var diceArr = [];
var Dice = /** @class */ (function () {
    function Dice(val) {
        var _this = this;
        this.val = val;
        this.div = document.createElement("div");
        this.div.className = "dice";
        this.div.addEventListener("click", function () { return _this.randomNum(); });
        this.randomNum();
        diceArea.appendChild(this.div);
        diceArr.push(this);
    }
    // random number function
    Dice.prototype.randomNum = function () {
        var randomNum = Math.floor(Math.random() * 6 + 1);
        this.val = randomNum;
        this.div.innerHTML = this.val;
    };
    return Dice;
}());
newDice.addEventListener("click", function () { return new Dice(); });
rollDice.addEventListener("click", function () { return diceArr.forEach(function (dice) { return dice.randomNum(); }); });
sumDice.addEventListener("click", function () {
    var sum = 0;
    diceArr.forEach(function (dice) { return (sum += dice.val); });
    console.log(sum);
    _this.sum = sum;
    _this.sumArea.innerHTML = _this.sum;
});
Reset.addEventListener("click", function () { window.location.reload(""); });
