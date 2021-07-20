/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function() {

eval("\r\nvar _this = this;\r\nvar newDice = document.getElementById(\"newDiceBtn\");\r\nvar rollDice = document.getElementById(\"rollDiceBtn\");\r\nvar sumDice = document.getElementById(\"sumDiceBtn\");\r\nvar diceArea = document.getElementById(\"diceArea\");\r\nvar sumArea = document.getElementById(\"sumArea\");\r\n// let dice1 = document.getElementById(\"gg-dice-1\");\r\n// let dice2 = document.getElementById(\"gg-dice-2\");\r\n// let dice3 = document.getElementById(\"gg-dice-3\");\r\n// let dice4 = document.getElementById(\"gg-dice-4\");\r\n// let dice5 = document.getElementById(\"gg-dice-5\");\r\n// let dice6 = document.getElementById(\"gg-dice-6\");\r\nvar diceArr = [];\r\nvar Dice = /** @class */ (function () {\r\n    function Dice(val) {\r\n        var _this = this;\r\n        this.val = val;\r\n        this.div = document.createElement(\"div\");\r\n        this.div.className = \"dice\";\r\n        this.div.addEventListener(\"click\", function () { return _this.randomNum(); });\r\n        this.randomNum();\r\n        diceArea.appendChild(this.div);\r\n        diceArr.push(this);\r\n    }\r\n    // random number function\r\n    Dice.prototype.randomNum = function () {\r\n        var randomNum = Math.floor(Math.random() * 6 + 1);\r\n        this.val = randomNum;\r\n        this.div.innerHTML = this.val;\r\n    };\r\n    return Dice;\r\n}());\r\nnewDice.addEventListener(\"click\", function () { return new Dice(); });\r\nrollDice.addEventListener(\"click\", function () { return diceArr.forEach(function (dice) { return dice.randomNum(); }); });\r\nsumDice.addEventListener(\"click\", function () {\r\n    var sum = 0;\r\n    diceArr.forEach(function (dice) { return (sum += dice.val); });\r\n    console.log(sum);\r\n    _this.sum = sum;\r\n    _this.sumArea.innerHTML = _this.sum;\r\n});\r\nReset.addEventListener(\"click\", function () { window.location.reload(\"\"); });\r\n\n\n//# sourceURL=webpack://diceyBusines/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;