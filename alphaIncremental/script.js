var numAlpha = 0;
var incrementValue = 1;
var qOfUpgradeOne = 0;

function alphaClick(alphaNumber){
    numAlpha=numAlpha+alphaNumber;
    document.getElementById('count').innerHTML = numAlpha;

    if (qOfUpgradeOne>0) {
        document.getElementById('activeGainOne').innerHTML = qOfUpgradeOne+"α/s"
    }
}

function buyUpgradeOne(){
    var upgradeOneCost = Math.floor(10*Math.pow(1.1,qOfUpgradeOne));
    if (numAlpha>=upgradeOneCost) {
        qOfUpgradeOne++;
        numAlpha=numAlpha-upgradeOneCost;
        document.getElementById('upg1').innerHTML=qOfUpgradeOne;
        document.getElementById('count').innerHTML = numAlpha;
    }
    var nextCost = Math.floor(10*Math.pow(1.1,qOfUpgradeOne));
    document.getElementById('upg1CostMsg').innerHTML="cost of lvl " + (qOfUpgradeOne+1) +" = ";
    document.getElementById('upg1Cost').innerHtml=nextCost+"α"
}

window.setInterval(function () {
    alphaClick(qOfUpgradeOne);
},1000)