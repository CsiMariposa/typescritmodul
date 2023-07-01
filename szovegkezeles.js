function LettKod(vizsgaltSzoveg) {
    var maganhangzok = ["A", "a", "o", "O", "i", "I", "e", "E"];
    var modositottSzo = "";
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        var cserelniKell = false;
        for (var j = 0; j < maganhangzok.length; j++) {
            if (vizsgaltSzoveg[i] == maganhangzok[j]) {
                cserelniKell = true;
            }
        }
        if (cserelniKell == true) {
            modositottSzo += "";
        }
        else {
            modositottSzo += vizsgaltSzoveg[i];
        }
    }
    return modositottSzo;
}
