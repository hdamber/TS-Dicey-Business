import $ from 'jquery';

const container = document.createElement('main');
container.className = 'container';
// let btnA = document.getElementById('buttonAdd');
// let btnR = document.getElementById('buttonRoll');
// let btnS = document.getElementById('buttonSum');
// document.body.appendChild(container);
let counter = 0;
let diceArr: any[] = [];


class Die {
    public div: JQuery;
    constructor() {
        this.div = $("<div></div>");
        $(this.div).text(counter);
        this.render();
        diceArr.push(this.div);
        this.roll();
        this.clickEvent();
        this.rollAll();
    }

    //double click event that removes a dice on a double click
    clickEvent() {
        $(this.div).on('click', () => {
            this.roll();
            $(this.div).css('background-color', this.randomColor());
        });
        $(this.div).on('dblclick', () => this.deleteDie());
    }

    roll() {
        let result = Math.floor((Math.random() * 6) + 1)
        $(this.div).text(result);
        // this.div.innerHTML = this.value
    }

    rollAll() {
        $('#roll-btn').on('click', () => this.roll());
    }

    render() {
        $(this.div).addClass('die');
        $(this.div).attr('id', counter);
        $('#container').append(this.div);
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    deleteDie() {
        $(this.div).remove();
        let dieClass = diceArr.indexOf(this.div);
        diceArr.splice(dieClass, 1);
    }

}

$('#sum-btn').on('click', function () {
    let integers: any[] = [];
    diceArr.forEach(function (e) {
        integers.push(parseInt($(e).text(), 10));
    })
    let final = integers.reduce(sumDice);
    alert(`Your sum is ${final}!`);
})

function sumDice(a: number, b: number) {
    return a + b;
}

