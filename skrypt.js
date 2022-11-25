function oblicz(){
    let a1=document.getElementById("PierwszyW").value;
    let an=document.getElementById("DrugiW").value;
    let n=document.getElementById("CiagW").value
    wynik=(an-a1)/(n-1);
    document.getElementById("wynik").value="Różnica ciągu arytmetycznego wynosi "+wynik;
}