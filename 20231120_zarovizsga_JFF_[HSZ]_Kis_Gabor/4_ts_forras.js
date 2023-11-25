// 1. Feladat //
var egeszosztok = [];
function osszesOszto(szam) {
    var i = 0;
    var oszto = 1;
    for (oszto = 1; oszto <= szam; oszto++) {
        if (szam % oszto == 0) {
            egeszosztok[i] = oszto;
            i++;
        }
    }
    return this.egeszosztok;
}
// 2. Feladat //
function parosDarab(szamok) {
    var darab = 0;
    var i = 0;
    for (i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            darab++;
        }
    }
    return darab;
}
// 3. Feladat //
function fuggvenyhivasPalindrom(fn) {
    var szoveg = 'ab cd dc ba';
    var Palindrom;
    var karaktertombositettszoveg = szoveg.split(""); //string to array
    var karaktertombositettszovegvisszafele = karaktertombositettszoveg.reverse(); //array reverse
    var szovegvisszafele = karaktertombositettszovegvisszafele.toString(); //array to string
    if (szovegvisszafele = szoveg) {
        Palindrom = true;
    }
    else {
        Palindrom = false;
    }
    return Palindrom;
}
