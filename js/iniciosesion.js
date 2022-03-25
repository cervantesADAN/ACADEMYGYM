
const validar= ( )=>{
 var usuario = document.getElementById("usuario").value;
 var contraseña = document.getElementById("clave").value;



 
 for(a=0;a<=3;a++){
 if(usuario==CONTENEDORArray[a].usa ){
     if (contraseña ==CONTENEDORArray[a].contr){
     if(CONTENEDORArray[a].tipo=="administrador"){ 
 alert("usuario y contraseña validos")
 window.location.href = "indexAdmin.html"
     }else if (CONTENEDORArray[a].tipo=="usuario"){
    window.location.href = "html/inicio.html"
      } else if (CONTENEDORArray[a].tipo=="usuario"){
    window.location.href = "html/inicio.html"
     }   else if (CONTENEDORArray[a].tipo=="entrenador"){
        window.location.href = "html/inicio.html"
         }  
 }


 
 else {
    alert("verifiqie sus datos")
 }

}
 }

}
var CONTENEDORArray =  [
    {
      usa:"admi",
     contr:"12345",
     tipo:"administrador"
    },{
        usa:"camilo",
        contr:"123456789",
        tipo:"usuario"
    },{
        usa:"adan18",
        contr:"adan18",
        tipo:"usuario"
    },{
        usa:"arena",
        contr:"123",
        tipo:"usuario"
    },{
        usa:"entrenador",
        contr:"entrenador12345",
        tipo:"entrenador"
    }
]