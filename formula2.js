var husband =document.getElementById("husbandNum");
var son =document.getElementById("sonNum");
var doughter =document.getElementById("doughterNum");
var land =document.getElementById("landArea");
var gold =document.getElementById("gold");
var money =document.getElementById("money");


var submit= document.getElementById("submit").addEventListener("click", function (){
husband = parseFloat(husband.value);
son = parseFloat(sonNum.value);
doughter = parseFloat(doughterNum.value);
land = parseFloat(landArea.value);
gold = parseFloat(gold.value);
money = parseFloat(money.value);



if(husband===0){


    //hysband wealth
    document.getElementById("wifeLand").innerHTML= 0
    document.getElementById("wifeGold").innerHTML= 0
    document.getElementById("wifeMoney").innerHTML= 0

    //daughter wealth
    var daughtersLand = (land/(son+doughter))/2;
    document.getElementById("daughterLand").innerHTML= daughtersLand.toFixed(2)

    var daughtersGold = (gold/(son+doughter))/2;
    document.getElementById("daughterGold").innerHTML= daughtersGold.toFixed(2)

    var daughtersMoney = (money/(son+doughter))/2;
    document.getElementById("daughterMoney").innerHTML= daughtersMoney.toFixed(2)

    //sons wealth

    var sonsLand1 = (land-daughtersLand)/son;
    document.getElementById("sonLand").innerHTML= sonsLand1.toFixed(2)

    var sonsGold = (gold-daughtersGold)/son;
    document.getElementById("sonGold").innerHTML= sonsGold.toFixed(2)

    var sonsMoney = (money-daughtersMoney)/son;
    document.getElementById("sonMoney").innerHTML= sonsMoney.toFixed(2)
}

else if(son===0){
    // wifes wealth

    var husbandsland = ((land/4)*1)/husband;
    document.getElementById("wifeLand").innerHTML= husbandsland.toFixed(2)

    var husbandsGold = ((gold/4)*1)/husband;
    document.getElementById("wifeGold").innerHTML= husbandsGold.toFixed(2)

    var husbandsMoney = ((money/4)*1)/husband;
    document.getElementById("wifeMoney").innerHTML= husbandsMoney.toFixed(2)

    var remainLand = land - husbandsland;
    var remainMoney = money - husbandsMoney;
    var remainGold = gold -  husbandsGold ;

    //daughter wealth
    var daughtersLand = (remainLand/(son+doughter))/2;
    document.getElementById("daughterLand").innerHTML= daughtersLand.toFixed(2)

    var daughtersGold = (remainGold/(son+doughter))/2;
    document.getElementById("daughterGold").innerHTML= daughtersGold.toFixed(2)

    var daughtersMoney = (remainMoney/(son+doughter))/2;
    document.getElementById("daughterMoney").innerHTML= daughtersMoney.toFixed(2)

    var sonsLand1 = (land-daughtersLand)/son;
    document.getElementById("sonLand").innerHTML= 0

    var sonsGold = (gold-daughtersGold)/son;
    document.getElementById("sonGold").innerHTML= 0

    var sonsMoney = (money-daughtersMoney)/son;
    document.getElementById("sonMoney").innerHTML= 0



}
else if(doughter===0){
    // wifes wealth

    var husbandsland = ((land/4)*1)/husband;
    document.getElementById("wifeLand").innerHTML= husbandsland.toFixed(2)

    var husbandsGold = ((gold/4)*1)/husband;
    document.getElementById("wifeGold").innerHTML= husbandsGold.toFixed(2)

    var husbandsMoney = ((money/4)*1)/husband;
    document.getElementById("wifeMoney").innerHTML= husbandsMoney.toFixed(2)

    var remainLand = land - husbandsland;
    var remainMoney = money - husbandsMoney;
    var remainGold = gold -  husbandsGold ;

    var sonsLand = remainLand/son;
document.getElementById("sonLand").innerHTML= sonsLand.toFixed(2)

var sonsGold = remainGold/son;
document.getElementById("sonGold").innerHTML= sonsGold.toFixed(2)

var sonsMoney = remainMoney/son;
document.getElementById("sonMoney").innerHTML= sonsMoney.toFixed(2)


//daughter wealth
var daughtersLand = sonsLand/2;
document.getElementById("daughterLand").innerHTML= 0

var daughtersGold = sonsGold/2;
document.getElementById("daughterGold").innerHTML= 0

var daughtersMoney = sonsMoney/2;
document.getElementById("daughterMoney").innerHTML= 0
}

else{
    
// wifes wealth

var husbandsland = ((land/4)*1)/husband;
document.getElementById("wifeLand").innerHTML= husbandsland.toFixed(2)

var husbandsGold = ((gold/4)*1)/husband;
document.getElementById("wifeGold").innerHTML= husbandsGold.toFixed(2)

var husbandsMoney = ((money/4)*1)/husband;
document.getElementById("wifeMoney").innerHTML= husbandsMoney.toFixed(2)

// Husbands wealth

var remainLand = land - husbandsland;
var remainMoney = money - husbandsMoney;
var remainGold = gold -  husbandsGold ;


    var sonsLand = remainLand/son;
    document.getElementById("sonLand").innerHTML= sonsLand.toFixed(2)

    var sonsGold = remainGold/son;
    document.getElementById("sonGold").innerHTML= sonsGold.toFixed(2)

    var sonsMoney = remainMoney/son;
    document.getElementById("sonMoney").innerHTML= sonsMoney.toFixed(2)

    //daughter wealth
    var daughtersLand = sonsLand/2;
    document.getElementById("daughterLand").innerHTML= daughtersLand.toFixed(2)

    var daughtersGold = sonsGold/2;
    document.getElementById("daughterGold").innerHTML= daughtersGold.toFixed(2)

    var daughtersMoney = sonsMoney/2;
    document.getElementById("daughterMoney").innerHTML= daughtersMoney.toFixed(2)


}
    
    
})

