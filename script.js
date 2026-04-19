var maindef
window.addEventListener('DOMContentLoaded', (event) => {maindef = document.getElementById("holder").innerHTML;});
var clicked;
var next;
var basicelement;
var spirit;
var levelcapped;
var champion;
var relic;
var elementamount;
var basicelementword;
var format;
var lesser
var greater

function Fastprerec() {
    document.getElementById("holder").innerHTML = '<br><br><button class="click" onclick="Fast(0)">Standard</button><br><br><button class="click" onclick="Fast(1)">Pantheon</button>'
}
function Slowprerec() {
    document.getElementById("holder").innerHTML = '<br><br><button class="click" onclick="Slow(0)">Standard</button><br><br><button class="click" onclick="Slow(1)">Pantheon</button><br><br><H2>WARNING!  MOTION</h2>'

}



function Fast(formy) {
    //alert('fast')
    format = formy
    basicelement = basicelements[Math.floor(Math.random() * basicelements.length)]
    if (basicelement != "Purity") {
        spirit = spirits[Math.floor(Math.random() * spirits.length)]
        //console.log(spirit)
    } else {spirit = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};}
    //console.log(basicelement)
    levelcapped = levelcap[Math.floor(Math.random() * levelcap.length)]
    //console.log(levelcapped)
    if (levelcapped == "Level 3"){
        champion = championsyes3[Math.floor(Math.random() * championsyes3.length)]
        levelcapped = "You must play up to level 3"
    }
    else {
        champion = champions[Math.floor(Math.random() * champions.length)]
        levelcapped = "You must only play up to level 2"
    }
    //console.log(champion)
    relic = relics[Math.floor(Math.random() * relics.length)]
    //console.log("with " + relic)
    elementamount = amount[Math.floor(Math.random() * amount.length)]
    //if (basicelement == "Purity") {
        //console.log("Using only " + elementamount + " Norm cards")
    //}else {console.log("Using only " + elementamount + " " + basicelement + " cards")}
    
    const main = document.getElementById("holder");
    var out = "";

    out += '<div id="cardhold">'

   
    rng = Math.floor(Math.random() * champion.img.length)

    if (format == 0) {

    out += '<img class="rounded cards spirit" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img>'

    out += '<img class="rounded championcard" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img>'

    out += '<img class="rounded cards relic" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img>'

    }
    if (format == 1) {
    lesser = lesserboon[Math.floor(Math.random() * lesserboon.length)]
    greater = greaterboon[Math.floor(Math.random() * greaterboon.length)]


    out += '<img class="rounded cards boons" id="boon0" src="https://api.gatcg.com/cards/images/' + lesser.img + '.jpg" alt=""></img>'

    out += '<img class="rounded cards spirit" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img>'

    out += '<img class="rounded championcard" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img>'

    out += '<img class="rounded cards relic" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img>'

    out += '<img class="rounded cards boons" id="boon1" src="https://api.gatcg.com/cards/images/' + greater.img + '.jpg" alt=""></img>'
    
    }

    out += '</div>'

    out += '<div id="textheld">'




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
    
    if (format == 1){
    out += '<div class="' + lesser.element + '">' + lesser.name + '</div>'

    out += '<div class="' + greater.element + '">' + greater.name + '</div>'
    }
    out += '<div class="Norm">' + relic.name + '</div>';
    if (basicelement == "Purity") {
        out += '<div class="Norm">Using only ' + elementamount.count + ' Norm cards' + '</div>';
    } else {out += '<div class="' + basicelement + '">Using only ' + elementamount.count + ' ' + basicelement + ' cards' + '</div>';}
    
    if (format == 0) {
    out += '<br><br><br><br><div class="end"><button class="click" onclick="Fast(0)">Redo</button></div></div>'
    }
    if (format == 1) {
        out += '<br><br><div class="end"><button class="click" onclick="Fast(1)">Redo</button></div></div>'
        }
    /**champions.forEach(element => {
        out += '<img class="rounded championcard" src="https://api.gatcg.com/cards/images/' + element.img[0] + '.jpg" alt=""></img>'
    });
    championsyes3.forEach(element => {
        out += '<img class="rounded championcard" src="https://api.gatcg.com/cards/images/' + element.img[0] + '.jpg" alt=""></img>'
    })**/
    
    

    main.innerHTML = out
}

function Reset() {
    document.getElementById("holder").innerHTML = maindef;

}

function Daily(){
    //console.log(mulberry32(3));
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

        out += '<div id="cardhold" class="dailyimg">'
    
        out += '<img class="rounded cards spirit" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img>'
        
        
        rng = Math.floor(Math.random() * champion.img.length)
        out += '<img class="rounded championcard" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img>'
    
        out += '<img class="rounded cards relic" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img>'
    
        out += '</div><div id="textheld">'

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
        
    
        out += '</div><br><br><br><div class="end">Todays Deck!</div><button class="click" onclick="DailyPanth()">Pantheon</button>'
        main.innerHTML = out
        }

        
        function DailyPanth(){

                //alert('fast')
                var basicelement = basicelements[mulberry32B(basicelements.length)]
                if (basicelement != "Purity") {
                    var spirit = spirits[mulberry32B(spirits.length)]
                    //console.log(spirit)
                } else {spirit = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};}
                //console.log(basicelement)
                var levelcapped = levelcap[mulberry32B(levelcap.length)]
                //console.log(levelcapped)
                if (levelcapped == "Level 3"){
                    var champion = championsyes3[mulberry32B(championsyes3.length)]
                    levelcapped = "You must play up to level 3"
                }
                else {
                    var champion = champions[mulberry32B(champions.length)]
                    levelcapped = "You must only play up to level 2"
                }
                //console.log(champion)
                var lesser = lesserboon[mulberry32(lesserboon.length)]
                var greater = greaterboon[mulberry32(greaterboon.length)]

                var relic = relics[mulberry32B(relics.length)]
                //console.log("with " + relic)
                var elementamount = amount[mulberry32B(amount.length)]
                //if (basicelement == "Purity") {
                    //console.log("Using only " + elementamount + " Norm cards")
                //}else {console.log("Using only " + elementamount + " " + basicelement + " cards")}
                
                const main = document.getElementById("holder");
                var out = "";
        
                out += '<div id="cardhold" class="dailyimg">'
            
                out += '<img class="rounded cards boons" id="boon0" src="https://api.gatcg.com/cards/images/' + lesser.img + '.jpg" alt=""></img>'



                out += '<img class="rounded cards spirit" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img>'
                
                
                rng = Math.floor(Math.random() * champion.img.length)
                out += '<img class="rounded championcard" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img>'
            
                out += '<img class="rounded cards relic" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img>'
                
                out += '<img class="rounded cards boons" id="boon1" src="https://api.gatcg.com/cards/images/' + greater.img + '.jpg" alt=""></img>'


                out += '</div><div id="textheld">'
        
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
                out += '<div class="' + lesser.element + '">' + lesser.name + '</div>';
                out += '<div class="' + greater.element + '">' + greater.name + '</div>';
                out += '<div class="Norm">' + relic.name + '</div>';

                out += '<div class="Norm">' + relic.name + '</div>';
                
                if (basicelement == "Purity") {
                    out += '<div class="Norm">Using only ' + elementamount.count + ' Norm cards' + '</div>';
                } else {out += '<div class="' + basicelement + '">Using only ' + elementamount.count + ' ' + basicelement + ' cards' + '</div>';}
                
            
                out += '</div><div class="end">Todays Deck!</div><button class="click" onclick="Daily()">Standard</button>'
                main.innerHTML = out
                }

function Slow(formy) {
    format = formy;
    StartElemSpin();
}

