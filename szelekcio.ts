function HosegriadoSzint(){
    let nap1:number=""; 
    let nap2:number="";
    let nap3:number=""; 
    for(let i:number=0;i<pontok.length;i++){
        összpontszam+=pontok[i];
        return pontok++; 
    }
        if(pontok>39){
        return [összpontszam+1];
    }
    else if(jegy>59){
        return [összpontszam+2];
    }
    else if(jegy>79){
        return [összpontszam+3];
    }
    else if(jegy>119){
        return [összpontszam+ 4];
    }
    else{
        return [összpontszam+ 5];
    }
}
