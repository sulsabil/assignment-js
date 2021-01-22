
//https://github.com/sulsabil/assignment-js


function kilometerToMeter(meter){
    var kilometer = meter * 1000;
    return kilometer;

}

var meter1 = kilometerToMeter(2.2);
console.log(meter1);



function hotelCost(x){
    if(x >=1 && x <= 10){
        return x * 100;
    }
    else if(x >= 11 && x <= 20){
        return 10 * 100 + (x -10) * 80;
    }
    else if (x >= 21){
        return (10 * 100) + (10 * 80) + (x - 20) * 50;
    }
        
}


function budgetCalculator(watch,phone,laptop){
    var price = (watch*50) + (phone*100) + (laptop*500);
    return (price);
}

var cost = budgetCalculator(2,1,1);
console.log(cost);

function megaFriend(frn){
    var maxWord = frn[0];
    for(var i =0; i < frn.length; i++){
        var element = frn[i];
        if(element.length > maxWord.length){
            maxWord = element;

            return element;
        }
    }
}

var result = megaFriend(['sabila', 'saha', 'mashroor']);
console.log(result);


