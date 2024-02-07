let resp = document.getElementById('resp')
console.log(resp);


function calcTempC(){
    let tempC = Number(document.getElementById('tempC').value)
    console.log(tempC);

    let tempCalc = (tempC * 1.8) + 32
    console.log(tempCalc);

    resp.innerHTML = "O valor convertido é : °F " + tempCalc
}
