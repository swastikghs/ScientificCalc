var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
console.log(btn);
/*The querySelectorAll() method returns all elements that matches a CSS selector(s).

  The querySelectorAll() method returns a NodeList.

  The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid*/

/*============ For getting the value of button, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener /*The addEventListener() method attaches an event handler to a document.*/ ('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            console.log('replace add', item); /*If condition is working for multiplication button*/
            btntext = '*';
        }

        if (btntext == '÷') {
            console.log('replace divide', item); /*If condition is working for division button*/
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
    console.log('screen value', screen.value); /*Checking if Backspace function is working*/
}