function StartElemSpin(){
    var basicelement = [basicelements[Math.floor(Math.random() * basicelements.length)],basicelements[Math.floor(Math.random() * basicelements.length)],basicelements[Math.floor(Math.random() * basicelements.length)],basicelements[Math.floor(Math.random() * basicelements.length)]]
    var spirit = [];
    i = 0
    basicelement.forEach(element => {if (element != "Purity") {
        spirit[i] = spirits[Math.floor(Math.random() * spirits.length)]
    } else {spirit[i] = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};}
        i++;
    });
    

    document.getElementById("holder").innerHTML = '<h3>What will your Spirit be?</h3><div id="set0"></div><div id="set1"></div><div id="set2"></div><div id="bottom"></div>'
    document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + spirit[0].img + basicelement[0].toLowerCase() + '-' + spirit[0].set + '.jpg" alt=""></img><img class="rounded wheel02" src="https://api.gatcg.com/cards/images/' + spirit[1].img + basicelement[1].toLowerCase() + '-' + spirit[1].set + '.jpg" alt=""></img></div>'
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel01" src="https://api.gatcg.com/cards/images/' + spirit[2].img + basicelement[2].toLowerCase() + '-' + spirit[2].set + '.jpg" alt=""></img><img class="rounded wheel00" src="https://api.gatcg.com/cards/images/' + spirit[3].img + basicelement[3].toLowerCase() + '-' + spirit[3].set + '.jpg" alt=""></img></div>'
    const wheelsanim = document.getElementsByClassName("wheel02");
    wheelsanim[0].addEventListener("animationiteration", spiritloop2);
    const wheelsanim0 = document.getElementsByClassName("wheel00");
    wheelsanim0[0].addEventListener("animationiteration", spiritloop0);
    clicked = 0;
    next = 0;
}

function spiritloop2(){
    if (next == 0) {
    var basicelement = [basicelements[Math.floor(Math.random() * basicelements.length)],basicelements[Math.floor(Math.random() * basicelements.length)]]
    var spirit = [];
    i = 0
    basicelement.forEach(element => {if (element != "Purity") {
        spirit[i] = spirits[Math.floor(Math.random() * spirits.length)]
    } else {spirit[i] = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};}
        i++;
    });
    document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + spirit[0].img + basicelement[0].toLowerCase() + '-' + spirit[0].set + '.jpg" alt=""></img><img class="rounded wheel2" src="https://api.gatcg.com/cards/images/' + spirit[1].img + basicelement[1].toLowerCase() + '-' + spirit[1].set + '.jpg" alt=""></img></div>'

    const wheelsanim = document.getElementsByClassName("wheel2");
    wheelsanim[0].addEventListener("animationiteration", spiritloop2);
    if (clicked == 0){
        window.addEventListener('click', (event) => {
            StopElemSpin();
          }, { once: true });
          clicked++;
    }
    document.getElementById("bottom").innerHTML = 'Click to Stop!'
}
if (next == 1) {document.getElementById("set0").innerHTML = '';}
}
function spiritloop0(){
    if (next == 0) {
    var basicelement = [basicelements[Math.floor(Math.random() * basicelements.length)],basicelements[Math.floor(Math.random() * basicelements.length)]]
    var spirit = [];
    i = 0
    basicelement.forEach(element => {if (element != "Purity") {
        spirit[i] = spirits[Math.floor(Math.random() * spirits.length)]
        
    } else {spirit[i] = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};}
        i++;
    });
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel1" src="https://api.gatcg.com/cards/images/' + spirit[0].img + basicelement[0].toLowerCase() + '-' + spirit[0].set + '.jpg" alt=""></img><img class="rounded wheel0" src="https://api.gatcg.com/cards/images/' + spirit[1].img + basicelement[1].toLowerCase() + '-' + spirit[1].set + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0")
    wheelsanim0[0].addEventListener("animationiteration", spiritloop0)
}
//console.log(next);
if (next == 1) {document.getElementById("set1").innerHTML = '';}
}

function Test(){
    console.log("GAAAA")
}

