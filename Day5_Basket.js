
function costCalculator(basket,price){
    let totalCost = 0
    for(let product in basket)
    {            
        totalCost = totalCost + (basket[product]*price[product])
    }
    return (totalCost);
}

function prodculator(){
    let basket = {
        "Apple":parseInt(document.getElementById("P1").value),
        "Mango":parseInt(document.getElementById("P2").value),
        "Bannana":parseInt(document.getElementById("P3").value)
    }
    const price ={
        "apple" : 2.2,
        "mango" : 3,
        "bannana" : 1.8
    }
    
    result = costCalculator(basket,price)
    
    alert(result)
}

