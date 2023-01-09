function display(val){

    document.getElementById('result').value += val

    return val

}
//display the value to be manipulated
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
//display the value after manipulation
function clearScreen(){

    document.getElementById('result').value = ''

}
//clears the value after manipulation