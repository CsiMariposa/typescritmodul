//ADAT Importálás
interface snookerAdatok{
    Helyezes:number;
    Nev:string;
    Orszag:string; 
    Nyeremeny:number;
}

//1) Adatok feltöltése 
function ObjektumFeltolto(feltoltendoElem:string[]):snookerAdatok[]{
    var beolvasottAdatok:snookerAdatok[]=[];
    for(let i:number=0;i<feltoltendoElem.length;i++){
        let daraboltSor:string[]=feltoltendoElem[i].split(";");
        let objektum:snookerAdatok={
            Nev:String,
            Helyezés:number(daraboltSor[1]),
            Orszag:String,(daraboltSor[2]),
            Nyewremeny:Number(daraboltSor[3])
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}

var SnookerData:nookerAdatok[]=ObjektumFeltolto(csapatAdat);

function Adatkiiro(adatok:nookerAdatok[]):void{
    for(let i:number=0;i<adatok.length;i++){
        console.log(adatok[i].csapat+":"+adatok[i].pontszam);
    }
}
Adatkiiro(SnookerData);

function LegtobbNyeremeny(vizsgaltObjektum:number[]):number {
        var maxErtek = vizsgaltObjektum[0];
        for (var i = 1; i < vizsgaltObjektum.length; i++) {
            if (vizsgaltObjektum[i] > maxErtek) {
                maxErtek = vizsgaltObjektum[i];
            }
        }

        return [maxErtek];
    }


