function LettKod(vizsgaltSzoveg:string):string{
    var maganhangzok:string[] = ["A","a","o","O","i","I","e","E"];
    var modositottSzo:string= "";
    for(let i:number=0;i<vizsgaltSzoveg.length;i++){
        let cserelniKell:boolean=false;
        for(let j:number=0;j<maganhangzok.length;j++){
            if(vizsgaltSzoveg[i]==maganhangzok[j]){
                cserelniKell=true;
            }
        }
        if(cserelniKell==true){
            modositottSzo+="";
        }
        else{
            modositottSzo+=vizsgaltSzoveg[i];
        }
    }
    return modositottSzo; 
}

