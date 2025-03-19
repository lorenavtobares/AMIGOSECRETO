// Variable global para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");

    } else {

        listaDeAmigos.push(nombreAmigo);
        // Limpiar el campo de texto
        inputAmigo.value = "";
        mostrarListaAmigos();
    }

    return;
    
}

// Funcion para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    const listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ""; // Limpiar la lista actual

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, agregue al menos un amigo para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indexSorteo = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indexSorteo];

    // Mostrar el resultado del sorteo
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