function StopElemSpin() {
    next++;
    basicelement = basicelements[Math.floor(Math.random() * basicelements.length)]
    //console.log(basicelement)
    if (basicelement != "Purity") {
        spirit = spirits[Math.floor(Math.random() * spirits.length)]
        basicelementword = basicelement
    } 
    else {spirit = {spiritcard: "Spirit of ", set: "ptm", img: "spirit-of-"};basicelementword = "Norm"}
    document.getElementById("set2").innerHTML = '<div class="wheels"><img class="rounded wheel0A" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0A")
    wheelsanim0[0].addEventListener("animationend", spiritreveal)
}

function spiritreveal() {
    document.getElementById("bottom").innerHTML = spirit.spiritcard + " " + basicelement + '!'   
    window.addEventListener('click', (event) => {
        ChampSpin();
      }, { once: true });
}

function ChampSpin() {
    champion = [champions[Math.floor(Math.random() * champions.length)],champions[Math.floor(Math.random() * champions.length)],champions[Math.floor(Math.random() * champions.length)],champions[Math.floor(Math.random() * champions.length)]]
    rng = []
    i = 0
    champion.forEach(element => {
        rng[i] = Math.floor(Math.random() * element.img.length)
        i++
    });

    document.getElementById("holder").innerHTML = '<h3>Who will your Champion be?</h3><div id="set0"></div><div id="set1"></div><div id="set2"></div><div id="bottom"></div>'
    document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + champion[0].img[rng[0]] + '.jpg" alt=""></img><img class="rounded wheel02" src="https://api.gatcg.com/cards/images/' + champion[1].img[rng[1]] + '.jpg" alt=""></img></div>'
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel01" src="https://api.gatcg.com/cards/images/' + champion[2].img[rng[2]] + '.jpg" alt=""></img><img class="rounded wheel00" src="https://api.gatcg.com/cards/images/' + champion[3].img[rng[3]] + '.jpg" alt=""></img></div>'
    const wheelsanim = document.getElementsByClassName("wheel02");
    wheelsanim[0].addEventListener("animationiteration", champloop2);
    const wheelsanim0 = document.getElementsByClassName("wheel00");
    wheelsanim0[0].addEventListener("animationiteration", champloop0);
    clicked = 0;
    next = 0;
}

function champloop2(){
    if (next == 0) {
        champion = [champions[Math.floor(Math.random() * champions.length)],champions[Math.floor(Math.random() * champions.length)]]
        rng = []
        i = 0
        champion.forEach(element => {
            rng[i] = Math.floor(Math.random() * element.img.length)
            i++
        });
        document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + champion[0].img[rng[0]] + '.jpg" alt=""></img><img class="rounded wheel2" src="https://api.gatcg.com/cards/images/' + champion[1].img[rng[1]] + '.jpg" alt=""></img></div>'

    const wheelsanim = document.getElementsByClassName("wheel2");
    wheelsanim[0].addEventListener("animationiteration", champloop2);
    if (clicked == 0){
        window.addEventListener('click', (event) => {
            StopChampSpin();
          }, { once: true });
          clicked++;
    }
    document.getElementById("bottom").innerHTML = 'Click to Stop!'
}
if (next == 1) {document.getElementById("set0").innerHTML = '';}
}
function champloop0(){
    if (next == 0) {
        champion = [champions[Math.floor(Math.random() * champions.length)],champions[Math.floor(Math.random() * champions.length)]]
        rng = []
        i = 0
        champion.forEach(element => {
            rng[i] = Math.floor(Math.random() * element.img.length)
            i++
        });
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel1" src="https://api.gatcg.com/cards/images/' + champion[0].img[rng[0]] + '.jpg" alt=""></img><img class="rounded wheel0" src="https://api.gatcg.com/cards/images/' + champion[1].img[rng[1]] + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0")
    wheelsanim0[0].addEventListener("animationiteration", champloop0)
}
//console.log(next);
if (next == 1) {document.getElementById("set1").innerHTML = '';}
}

