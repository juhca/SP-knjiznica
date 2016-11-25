var databaseUporabnikov = [ ["admin", "admin", "admin@email.si"], ["juhca", "nopass", "juhca@gmail.com"]];
var vpisan_uporabnik = [];
    
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
            vpisan_uporabnik.push(upIme);
            window.location.href = "glavnaStran.html";
            break;
        }
    }
    
    if(nasel == 0)
    {
        document.getElementById('LOGINUpIme').style.borderColor = 'red';
        document.getElementById('LOGINUpIme').placeholder = 'Vnesi uporabniško ime';
        document.getElementById('LOGINGeslo').style.borderColor = 'red';
        document.getElementById('LOGINGeslo').placeholder = 'Vnesi geslo';
        document.getElementById("loginObvestilo2").innerHTML = "Napačno vneseno Uporabniško ime ali geslo!";
        document.getElementById("LOGINUpIme").value = "";
        document.getElementById("LOGINGeslo").value = "";
    }
}

function registriraj()
{
    var upIme = document.getElementById("REGISTERUpIme").value;
    var geslo1 = document.getElementById("REGISTERPass1").value;
    var geslo2= document.getElementById("REGISTERPass2").value;
    var email= document.getElementById("REGISTEREmail").value;
    
    var vsota = 4;
    
    if(upIme.length == 0)
    {
        document.getElementById('REGISTERUpIme').style.borderColor = 'red';
        document.getElementById('REGISTERUpIme').placeholder = 'Vnesi uporabniško ime';
        vsota--;
    }
    
    if(geslo1.length == 0)
    {
        document.getElementById('REGISTERPass1').style.borderColor = 'red';
        document.getElementById('REGISTERPass1').placeholder = 'Vnesi geslo';
        vsota--;
        
    }
    
    if(geslo2.length == 0)
    {
        document.getElementById('REGISTERPass2').style.borderColor = 'red';
        document.getElementById('REGISTERPass2').placeholder = 'Ponovno vnesi geslo';
        vsota--;
    }
    
    var n = email.search('@');
    
    if(email.length == 0 || n < 0)
    {
        document.getElementById('REGISTEREmail').style.borderColor = 'red';
        document.getElementById('REGISTEREmail').placeholder = 'Vnesi email';
        if(n < 0)
        {
            document.getElementById('REGISTEREmail').value = "";
            document.getElementById('REGISTEREmail').placeholder = 'Pravilno vnesi email';
        }
        vsota--;
    }
    
    if(vsota == 4)
    {
        var nasel = 0;
    
        if(geslo1 == geslo2)
        {
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
                document.getElementById("loginObvestilo").innerHTML += "";
                databaseUporabnikov.push([upIme, geslo1, email]);
                vpisan_uporabnik.push(upIme);
                window.location.href = "glavnaStran.html";
            }
        }
        else
        {
            document.getElementById("loginObvestilo").innerHTML = "Gesla nista enaka, prosim, ponovno vpiši geslo";
            document.getElementById("REGISTERPass1").value = "";
            document.getElementById("REGISTERPass2").value = "";
        }
    }
}