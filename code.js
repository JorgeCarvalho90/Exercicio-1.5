
const C = 0
const F = 380

function celsiustofahrenheit (C) {
    return (C*9/5) + 32
}



function fahrenheitocelsius (F) {
    return (F-32) * 5/9
}


alert(celsiustofahrenheit(C))

alert(fahrenheitocelsius(F))