function StopChampSpin() {
    next++;

    levelcapped = levelcap[Math.floor(Math.random() * levelcap.length)]
    //console.log(levelcapped)
    if (levelcapped == "Level 3"){
        champion = championsyes3[Math.floor(Math.random() * championsyes3.length)]
        levelcapped = "You must play up to level 3"
    }
    else {
        champion = champions[Math.floor(Math.random() * champions.length)]
        levelcapped = "You must only play up to level 2"
    }
    rng = Math.floor(Math.random() * champion.img.length)

    document.getElementById("set2").innerHTML = '<div class="wheels"><img class="rounded wheel0A" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0A")
    wheelsanim0[0].addEventListener("animationend", champreveal)
}

function champreveal() {
    document.getElementById("bottom").innerHTML = champion.name + '!<br>' + levelcapped   
    if (format == 0) {
    window.addEventListener('click', (event) => {
        RelicSpin();
      }, { once: true });
}
    if (format == 1) {
        window.addEventListener('click', (event) => {
            LesserSpin();
          }, { once: true });
    }
}

function RelicSpin() {
    relic = [relics[Math.floor(Math.random() * relics.length)], relics[Math.floor(Math.random() * relics.length)], relics[Math.floor(Math.random() * relics.length)], relics[Math.floor(Math.random() * relics.length)]]
    document.getElementById("holder").innerHTML = '<h3>What will your Divine Relic be?</h3><div id="set0"></div><div id="set1"></div><div id="set2"></div><div id="bottom"></div>'
    document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + relic[0].img + '.jpg" alt=""></img><img class="rounded wheel02" src="https://api.gatcg.com/cards/images/' + relic[1].img + '.jpg" alt=""></img></div>'
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel01" src="https://api.gatcg.com/cards/images/' + relic[2].img + '.jpg" alt=""></img><img class="rounded wheel00" src="https://api.gatcg.com/cards/images/' + relic[3].img + '.jpg" alt=""></img></div>'
    const wheelsanim = document.getElementsByClassName("wheel02");
    wheelsanim[0].addEventListener("animationiteration", relicloop2);
    const wheelsanim0 = document.getElementsByClassName("wheel00");
    wheelsanim0[0].addEventListener("animationiteration", relicloop0);
    clicked = 0;
    next = 0;
}

function relicloop2(){
    if (next == 0) {
        relic = [relics[Math.floor(Math.random() * relics.length)], relics[Math.floor(Math.random() * relics.length)]]
        document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + relic[0].img + '.jpg" alt=""></img><img class="rounded wheel2" src="https://api.gatcg.com/cards/images/' + relic[1].img + '.jpg" alt=""></img></div>'

    const wheelsanim = document.getElementsByClassName("wheel2");
    wheelsanim[0].addEventListener("animationiteration", relicloop2);
    if (clicked == 0){
        window.addEventListener('click', (event) => {
            StopRelicSpin();
          }, { once: true });
          clicked++;
    }
    document.getElementById("bottom").innerHTML = 'Click to Stop!'
}
if (next == 1) {document.getElementById("set0").innerHTML = '';}
}
function relicloop0(){
    if (next == 0) {
        relic = [relics[Math.floor(Math.random() * relics.length)], relics[Math.floor(Math.random() * relics.length)]]

    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel1" src="https://api.gatcg.com/cards/images/' + relic[0].img + '.jpg" alt=""></img><img class="rounded wheel0" src="https://api.gatcg.com/cards/images/' + relic[1].img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0")
    wheelsanim0[0].addEventListener("animationiteration", relicloop0)
}
//console.log(next);
if (next == 1) {document.getElementById("set1").innerHTML = '';}
}

function StopRelicSpin() {
    next++;

    relic = relics[Math.floor(Math.random() * relics.length)]


    document.getElementById("set2").innerHTML = '<div class="wheels"><img class="rounded wheel0A" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0A")
    wheelsanim0[0].addEventListener("animationend", relicreveal)
}

function relicreveal() {
    document.getElementById("bottom").innerHTML = relic.name + '!'
    window.addEventListener('click', (event) => {
        CardCount();
      }, { once: true });
}


