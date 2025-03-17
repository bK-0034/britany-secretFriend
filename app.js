document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    let nombres = [];

    // Función para agregar nombres a la lista
    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor ingresa un nombre válido.");
            return;
        }
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    }

    // Función para actualizar la lista visible
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    // Función para sortear un amigo
    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("La lista está vacía. Agrega nombres antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombres[indiceAleatorio]}</strong></li>`;
    }

    // Hacer funciones accesibles globalmente
    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;
});
