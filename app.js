// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//agregar amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado, agreguelo con un número");
        return;
    }
    
    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}

//Actualizar lista de amigos

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Sorteo de amigos

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para empezar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];


    mostrarResultado(amigoSeleccionado);
}


//Resultado

function mostrarResultado(amigoSeleccionado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigoSeleccionado} `;
    resultado.appendChild(li);
}
