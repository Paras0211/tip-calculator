function roundOffValues(value){
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$" + value;
}

function persons(value){
    if(value === "1"){
        return value + " person";
    }else{
        return value + " people";
    }
}

function getValues(){
const bill = Number(document.getElementById('bill').value),
      tipPercent = document.getElementById('tipInput').value,
      split = document.getElementById('totalPeople').value;
      
    let tipValue = bill *(tipPercent/100);
    let tipEach = tipValue/split;
    let billEach = (bill + tipValue) / split;    

    document.getElementById('tipPercent').innerHTML = tipPercent + "%";
    document.getElementById('tipValue').innerHTML = roundOffValues(tipValue);
    document.getElementById('total').innerHTML = roundOffValues(bill + tipValue);
    document.getElementById('person').innerHTML = persons(split);
    document.getElementById('billEach').innerHTML = roundOffValues(billEach);
    document.getElementById('tipEach').innerHTML = roundOffValues(tipEach);
}


// Event listener for adding amount
document.querySelector('.container').addEventListener('input',getValues);   
