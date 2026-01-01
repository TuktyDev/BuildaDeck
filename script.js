var maindef
window.addEventListener('DOMContentLoaded', (event) => {maindef = document.getElementById("holder").innerHTML;});


function Fast() {
    //alert('fast')
    var basicelement = basicelements[Math.floor(Math.random() * basicelements.length)]
    if (basicelement != "Purity") {
        var spirit = spirits[Math.floor(Math.random() * spirits.length)]
        //console.log(spirit)
    } else {spirit = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};}
    //console.log(basicelement)
    var levelcapped = levelcap[Math.floor(Math.random() * levelcap.length)]
    //console.log(levelcapped)
    if (levelcapped == "Level 3"){
        var champion = championsyes3[Math.floor(Math.random() * championsyes3.length)]
        levelcapped = "You must play up to level 3"
    }
    else {
        var champion = champions[Math.floor(Math.random() * champions.length)]
        levelcapped = "You must only play up to level 2"
    }
    //console.log(champion)
    var relic = relics[Math.floor(Math.random() * relics.length)]
    //console.log("with " + relic)
    var elementamount = amount[Math.floor(Math.random() * amount.length)]
    //if (basicelement == "Purity") {
        //console.log("Using only " + elementamount + " Norm cards")
    //}else {console.log("Using only " + elementamount + " " + basicelement + " cards")}
    
    const main = document.getElementById("holder");
    var out = "";








    out += '<div id="cardhold">'

    out += '<img class="rounded cards" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img>'
    
    
    rng = Math.floor(Math.random() * champion.img.length)
    out += '<img class="rounded cards" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img>'

    out += '<img class="rounded cards" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img>'

    out += '</div>'









    if (basicelement == "Purity"){
        out += '<div class="elements Norm"  id=' + basicelement + '>' + spirit.spiritcard + ' ' + basicelement +  '</div>'
    } else{out += '<div class="elements ' + basicelement + '"  id=' + basicelement + '>' + spirit.spiritcard + ' ' + basicelement + '</div>'}
    



    if (champion.element == "Crux") {
        out += '<div class="' + champion.element + '" >';
        champ = champion.name.split('');
        champ.forEach(element => {
            out += '<span>' + element + "</span>"   
        });
        out += '</div>'
    }
    else {out += '<div class="' + champion.element + '" >' + champion.name + '</div>'}

    out += '<div class="' + champion.element + '">' + levelcapped + '</div>';
    
    out += '<div class="Norm">' + relic.name + '</div>';
    
    if (basicelement == "Purity") {
        out += '<div class="Norm">Using only ' + elementamount.count + ' Norm cards' + '</div>';
    } else {out += '<div class="' + basicelement + '">Using only ' + elementamount.count + ' ' + basicelement + ' cards' + '</div>';}
    

    out += '<br><br><br><br><div class="end"><button class="click" onclick="Fast()">Redo</button></div>'
    main.innerHTML = out
}

function Reset() {
    document.getElementById("holder").innerHTML = maindef;

}

function Daily(){
    console.log(mulberry32(3));
        //alert('fast')
        var basicelement = basicelements[mulberry32(basicelements.length)]
        if (basicelement != "Purity") {
            var spirit = spirits[mulberry32(spirits.length)]
            //console.log(spirit)
        } else {spirit = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};}
        //console.log(basicelement)
        var levelcapped = levelcap[mulberry32(levelcap.length)]
        //console.log(levelcapped)
        if (levelcapped == "Level 3"){
            var champion = championsyes3[mulberry32(championsyes3.length)]
            levelcapped = "You must play up to level 3"
        }
        else {
            var champion = champions[mulberry32(champions.length)]
            levelcapped = "You must only play up to level 2"
        }
        //console.log(champion)
        var relic = relics[mulberry32(relics.length)]
        //console.log("with " + relic)
        var elementamount = amount[mulberry32(amount.length)]
        //if (basicelement == "Purity") {
            //console.log("Using only " + elementamount + " Norm cards")
        //}else {console.log("Using only " + elementamount + " " + basicelement + " cards")}
        
        const main = document.getElementById("holder");
        var out = "";

        out += '<div id="cardhold">'
    
        out += '<img class="rounded cards" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img>'
        
        
        rng = Math.floor(Math.random() * champion.img.length)
        out += '<img class="rounded cards" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img>'
    
        out += '<img class="rounded cards" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img>'
    
        out += '</div>'

        if (basicelement == "Purity"){
            out += '<div class="elements Norm"  id=' + basicelement + '>' + spirit.spiritcard + ' ' + basicelement +  '</div>'
        } else{out += '<div class="elements ' + basicelement + '"  id=' + basicelement + '>' + spirit.spiritcard + ' ' + basicelement + '</div>'}
        
    
    
    
        if (champion.element == "Crux") {
            out += '<div class="' + champion.element + '" >';
            champ = champion.name.split('');
            champ.forEach(element => {
                out += '<span>' + element + "</span>"   
            });
            out += '</div>'
        }
        else {out += '<div class="' + champion.element + '" >' + champion.name + '</div>'}
    
        out += '<div class="' + champion.element + '">' + levelcapped + '</div>';
        
        out += '<div class="Norm">' + relic.name + '</div>';
        
        if (basicelement == "Purity") {
            out += '<div class="Norm">Using only ' + elementamount.count + ' Norm cards' + '</div>';
        } else {out += '<div class="' + basicelement + '">Using only ' + elementamount.count + ' ' + basicelement + ' cards' + '</div>';}
        
    
        out += '<br><br><br><br><div class="end">Todays Deck!</div>'
        main.innerHTML = out
        }