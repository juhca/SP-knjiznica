function dodajKnjigo() {
    var ime = document.getElementById("DodajKnjigaIme").value;
    var avtor = document.getElementById("DodajKnjigaAvtor").value;
    var zalozba = document.getElementById("DodajKnjigaZalozba").value;
    var letoIzdaje = document.getElementById("DodajKnjigaLetoIzdaje").value;
    
    var stevec = 5;
    var zanri = prestejZanre();
    
    if(ime.length == 0)
    {
        document.getElementById("DodajKnjigaIme").style.borderColor = "red";
        document.getElementById("DodajKnjigaIme").placeholder = " Vnesi ime knjige";
        stevec--;
    }
    
    if(avtor.length == 0)
    {
        document.getElementById("DodajKnjigaAvtor").style.borderColor = "red";
        document.getElementById("DodajKnjigaAvtor").placeholder = " Vnesi ime avtorja";
        stevec--;
    }
    
    if(zalozba.length == 0)
    {
        document.getElementById("DodajKnjigaZalozba").style.borderColor = "red";
        document.getElementById("DodajKnjigaZalozba").placeholder = " Vnesi ime zalozbe";
        stevec--;
    }
    
    if(letoIzdaje.length == 0)
    {
        document.getElementById("DodajKnjigaLetoIzdaje").style.borderColor = "red";
        document.getElementById("DodajKnjigaLetoIzdaje").placeholder = " Vnesi letnico izdaje";
        stevec--;
    }
    
    if(zanri == 0)
    {
        stevec++;
        document.getElementById("DodajKnjigaZanriObvestilo").innerHTML = "Izberi vsaj en žanr";
    }
    else
    {
        document.getElementById("DodajKnjigaZanriObvestilo").innerHTML = "";
    }
    
    if(stevec == 5)
    {
        alert("Knjiga dodana");
    }
    
}

function prestejZanre() {
    var stevec = 0;
    if (document.getElementById("DodajKnjigaZanrVitez").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrPustolovski").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrVojni").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrBio").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrDruzK").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrPsi").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrKri").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrLju").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrDruzinski").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrBor").checked == true) stevec ++;
    if (document.getElementById("DodajKnjigaZanrMlad").checked == true) stevec ++;
    return stevec;
}

function poisiciKnjigo() {
    //var iskano1 = document.getElementById('search').value;
    alert("LA");
    window.location.href = "iskano.html";
    return false;
}