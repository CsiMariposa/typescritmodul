function OszthatoSZamok(vizsgalandoTomb) {
    var oszto = 0;
    for (var i = 0; i < vizsgalandoTomb.length; i++) {
        if (vizsgalandoTomb[i] % oszto == 0) {
            oszto++;
        }
    }
    return vizsgalandoTomb;
}
