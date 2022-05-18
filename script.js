function skrypt()
{
    var a1 = document.getElementById("number1").value;
    a1 = parseInt(a1);
    var r1 = document.getElementById("number2").value;
    r1 = parseInt(r1);
    var n = document.getElementById("number3").value;
    n = parseInt(n);

    let wynik = "Ciąg arytmetyczny zawiera wyrazy: ";
    wynik += a1;

    for(let i=0; i<n; i++)
    {
        a1 = a1 + r1;
        wynik += "," + a1;
    }

    document.getElementById("wynik").innerHTML = wynik;
}