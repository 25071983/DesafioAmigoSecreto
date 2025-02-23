// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.getElementById("amigo").value = "";

let amigos =[]

function asignarTextoElemento(elemento,texto){
    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function ingresarAmigo(){
    //obtenemos el nombre del amigo ingresado por el usuario
    let amigoSecreto = document.getElementById("amigo").value;
    if (amigoSecreto.length == 0){
        alert ("Por favor ingrese un nombre valido")
       

    }else{ 
         console.log("amigo=",amigoSecreto)
        amigos.push(amigoSecreto)

                 
         //referencia a la lista ul
        let listaAmigos = document.getElementById("listaAmigos")
        // Borra lista de amigos 
        listaAmigos.innerHTML = ""
        for (let i = 0; i < amigos.length; i++) {
            
            const nombreAmigo = amigos[i];
            
            // Crea el nuevo elemento <li>
            let nuevoElemento = document.createElement('li');
        
            // Asigna contenido al nuevo <li>
            nuevoElemento.textContent = nombreAmigo;
        
            // Agrega el nuevo <li> a la lista <ul>
            listaAmigos.appendChild(nuevoElemento);  
        }
        
        
        
    }
    document.getElementById("amigo").value = "";
}



function sortearAmigo(){

    console.log("sortearAmigo")
    let listaAmigosUl= document.getElementById("listaAmigos")
   


    // Cuenta cuántos elementos <li> hay dentro de la lista <ul>
    
    let listaAmigos  = listaAmigosUl.getElementsByTagName('li')
    console.log ("listaAmigos =",  listaAmigos) 
   
    let largoLista = listaAmigos.length
    console.log ("largoLista =",  largoLista)
    
    if (largoLista != 0 ){ 
        
        let numeroAleatorio = buscarNumeroAleatorio(largoLista)
        console.log ("numeroAleatorio =", numeroAleatorio)
       
        let amigoSorteado =listaAmigos[numeroAleatorio]
        console.log ("amigoSorteado =", amigoSorteado)
       
        let nombreAmigoSecreto = amigoSorteado.innerHTML
        console.log ("nombreAmigoSecreto =", nombreAmigoSecreto)
       
        let amigoSecreto = " El amigo secreto sorteado es:"+ nombreAmigoSecreto
        
        let resultadoUl = document.getElementById("resultado")
        resultadoUl.innerText = amigoSecreto
    
    
        //hidden: true
        listaAmigosUl.hidden= true
        
    }
    else {
  
        alert ("No hay amigos ingresados");
    
    }
}
function buscarNumeroAleatorio(numeroLimite) {
    
    return Math.floor(Math.random() * numeroLimite );

 }
 
