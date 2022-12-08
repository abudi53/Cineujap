// CREA LOS ASIENTOS
const butacas = document.querySelector(".butacas");

function crearButacas(fil, col) {
    for (let i = 0; i < fil; i++) {
        butacas.appendChild(document.createElement("div")).classList.add("butaca", "fil");  
    }

    const filas = Array.from(document.querySelectorAll(".fil"));

    filas.forEach(fila => {
        for (let i = 0; i < col; i++) {
            fila.appendChild(document.createElement("div")).classList.add("butaca", "col");
        }
    });
}

crearButacas(7, 5);

let cols = Array.from(document.querySelectorAll(".col"));
for (let i = 0; i < cols.length; i++) {
    cols[i].appendChild(document.createElement("img")).classList.add("imgButaca");
    if (i< 5) {
        cols[i].id = "A" + (i + 1);
    }else if (i<10) {
        cols[i].id = "B" + (i-4);
    }else if (i<15) {
        cols[i].id = "C" + (i-9);
    }else if (i<20) {
        cols[i].id = "D" + (i-14);
    }else if (i<25) {
        cols[i].id = "E" + (i-19);
    }else if (i<30) {
        cols[i].id = "F" + (i-24);
    }else if (i<35) {
        cols[i].id = "G" + (i-29);
    }
}
const seleccion = [];
let textSeleccion = document.querySelector(".seleccion");
const imgs = Array.from(document.querySelectorAll(".imgButaca"));
let ocupados = ["B2", "B3", "B4","C2", "C3", "C4","D2", "D3", "D4",];

imgs.forEach(img => {
    img.src = "assets/seat-theater-svgrepo-greencom.svg";
    if (ocupados.indexOf(img.parentElement.id) != -1) {
        img.src = "assets/seat-theater-svgrepo-com.svg"; 
    }
    img.addEventListener("click", (e) => {// Cambio de color azul -> verde y quita de seleccion
    if (img.getAttribute("src") === "assets/seat-theater-svgrepo-bluecom (1).svg") {
            seleccion.splice (seleccion.indexOf(img.parentElement.id), 1)
            textSeleccion.textContent = "HAS SELECCIONADO: " + seleccion;
            img.src = "assets/seat-theater-svgrepo-greencom.svg"
            // Cambio de color verde -> azul y agrega a seleccion
        }else if (img.getAttribute("src") === "assets/seat-theater-svgrepo-greencom.svg"){
            seleccion.push(img.parentElement.id);
            textSeleccion.textContent = "HAS SELECCIONADO: " + seleccion;
            img.src = "assets/seat-theater-svgrepo-bluecom (1).svg"
        }
    })
});


