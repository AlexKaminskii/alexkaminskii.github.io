const akcesoria = {
    opony: [0, 'Opony zimowe', 2000],
    gwarancja1: [1, 'Dodatkowa gwarancja - 1 rok', 5000],
    gwarancja2: [2, 'Dodatkowa gwarancja - 2 lata', 12000]
};

var kupowanie = document.getElementById('kupowanie');

function buy() {
    if (document.getElementById('kupowanie').style.display == 'none') {
        document.getElementById('kupowanie').style.display = 'block';
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    } else {
        document.getElementById('kupowanie').style.display = 'none';
    }
}

function confirm() {
    var opona = document.getElementById("opony").checked;
    var gwara1 = document.getElementById("gwarancja1").checked;
    var gwara2 = document.getElementById("gwarancja2").checked;
    var cena = auto.cena;
    var imie = document.getElementById('imie').value;
    var datao = document.getElementById('datao').value;

    if (opona) {
        cena += akcesoria.opony[2];
    }
    if (gwara1) {
        cena += akcesoria.gwarancja1[2];
    }
    if (gwara2) {
        cena += akcesoria.gwarancja2[2];
    }

    if (nazwisko()) {
        var inputDate = document.getElementById('datao').value;
        var currentDate = new Date();
        var fourteenDaysFromNow = new Date();
        fourteenDaysFromNow.setDate(fourteenDaysFromNow.getDate() + 13);

        if (!inputDate || new Date(inputDate) < fourteenDaysFromNow) {
            document.getElementById('wrongdate').style.display = 'block';
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
        else {
            document.getElementById('wszystko').style.display = 'none';
            document.write( `
            <center>
            <p style="font-size:3vw;font-weight:900;">Dziękujemy za zakup ${auto.marka} ${auto.model}, za ${cena}PLN
            <p style="font-size:3vw;font-weight:900;">Auto zostanie dostarczone <span style="color:red">${datao}</span></p>
            <center>         
            `)
        }
    }
}

function nazwisko() {
    const nameInput = document.getElementById('imie').value;
    const nameParts = nameInput.split(' ');

    if (nameParts.length === 2 && nameParts[0] && nameParts[1]) {
        document.getElementById('wrongname').style.display = 'none';
        
        return true;
    } else {
        document.getElementById('wrong').style.display = 'block';
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
        return false;
    }
}

function setMinDate() {
    var today = new Date();
    var minDate = new Date();
    minDate.setDate(today.getDate() + 14);

    var dateInput = document.getElementById('datao');
    dateInput.min = minDate.toISOString().split('T')[0];
}
document.addEventListener('DOMContentLoaded', function () {
    setMinDate();

});
















// function decodeDataFromURL(url) {
//     var queryString = url.split('?')[1];

//     if (!queryString) {
//         console.log('No query parameters found in the URL.');
//         return;
//     }

//     var queryParams = queryString.split('&');
//     var decodedData = {};

//     for (var i = 0; i < queryParams.length; i++) {
//         var param = queryParams[i].split('=');
//         var key = decodeURIComponent(param[0]);
//         var value = decodeURIComponent(param[1]);
//         decodedData[key] = value;
//     }

//     return decodedData;
// }


// function encodeDataToURL(data) {
//     var queryString = Object.keys(data)
//         .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//         .join('&');

//     var url = window.location.origin + '?' + queryString;
//     return url;
// }

// function encodeFormToURL() {


//     var data = {
//         fura: `${auto.marka} ${auto.model}`,
//         cena: cena,
//         imie: imie,
//         datao: datao
//     };

//     var encodedURL = encodeDataToURL(data);
//     console.log(encodedURL);
// }

// // Example usage
// encodeFormToURL();



// decodeDataFromURL(window.location.href);
// encodeDataToURL(data);


