//1) Adatok feltöltése 
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltSor = feltoltendoElem[i].split(";");
        var objektum = {
            Nev: String,
            Helyezés: number(daraboltSor[1]),
            Orszag: String,
        }(daraboltSor[2]), Nyewremeny = void 0;
        (daraboltSor[3]);
    }
    ;
    beolvasottAdatok.push(objektum);
}
return beolvasottAdatok;
var SnookerData = ObjektumFeltolto(csapatAdat);
function Adatkiiro(adatok) {
    for (var i = 0; i < adatok.length; i++) {
        console.log(adatok[i].csapat + ":" + adatok[i].pontszam);
    }
}
Adatkiiro(SnookerData);
function LegtobbNyeremeny(vizsgaltObjektum) {
    var maxErtek = vizsgaltObjektum[0];
    for (var i = 1; i < vizsgaltObjektum.length; i++) {
        if (vizsgaltObjektum[i] > maxErtek) {
            maxErtek = vizsgaltObjektum[i];
        }
    }
    var maxErtekIndexe = [];
    for (var i = 0; i < vizsgaltObjektum.length; i++) {
        if (vizsgaltObjektum[i] == maxErtek)
            maxErtekIndexe.push(i);
    }
    return [maxErtek, maxErtekIndexe];
}
