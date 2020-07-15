// Cash Register Function
function checkCashRegister(price, cash, cid) {
    let cUnit = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00
    };

    let registerChange = (cid.reduce((sum, i) => sum + i[1], 0));
    let owedChange = cash - price;
    
    if(owedChange > registerChange){
        return {
            'status': 'INSUFFICIENT_FUNDS', 
            'change': []
        };
    } else if(owedChange == registerChange){
      return {
        'status': 'CLOSED',
        'change': cid
      }
    }

    let change = [];
    let cidV = cid.map(i => i[0]);
    //console.log(cidV);
    for(let i = cidV.length - 1; i >= 0; i--){
        let tempChange = [cidV[i], 0];
        while(owedChange >= cUnit[cidV[i]]){
            if(cid[i][1] >= cUnit[cidV[i]]){
                owedChange -= cUnit[cidV[i]];
                cid[i][1] -= cUnit[cidV[i]]; 
                tempChange[1] += cUnit[cid[i][0]];
                owedChange =  +(owedChange.toFixed(2));
            } else {
                break;
            }
        }
        if(tempChange[1] > 0){
            change.push(tempChange);  
        }
    }
    //console.log(change);

    if(owedChange > 0){
        return {
            'status': 'INSUFFICIENT_FUNDS',
            'change': []
        };
    } else {
        return {
            'status': 'OPEN',
            'change': change
        };
    }

}
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );