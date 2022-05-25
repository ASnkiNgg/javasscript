function skrypt()
{
    
    var goscie = document.getElementById("goscie").value;
    var wynik = goscie*100;

    if(document.getElementById("poprawiny").checked)
    {
        wynik = wynik + (wynik*0.3);
    }

    document.getElementById("wynik").innerHTML = wynik;
}