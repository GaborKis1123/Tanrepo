// 1. Feladat //
let egeszosztok:number[] = [];

function osszesOszto(szam:number):number{
    var i:number = 0;
    var oszto:number = 1;

    for(oszto = 1; oszto <= szam; oszto++){
        if(szam % oszto == 0){
            egeszosztok[i] = oszto;
            i++;
        }
    }
    return this.egeszosztok;
}

// 2. Feladat //
function parosDarab(szamok:number[]):number{

    var darab:number = 0;
    var i:number = 0;

    for(i = 0; i < szamok.length; i++){
        if(szamok[i] % 2 == 0){
            darab++;
        }
    }

    return darab;
    }

// 3. Feladat //
function fuggvenyhivasPalindrom(fn: () => string):boolean{

    var szoveg:string = 'ab cd dc ba';
    var Palindrom:boolean;

    const karaktertombositettszoveg = szoveg.split(""); //string to array
    const karaktertombositettszovegvisszafele = karaktertombositettszoveg.reverse(); //array reverse
    var szovegvisszafele:string = karaktertombositettszovegvisszafele.toString(); //array to string
    
        if(szovegvisszafele = szoveg){
            Palindrom = true;
        }
        else{
            Palindrom = false;
        }
        return Palindrom;
    }

