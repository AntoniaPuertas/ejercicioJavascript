//colores de fondo
let colorSuccess = "rgb(74, 208, 96)";
let colorDanger = "rgb(197, 81, 75)";

document.getElementById("botonEnviar").addEventListener('click', carnet2);

function carnet2(){
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;

    nombreUsuario = nombreUsuario.trim();

    let mensajeTxt = mensajeError(nombreUsuario, edadUsuario);

    document.getElementById("resultado").innerHTML = mensajeTxt[0];
    document.getElementById("resultado").style.display = "block";
    if(mensajeTxt[1] == true){
        document.getElementById("resultado").style.backgroundColor = colorSuccess;
    }else{
        document.getElementById("resultado").style.backgroundColor = colorDanger;
    }
}

//funcion que recibe dos parámetros:
//nombre y edad
//devuelve un string
//
function mensajeError(nombre, edad){

    let respuesta = ['',false];

    if(nombre === ""){
        respuesta[0] = "<p>Debes introducir un nombre</p>";
    }
    switch(true){
        case edad <= 0:
            respuesta[0]+= "<p>La edad debe ser un número positivo</p>";
            break;
        case edad < 18:
            respuesta[0]+= "<p>Debes ser mayor de edad</p>";
            break;
        case edad <= 100:
            respuesta[0]+= "<p>Enhorabuena puedes sacarte el carnet</p>";
            respuesta[1] = true;
            break;
        case edad > 100:
            respuesta[0]+= "<p>Lo siento mucho pero no puedes obtener el permiso</p>";
            break;
        default:
            respuesta[0]+= "<p>La edad introducida no es válida</p>";
    }
    return respuesta;
}

document.getElementById("nombre").addEventListener('input', function(){
    document.getElementById("resultado").style.display = "none";
})

document.getElementById("edad").addEventListener('input', function(){
    document.getElementById("resultado").style.display = "none";
})
