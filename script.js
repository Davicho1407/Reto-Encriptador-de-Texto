function encriptar (){
    var texto= document.getElementById("inpuTexto").value.toLowerCase();
    //i Afecte tanto mayuscula como minuscula
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var txtcifrado= texto.replace(/e/igm,"enter");
    var txtcifrado= txtcifrado.replace(/o/igm,"ober");
    var txtcifrado= txtcifrado.replace(/i/igm,"imes");
    var txtcifrado= txtcifrado.replace(/a/igm,"ai");
    var txtcifrado= txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display="inherit";


}

function desencriptar (){
    var texto= document.getElementById("inpuTexto").value.toLowerCase();
    //i Afecte tanto mayuscula como minuscula
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var txtcifrado= texto.replace(/enter/igm,"e");
    var txtcifrado= txtcifrado.replace(/ober/igm,"o");
    var txtcifrado= txtcifrado.replace(/imes/igm,"i");
    var txtcifrado= txtcifrado.replace(/ai/igm,"a");
    var txtcifrado= txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=txtcifrado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display="inherit";

    
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("cut");
    alert("¡Se copió!")
}