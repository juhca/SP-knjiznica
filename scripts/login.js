var databaseUporabnikov = [ ["admin", "admin"], ["juhca", "nopass"]];
    
function prijava()
{
    upIme = document.getElementById("LOGINUpIme").value;
    geslo = document.getElementById("LOGINGeslo").value;
   
    nasel = 0;
   
    for (var i = 0; i < databaseUporabnikov.length; i++)
    {
        if(upIme == databaseUporabnikov[i][0] && geslo == databaseUporabnikov[i][1])
        {
            nasel = 1;
            window.location.href = "glavnaStran.html";
            break;
        }
    }
    
    if(nasel == 0)
    {
        alert("Uporabnik ne obstaja ali napačno geslo");
    }
}

function registriraj()
{
    upIme = document.getElementById("REGISTERUpIme").value;
    geslo1 = document.getElementById("REGISTERPass1").value;
    geslo2= document.getElementById("REGISTERPass2").value;
    
    nasel = 0;
    
    for (var i = 0; i < databaseUporabnikov.length; i++)
    {
        if(upIme == databaseUporabnikov[i][0] && geslo == databaseUporabnikov[i][1])
        {
            nasel = 1;
            alert("Uporabnik že obstaja");
            break;
        }
    }
    
    if(nasel == 0)
    {
        databaseUporabnikov.push([upIme, geslo1]);
        window.location.href = "glavnaStran.html";
    }
}