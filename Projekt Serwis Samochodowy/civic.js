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

// const auto = dane.HondaCivic
function cena() {
    document.getElementById("cena").innerHTML = auto.cena + "PLN";
}
function nazwa() {
    document.getElementById("nazwa").innerHTML = `${auto.marka} ${auto.model} ${auto.rocznik}`;
}


function tabela() {
    document.getElementById("tabela").innerHTML = `<center><table class="c">` + 
    `<tr>
				<td>&nbsp;Marka</td>
				<td>&nbsp;${auto.marka}</td>
			</tr>
			<tr>
				<td class="g">&nbsp;Model</td>
				<td class="g">&nbsp;${auto.model}</td>
			</tr>
			<tr>
				<td>&nbsp;Przebieg</td>
				<td>&nbsp;${auto.przebieg} km</td>
			</tr>
			<tr>
				<td class="g">&nbsp;Rocznik</td>
				<td class="g">&nbsp;${auto.rocznik}</td>
			</tr>
			<tr>
				<td>&nbsp;Cabrio</td>
				<td>&nbsp;${auto.cabrio}</td>
			</tr>
            <tr>
				<td class="g">&nbsp;Skrzynia biegów</td>
				<td class="g">&nbsp;${auto.skrzynia}</td>
			</tr>
            <tr>
				<td>&nbsp;Bezwypadkowy</td>
				<td>&nbsp;${auto.bezwypadkowy}</td>
			</tr>
            <tr>
				<td class="g">&nbsp;Stan</td>
				<td class="g">&nbsp;${auto.stan}</td>
			</tr>
            <tr>
				<td>&nbsp;Moc</td>
				<td>&nbsp;${auto.moc}KM</td>
			</tr>
            <tr>
				<td class="g">&nbsp;Napęd</td>
				<td class="g">&nbsp;${auto.napęd}</td>
			</tr>
            <tr>
				<td>&nbsp;Rodzaj</td>
				<td>&nbsp;${auto.rodzaj}</td>
			</tr>`
            + `</table></center>`
}
function title() {
    document.getElementsByTagName('title').innerHTML = auto.marka + auto.nazwa
}

document.addEventListener('DOMContentLoaded', function () {
    tabela();
    cena();
    nazwa();
    title();
});



// var plik = location.pathname.split('/').pop();

