const dane = {
    HondaCivic: {
        idk: 'civic',
        marka: "Honda",
        model: "Civic",
        rocznik: 2007,
        cena: 20000,
        przebieg: 100000,
        cabrio: "Nie",
        skrzynia: "Manualna",
        moc: 200,
        stan: "Używany",
        bezwypadkowy: "Tak",
        napęd: "Przednie koła",
        img: ['civic/4.webp', 'civic/3.webp', 'civic/1.webp', 'civic/2.webp'],
        search: ['civic', 'honda', 'ho', 'ci'],
        rodzaj: 'Benzyna'
    },
    MazdaMX5: {
        idk: 'miata',
        marka: "Mazda",
        model: "MX5",
        rocznik: 2004,
        cena: 24000,
        przebieg: 150000,
        cabrio: "Tak",
        skrzynia: "Manualna",
        moc: 110,
        stan: "Używany",
        bezwypadkowy: "Tak",
        napęd: "Tylne koła",
        img: ['miata/1.webp', 'miata/2.webp', 'miata/3.webp', 'miata/4.webp'],
        search: ['mazda', 'miata', 'mx5', 'ma'],
        rodzaj: 'Benzyna'
    },
    VolkswagenPassat: {
        idk: 'passat',
        marka: "Volkswagen",
        model: "Passat 2.0 TDI",
        rocznik: 2017,
        cena: 72000,
        przebieg: 180000,
        cabrio: "Nie",
        skrzynia: "Manualna",
        moc: 150,
        stan: "Używany",
        bezwypadkowy: "Tak",
        napęd: "Przednie koła",
        img: ['passat/1.webp', 'passat/2.webp', 'passat/3.webp', 'passat/4.webp'],
        search: ['volks', 'volkswagen', 'passat', 'pa', 'vol'],
        rodzaj: 'Diesel'

    },
    MercedesSprinter: {
        idk: 'sprinter',
        marka: "Mercedes-Benz",
        model: "Sprinter",
        rocznik: 2023,
        cena: 330000,
        przebieg: 10,
        cabrio: "Nie",
        skrzynia: "Automatyczna",
        moc: 190,
        stan: "Nowy",
        bezwypadkowy: "Tak",
        napęd: "4x4",
        img: ['sprinter/1.webp', 'sprinter/2.webp', 'sprinter/3.webp', 'sprinter/4.webp'],
        search: ['merc', 'mercedes', 'sprinter', 'spr'],
        rodzaj: 'Diesel'
    },
    McLaren650S: {
        idk: 'mclaren',
        marka: "McLaren",
        model: "650S Coupé",
        rocznik: 2014,
        cena: 450000,
        przebieg: 100000,
        cabrio: "Nie",
        skrzynia: "Automatyczna",
        moc: 650,
        stan: "Używany",
        bezwypadkowy: "Tak",
        napęd: "Tylne koła",
        img: ['mclaren/1.webp', 'mclaren/2.webp', 'mclaren/3.webp', 'mclaren/4.webp'],
        search: ['mc', 'mclaren', '650S', '650'],
        rodzaj: 'Benzyna'
    }
};


var samochody = [dane.HondaCivic, dane.MazdaMX5, dane.VolkswagenPassat, dane.MercedesSprinter, dane.McLaren650S];
var id_samochody = ['civic', 'miata', 'passat', 'sprinter', 'mclaren'];

function search(id, auto, input) {
    if(input === "") {
        location.reload();
    }
    const element = document.getElementById(id);
    element.style.display = 'none';
    for (let i = 0; i < auto.search.length; i++) {
        if (input.includes(auto.search[i])) {
            element.style.display = 'block';
            break; // Added a break statement to exit the loop if a match is found
        }
    }
}

function getVal() {
    const input = document.querySelector('#szukaj').value.toLowerCase();

    search('miata', dane.MazdaMX5, input);
    search('civic', dane.HondaCivic, input);
    search('passat', dane.VolkswagenPassat, input);
    search('sprinter', dane.MercedesSprinter, input);
    search('mclaren', dane.McLaren650S, input);
}

function auto(id, auto) {
    const element = document.getElementById(id);
    element.innerHTML =
        `
    <div class="car">
    <img src="${auto.img[0]}" alt="" class="car-img">
    <div class="carinfo">
    <h1 id="cn">${auto.marka + " " + auto.model}</h1>
    <h3>${auto.rocznik}, ${auto.przebieg}km</h3>
    <h1 id="cn">${auto.cena}PLN</h1>
    </div>
    </div>
    `;
}

// function priceCheck() {
//     const min = parseInt(document.querySelector('#min').value);
//     const max = parseInt(document.querySelector('#max').value);

//     for (const key in dane) {
//         if (dane.hasOwnProperty(key)) {
//             const samochod = dane[key];
//             const cena = samochod.cena;
//             const elem = document.getElementById(key);

//             if (elem.style.display === 'block') {
//                 if (cena >= min && cena <= max) {
//                     elem.style.display = 'block';
//                 } else {
//                     elem.style.display = 'none';
//                 }
//             }
//         }
//     }
// }


document.addEventListener('DOMContentLoaded', function() {
    auto('miata', dane.MazdaMX5);
    auto('civic', dane.HondaCivic);
    auto('passat', dane.VolkswagenPassat);
    auto('sprinter', dane.MercedesSprinter);
    auto('mclaren', dane.McLaren650S);
});




function idzDo(ID) {
    location.assign(`${ID}.html`)
}