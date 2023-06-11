const akcesoria = {
    0: ['Opony zimowe', 2000],
    1: ['Dodatkowa gwarancja - 1 rok', 5000],
    2: ['Dodatkowa gwarancja - 2 lata', 12000]
}


document.addEventListener('DOMContentLoaded', function () {
    var url = document.referrer;
    var nzw = url.substring(url.lastIndexOf('/') + 1).replace('.html', '');
    alert(nzw);
});
