var numAlpha = 0;
var numBeta = 0;
var boostitSelf = numAlpha*Math.sqrt(Math.floor(numBeta));
var incrementValue = 1;
var qOfUpgradeOne = 0;



function alphaClick(alphaNumber){
    numAlpha=numAlpha+alphaNumber;
    document.getElementById('countAlpha').innerHTML = numAlpha;

    if (qOfUpgradeOne>0&&numBeta>0) {
        document.getElementById('activeGainOne').innerHTML = qOfUpgradeOne+"*"+boostitSelf+"α/s"
        
    }if (qOfUpgradeOne>0) {
        document.getElementById('activeGainOne').innerHTML = qOfUpgradeOne+"α/s"
    }
}
function compressAlpha() {
    if (numAlpha>=10) {
        numAlpha-10;
        numBeta++;
        document.getElementById('activeGainOne').innerHTML = qOfUpgradeOne*boostitSelf+"α/s"
        document.getElementById('countAlpha').innerHTML = numAlpha;
    } else {
        console.error("not enough alpha");
        
    }
    document.getElementById('countBeta').innerHTML = numBeta;
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
    document.getElementById('upg1CostMsg').innerHTML="cost of lvl " + (qOfUpgradeOne+1) +" = "+nextCost+"α";
}

window.setInterval(function () {
    if (numBeta<=0) {
        alphaClick(qOfUpgradeOne);
    }
    if (numBeta>0) {
        alphaClick(qOfUpgradeOne*boostitSelf);

    }
    

},1000)