function CardCount() {
    document.getElementById("holder").innerHTML = '<h3>How many ' + basicelementword + ' cards will your Deck require?</h3><div id="set0"></div><div id="set2"></div><div id="bottom"></div>'
    elementamount = amount[Math.floor(Math.random() * amount.length)]

    document.getElementById("set0").innerHTML = '<br><br><br><h1>' + elementamount.count + '</h1>'
    
    clicked = 0;
    next = 0;
    setTimeout(() => {
        randomcount();
      }, 50);
}

function randomcount(){
    if (next == 0) {
    elementamount = amount[Math.floor(Math.random() * amount.length)]

    document.getElementById("set0").innerHTML = '<br><br><br><h1>' + elementamount.count + '</h1>'
    
      if (clicked == 0){
        window.addEventListener('click', (event) => {
            FinishSpin();
          }, { once: true });
          clicked++;
    }
    document.getElementById("bottom").innerHTML = 'Click to Stop!'
    setTimeout(() => {
        randomcount();
      }, 50);
    }
}

function FinishSpin() {
    next++;
    document.getElementById("holder").innerHTML = ''
    const main = document.getElementById("holder");
    var out = "";

    out += '<div id="cardhold">'

   
    rng = Math.floor(Math.random() * champion.img.length)

    if (format == 1) {out += '<img class="rounded cards boons" id="boon" src="https://api.gatcg.com/cards/images/' + lesser.img + '.jpg" alt=""></img>'
}

    out += '<img class="rounded cards spirit" src="https://api.gatcg.com/cards/images/' + spirit.img + basicelement.toLowerCase() + '-' + spirit.set + '.jpg" alt=""></img>'

    out += '<img class="rounded championcard" src="https://api.gatcg.com/cards/images/' + champion.img[rng] + '.jpg" alt=""></img>'

    out += '<img class="rounded cards relic" src="https://api.gatcg.com/cards/images/' + relic.img + '.jpg" alt=""></img>'

    if (format == 1) {out += '<img class="rounded cards boons" id="boon1" src="https://api.gatcg.com/cards/images/' + greater.img + '.jpg" alt=""></img>'
}

    out += '</div><div id="textheld">'

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

    if (format == 1){
        out += '<div class="' + lesser.element + '">' + lesser.name + '</div>'
    
        out += '<div class="' + greater.element + '">' + greater.name + '</div>'
        }

    out += '<div class="Norm">' + relic.name + '</div>';
    
    if (basicelement == "Purity") {
        out += '<div class="Norm">Using only ' + elementamount.count + ' Norm cards' + '</div>';
    } else {out += '<div class="' + basicelement + '">Using only ' + elementamount.count + ' ' + basicelement + ' cards' + '</div>';}
    
    //out += '<br><br><br><br><div class="end"><button class="click" onclick="Fast()">Redo</button></div></div>'
    
    main.innerHTML = out
}

function LesserSpin() {
    lesser = [lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)]]
    document.getElementById("holder").innerHTML = '<h3>What will your Lesser Boon be?</h3><div id="set0"></div><div id="set1"></div><div id="set2"></div><div id="bottom"></div>'
    document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + lesser[0].img + '.jpg" alt=""></img><img class="rounded wheel02" src="https://api.gatcg.com/cards/images/' + lesser[1].img + '.jpg" alt=""></img></div>'
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel01" src="https://api.gatcg.com/cards/images/' + lesser[2].img + '.jpg" alt=""></img><img class="rounded wheel00" src="https://api.gatcg.com/cards/images/' + lesser[3].img + '.jpg" alt=""></img></div>'
    const wheelsanim = document.getElementsByClassName("wheel02");
    wheelsanim[0].addEventListener("animationiteration", lesserloop2);
    const wheelsanim0 = document.getElementsByClassName("wheel00");
    wheelsanim0[0].addEventListener("animationiteration", lesserloop0);
    clicked = 0;
    next = 0;
}

