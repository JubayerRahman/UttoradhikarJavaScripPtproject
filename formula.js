var wife =document.getElementById("wifeNum");
var son =document.getElementById("sonNum");
var doughter =document.getElementById("doughterNum");
var land =document.getElementById("landArea");
var gold =document.getElementById("gold");
var money =document.getElementById("money");


var submit= document.getElementById("submit").addEventListener("click", function (){
    wife = parseFloat(wifeNum.value);
son = parseFloat(sonNum.value);
doughter = parseFloat(doughterNum.value);
land = parseFloat(landArea.value);
gold = parseFloat(gold.value);
money = parseFloat(money.value);

if(wife===0){


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

    var wifesLand = ((land/8)*1)/wife;
    document.getElementById("wifeLand").innerHTML= wifesLand.toFixed(2)

    var wifesGold = ((gold/8)*1)/wife;
    document.getElementById("wifeGold").innerHTML= wifesLand.toFixed(2)

    var wifesMoney = ((money/8)*1)/wife;
    document.getElementById("wifeMoney").innerHTML= wifesMoney.toFixed(2)

    var remainLand = land - wifesLand;
    var remainMoney = money - wifesMoney;
    var remainGold = gold -  wifesGold ;

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

    var wifesLand = ((land/8)*1)/wife;
    document.getElementById("wifeLand").innerHTML= wifesLand.toFixed(2)

    var wifesGold = ((gold/8)*1)/wife;
    document.getElementById("wifeGold").innerHTML= wifesGold.toFixed(2)

    var wifesMoney = ((money/8)*1)/wife;
    document.getElementById("wifeMoney").innerHTML= wifesMoney.toFixed(2)

    var remainLand = land - wifesLand;
    var remainMoney = money - wifesMoney;
    var remainGold = gold -  wifesGold ;

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

    var wifesLand = ((land/8)*1)/wife;
    document.getElementById("wifeLand").innerHTML= wifesLand

    var wifesGold = ((gold/8)*1)/wife;
    document.getElementById("wifeGold").innerHTML= wifesGold

    var wifesMoney = ((money/8)*1)/wife;
    document.getElementById("wifeMoney").innerHTML= wifesMoney

// wifes wealth

 var remainLand = land - wifesLand;
 var remainMoney = money - wifesLand;
 var remainGold = gold - wifesLand;

//son wealth
    var sonsLand = remainLand/son;
    document.getElementById("sonLand").innerHTML= sonsLand

    var sonsGold = remainGold/son;
    document.getElementById("sonGold").innerHTML= sonsGold

    var sonsMoney = remainMoney/son;
    document.getElementById("sonMoney").innerHTML= sonsMoney

    //daughter wealth
    var daughtersLand = sonsLand/2;
    document.getElementById("daughterLand").innerHTML= daughtersLand

    var daughtersGold = sonsGold/2;
    document.getElementById("daughterGold").innerHTML= daughtersGold

    var daughtersMoney = sonsMoney/2;
    document.getElementById("daughterMoney").innerHTML= daughtersMoney

}
    
})

