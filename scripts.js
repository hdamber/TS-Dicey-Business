"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
var container = document.createElement('main');
container.className = 'container';
// let btnA = document.getElementById('buttonAdd');
// let btnR = document.getElementById('buttonRoll');
// let btnS = document.getElementById('buttonSum');
// document.body.appendChild(container);
var counter = 0;
var diceArr = [];
var Die = /** @class */ (function () {
    function Die() {
        this["export"] = jQuery;
        this.div = jquery_1["default"]("<div></div>");
        jquery_1["default"](this.div).text(counter);
        this.render();
        diceArr.push(this.div);
        this.roll();
        this.clickEvent();
        this.rollAll();
    }
    //double click event that removes a dice on a double click
    Die.prototype.clickEvent = function () {
        var _this = this;
        jquery_1["default"](this.div).on('click', function () {
            _this.roll();
            jquery_1["default"](_this.div).css('background-color', _this.randomColor());
        });
        jquery_1["default"](this.div).on('dblclick', function () { return _this.deleteDie(); });
    };
    Die.prototype.roll = function () {
        var result = Math.floor((Math.random() * 6) + 1);
        jquery_1["default"](this.div).text(result);
        // this.div.innerHTML = this.value
    };
    Die.prototype.rollAll = function () {
        var _this = this;
        jquery_1["default"]('#roll-btn').on('click', function () { return _this.roll(); });
    };
    Die.prototype.render = function () {
        jquery_1["default"](this.div).addClass('die');
        jquery_1["default"](this.div).attr('id', counter);
        jquery_1["default"]('#container').append(this.div);
    };
    Die.prototype.randomColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };
    Die.prototype.deleteDie = function () {
        jquery_1["default"](this.div).remove();
        var dieClass = diceArr.indexOf(this.div);
        diceArr.splice(dieClass, 1);
    };
    return Die;
}());
jquery_1["default"]('#sum-btn').on('click', function () {
    var integers = [];
    diceArr.forEach(function (e) {
        integers.push(parseInt(jquery_1["default"](e).text(), 10));
    });
    var final = integers.reduce(sumDice);
    alert("Your sum is " + final + "!");
});
function sumDice(a, b) {
    return a + b;
}
