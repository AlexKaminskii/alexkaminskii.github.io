const akcesoria = {
    opony: [0, 'Opony zimowe', 2000],
    gwarancja1: [1, 'Dodatkowa gwarancja - 1 rok', 5000],
    gwarancja2: [2, 'Dodatkowa gwarancja - 2 lata', 12000]
}

// var url = document.referrer;
// var nzw = url.substring(url.lastIndexOf('/') + 1).replace('.html', '');
// alert(nzw);

document.addEventListener('DOMContentLoaded', function () {

});

var kupowanie = document.getElementById('kupowanie');
function buy() {
    if (kupowanie.style.display = 'none') {
        kupowanie.style.display = 'block';
    }
    else {
        kupowanie.style.display = 'none';
    }
}

function confirm() {
    var opona = document.getElementById("opony").value;
    var gwara1 = document.getElementById("gwarancja1").value;
    var gwara2 = document.getElementById("gwarancja1").value;
    var cena = auto.cena;
    var imie = document.getElementById('imie').value;
    var datao = document.getElementById('datao').value;


    if (opona === true) {
        cena += akcesoria.opony[2];
    }
    if(gwara1 === true) {
        cena += akcesoria.gwarancja1[2];
    }
    if(gwara2 === true) {
        cena += akcesoria.gwarancja1[2];
    }

    var correct = false;

    if (imie.includes(' ') && imie.charCodeAt(0) != 32 && imie.charCodeAt(imie.lenght) != 32) {
        correct = true;
    }
    document.getElementById('nameForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('nameInput').value;
        const nameParts = nameInput.split(' ');

        if (nameParts.length === 2 && nameParts[0] && nameParts[1]) {
            alert('Podano poprawne imię i nazwisko.');
        } else {
            alert('Niepoprawne imię i nazwisko.');
        }
    });

}