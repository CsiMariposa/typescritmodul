function OszthatoSZamok(vizsgalandoTomb:number[]):number{
    let oszto:number=0;
    for(let i:number=0;i<vizsgalandoTomb.length;i++){
        if(vizsgalandoTomb[i]%oszto==0){
            oszto++;
        }
    }
    return vizsgalandoTomb;
}