function lesserloop2(){
    if (next == 0) {
        lesser = [lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)]]
        document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + lesser[0].img + '.jpg" alt=""></img><img class="rounded wheel2" src="https://api.gatcg.com/cards/images/' + lesser[1].img + '.jpg" alt=""></img></div>'

    const wheelsanim = document.getElementsByClassName("wheel2");
    wheelsanim[0].addEventListener("animationiteration", lesserloop2);
    if (clicked == 0){
        window.addEventListener('click', (event) => {
            StopLesserSpin();
          }, { once: true });
          clicked++;
    }
    document.getElementById("bottom").innerHTML = 'Click to Stop!'
}
if (next == 1) {document.getElementById("set0").innerHTML = '';}
}
function lesserloop0(){
    if (next == 0) {
        lesser = [lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)]]

    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel1" src="https://api.gatcg.com/cards/images/' + lesser[0].img + '.jpg" alt=""></img><img class="rounded wheel0" src="https://api.gatcg.com/cards/images/' + lesser[1].img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0")
    wheelsanim0[0].addEventListener("animationiteration", lesserloop0)
}
//console.log(next);
if (next == 1) {document.getElementById("set1").innerHTML = '';}
}

function StopLesserSpin() {
    next++;

    lesser = lesserboon[Math.floor(Math.random() * lesserboon.length)]


    document.getElementById("set2").innerHTML = '<div class="wheels"><img class="rounded wheel0A" src="https://api.gatcg.com/cards/images/' + lesser.img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0A")
    wheelsanim0[0].addEventListener("animationend", lesserreveal)
}

function lesserreveal() {
    document.getElementById("bottom").innerHTML = lesser.name + '!'
    window.addEventListener('click', (event) => {
        GreaterSpin();
      }, { once: true });
}

function LesserSpin() {
    lesser = [lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)]]
    document.getElementById("holder").innerHTML = '<h3>What will your Lesser Boon be?</h3><div id="set0"></div><div id="set1"></div><div id="set2"></div><div id="bottom"></div>'
    document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + lesser[0].img + '.jpg" alt=""></img><img class="rounded wheel02" src="https://api.gatcg.com/cards/images/' + lesser[1].img + '.jpg" alt=""></img></div>'
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel01" src="https://api.gatcg.com/cards/images/' + lesser[2].img + '.jpg" alt=""></img><img class="rounded wheel00" src="https://api.gatcg.com/cards/images/' + lesser[3].img + '.jpg" alt=""></img></div>'
    const wheelsanim = document.getElementsByClassName("wheel02");
    wheelsanim[0].addEventListener("animationiteration", lesserloop2);
    const wheelsanim0 = document.getElementsByClassName("wheel00");
    wheelsanim0[0].addEventListener("animationiteration", lesserloop0);
    clicked = 0;
    next = 0;
}

function lesserloop2(){
    if (next == 0) {
        lesser = [lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)]]
        document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + lesser[0].img + '.jpg" alt=""></img><img class="rounded wheel2" src="https://api.gatcg.com/cards/images/' + lesser[1].img + '.jpg" alt=""></img></div>'

    const wheelsanim = document.getElementsByClassName("wheel2");
    wheelsanim[0].addEventListener("animationiteration", lesserloop2);
    if (clicked == 0){
        window.addEventListener('click', (event) => {
            StopLesserSpin();
          }, { once: true });
          clicked++;
    }
    document.getElementById("bottom").innerHTML = 'Click to Stop!'
}
if (next == 1) {document.getElementById("set0").innerHTML = '';}
}
function lesserloop0(){
    if (next == 0) {
        lesser = [lesserboon[Math.floor(Math.random() * lesserboon.length)], lesserboon[Math.floor(Math.random() * lesserboon.length)]]

    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel1" src="https://api.gatcg.com/cards/images/' + lesser[0].img + '.jpg" alt=""></img><img class="rounded wheel0" src="https://api.gatcg.com/cards/images/' + lesser[1].img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0")
    wheelsanim0[0].addEventListener("animationiteration", lesserloop0)
}
//console.log(next);
if (next == 1) {document.getElementById("set1").innerHTML = '';}
}

