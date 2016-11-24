var databaseUporabnikov = [ ["admin", "admin"], ["juhca", "nopass"]];
    
function prijava()
{
    var upIme = document.getElementById("LOGINUpIme").value;
    var geslo = document.getElementById("LOGINGeslo").value;
   
    var nasel = 0;
   
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
    window.location.href = "glavnaStran.html";
}

function registriraj()
{
    var upIme = document.getElementById("REGISTERUpIme").value;
    var geslo1 = document.getElementById("REGISTERPass1").value;
    var geslo2= document.getElementById("REGISTERPass2").value;
    
    var nasel = 0;
    
    for (var i = 0; i < databaseUporabnikov.length; i++)
    {
        if(upIme == databaseUporabnikov[i][0])
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
    window.location.href = "glavnaStran.html";
}