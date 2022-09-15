const elemento = document.querySelectorAll(".entrada__Valores");
//console.log(elemento);
 function pegaValorDigitados() {
    let totalValores = 0
    for(i=0; i < elemento.length; i++){
        let e = elemento[i];
     
        if (isNaN(e.value) ) {
           alert("Deve ser informado valor numérico. Por favor verifique!!")
           e.value = null
           e.focus();
           return false
        }
        totalValores += Number(e.value)
     }
     let elementoSpan = document.querySelector("#total")
     if (totalValores > 0) {        
        elementoSpan.innerHTML = "Total dos Valores: "+totalValores
        elementoSpan.style.color = "white"
     }
     else {
      elementoSpan.innerHTML = ""
     }

     

 }

// valor1 = document.querySelector()