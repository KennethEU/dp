// Calc Controller
var calcController = (function() {

    return {
        getinput: function() {

        }
    }

})();

// UI Controller
var UIController = (function() {


})();

document.querySelector('.beregn_Score').addEventListener('click', function() {
   beregnScore();
})

var score = 0;
var notchecked = 0;

var beregnScore = function() {
    var sporgsmal = ['q1', 'q2', 'q3', 'q4'];

    score = 0;
    notchecked = 0;

    for (var sp = 0; sp < sporgsmal.length; sp++) {

        var q = document.getElementsByName(sporgsmal[sp]); // Henter hvert spørgsmål
        
            for (var i = 0; i < q.length; i++) { // Gennemgår hvert svar i spørgsmålet
                if (q[i].checked) {
                    // do whatever you want with the checked radio
                    console.log(q[i].value);
                    if (q[i].value === 'na') { // Hvis der er svaret ved ikke
                        notchecked++;          // så læg en til "notchecked"
                    } else {
                    score += parseInt(q[i].value); // Hvis der er svaret, så tilføj den numeriske værdi af svaret til scoren
                    }
                    
                } else {
                    notchecked++;  // Hvis knappen ikke er valget, så læg en til "notchecked" (Selv om der er svaret så på spørgsmålet, så er de øvrige svarkategorier stadig tomme og lægges derfor til)
                }
            }
    }
    notchecked = notchecked - 14; // Trækker 14 fra, så det giver 0, hvis man har svaret på alle spørgsmål
    adj = 0; 
    if (notchecked === 3) {
        adj = 4;
    } if (notchecked === 2) {
        adj = 2;
    } if (notchecked === 1) {
        adj = 16/12;
    } if (notchecked === 0) {
        adj = 1;
    }
    adjscore = score * adj;
    console.log('Din score er ' + score + ' du har ikke svaret på ' + notchecked + ' din justerede score er derfor ' + adjscore + ' justeringsfator er ' + adj);
    document.querySelector('.din_score').textContent='Din fordelingspolitisk score er ' + adjscore + ' på en scale fra -16 til 16, hvor -16 er meget venstreorienteret og 16 er meget højreorienteret. Nedenfor kan du også se din placering på den fordelingspolitiske akse, du er den hvide streg.';
    document.querySelector('.din_fordeling').classList.add('rbbg');
    procentscore = ((adjscore + 16) * 3.125) - 1.5;
    document.querySelector('.din_fordeling').setAttribute("style", "padding-left:" + procentscore + "% !important;");
    return adjscore;

}



/*
    var q2 = document.getElementsByName('q2');
    
        for (var i = 0, length = q1.length; i < length; i++) {
            if (q2[i].checked) {
                // do whatever you want with the checked radio
                console.log(q2[i].value);
                score.push(parseInt(q2[i].value));
    
                // only one radio can be logically checked, don't check the rest
                break;
            }
        }
*/