function StopLesserSpin() {
    next++;

    lesser = lesserboon[Math.floor(Math.random() * lesserboon.length)]


    document.getElementById("set2").innerHTML = '<div class="wheels"><img class="rounded wheel0A" src="https://api.gatcg.com/cards/images/' + lesser.img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0A")
    wheelsanim0[0].addEventListener("animationend", lesserreveal)
}

function lesserreveal() {
    document.getElementById("bottom").innerHTML = lesser.name + '!'
    window.addEventListener('click', (event) => {
        GreaterSpin();
      }, { once: true });
}

function GreaterSpin() {
    greater = [greaterboon[Math.floor(Math.random() * greaterboon.length)], greaterboon[Math.floor(Math.random() * greaterboon.length)], greaterboon[Math.floor(Math.random() * greaterboon.length)], greaterboon[Math.floor(Math.random() * greaterboon.length)]]
    document.getElementById("holder").innerHTML = '<h3>What will your Greater Boon be?</h3><div id="set0"></div><div id="set1"></div><div id="set2"></div><div id="bottom"></div>'
    document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + greater[0].img + '.jpg" alt=""></img><img class="rounded wheel02" src="https://api.gatcg.com/cards/images/' + greater[1].img + '.jpg" alt=""></img></div>'
    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel01" src="https://api.gatcg.com/cards/images/' + greater[2].img + '.jpg" alt=""></img><img class="rounded wheel00" src="https://api.gatcg.com/cards/images/' + greater[3].img + '.jpg" alt=""></img></div>'
    const wheelsanim = document.getElementsByClassName("wheel02");
    wheelsanim[0].addEventListener("animationiteration", greaterloop2);
    const wheelsanim0 = document.getElementsByClassName("wheel00");
    wheelsanim0[0].addEventListener("animationiteration", greaterloop0);
    clicked = 0;
    next = 0;
}

function greaterloop2(){
    if (next == 0) {
        greater = [greaterboon[Math.floor(Math.random() * greaterboon.length)], greaterboon[Math.floor(Math.random() * greaterboon.length)]]
        document.getElementById("set0").innerHTML = '<div class="wheels"><img class="rounded wheel3" src="https://api.gatcg.com/cards/images/' + greater[0].img + '.jpg" alt=""></img><img class="rounded wheel2" src="https://api.gatcg.com/cards/images/' + greater[1].img + '.jpg" alt=""></img></div>'

    const wheelsanim = document.getElementsByClassName("wheel2");
    wheelsanim[0].addEventListener("animationiteration", greaterloop2);
    if (clicked == 0){
        window.addEventListener('click', (event) => {
            StopGreaterSpin();
          }, { once: true });
          clicked++;
    }
    document.getElementById("bottom").innerHTML = 'Click to Stop!'
}
if (next == 1) {document.getElementById("set0").innerHTML = '';}
}
function greaterloop0(){
    if (next == 0) {
        greater = [greaterboon[Math.floor(Math.random() * greaterboon.length)], greaterboon[Math.floor(Math.random() * greaterboon.length)]]

    document.getElementById("set1").innerHTML = '<div class="wheels"><img class="rounded wheel1" src="https://api.gatcg.com/cards/images/' + greater[0].img + '.jpg" alt=""></img><img class="rounded wheel0" src="https://api.gatcg.com/cards/images/' + greater[1].img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0")
    wheelsanim0[0].addEventListener("animationiteration", greaterloop0)
}
//console.log(next);
if (next == 1) {document.getElementById("set1").innerHTML = '';}
}

function StopGreaterSpin() {
    next++;

    greater = greaterboon[Math.floor(Math.random() * greaterboon.length)]


    document.getElementById("set2").innerHTML = '<div class="wheels"><img class="rounded wheel0A" src="https://api.gatcg.com/cards/images/' + greater.img + '.jpg" alt=""></img></div>'
    const wheelsanim0 = document.getElementsByClassName("wheel0A")
    wheelsanim0[0].addEventListener("animationend", greaterreveal)
}

function greaterreveal() {
    document.getElementById("bottom").innerHTML = greater.name + '!'
    window.addEventListener('click', (event) => {
        RelicSpin();
      }, { once: true });
}