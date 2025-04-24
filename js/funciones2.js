document.getElementById("botonEnviar").addEventListener('click', carnet);
const divResultado = document.getElementById("resultado");

//colores de fondo
let colorSuccess = "rgb(74, 208, 96)";
let colorDanger = "rgb(197, 81, 75)";

function carnet(){
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;

    //elimina los espacios del principio y final de un string
    nombreUsuario = nombreUsuario.trim();

    //validar los datos de entrada
    if(nombreUsuario === "" || edadUsuario < 0 || edadUsuario > 100){
        alert("Por favor, asegurate de que los datos introducidos sean correctos");
    }else{
        let mensaje = "";
        if(edadUsuario >= 18){
            mensaje = `${nombreUsuario} puede sacarse el carnet`;
            divResultado.style.backgroundColor = colorSuccess;
        }else{
            mensaje = `${nombreUsuario} tienes que esperar`;
            divResultado.style.backgroundColor = colorDanger;
        }
        divResultado.innerHTML = `<p>${mensaje}</p>`;
        divResultado.style.display = "block";
    }

}



document.getElementById("nombre").addEventListener('input', function(){
    divResultado.style.display = "none";
})

document.getElementById("edad").addEventListener('input', function(){
    divResultado.style.display = "none";
})

