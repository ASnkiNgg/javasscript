function skrypt()
{
    var litry = document.getElementById("litry").value;
    litry = parseFloat(litry);
    var rodzaj = document.getElementById("rodzaj").value;
    rodzaj = parseFloat(rodzaj);
    var koszt = 0;

    if(rodzaj == 1)
    {
        koszt = litry * 4;
    }
    else if(rodzaj == 2)
    {
        koszt = litry * 3,5;
    }
    else{

    
    }
    
    document.getElementById("koszt").innerHTML = "koszt paliwa: " + koszt + " zł";
}