
const personas = [];

personas.push({
    nombre: "Alexis",
    edad: 28,
    bandasFavoritas: ["Metallica", "Led Zeppelin", "LP"]
});

personas.push({
    nombre: "Laura",
    edad: 25,
    bandasFavoritas: ["Green Day", "Paramore"]
});


function crearTarjeta(persona) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
        <h2>${persona.nombre}</h2>
        <p>Edad: ${persona.edad}</p>
        <p>Bandas Favoritas:</p>
        <ul>
            ${persona.bandasFavoritas.map(banda => `<li>${banda}</li>`).join("")}
        </ul>
    `;
    return tarjeta;
}

const contenedorTarjetas = document.getElementById("tarjetas");

personas.forEach(persona => {
    contenedorTarjetas.appendChild(crearTarjeta(persona));
});
