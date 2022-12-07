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

    imgs = Array.from(document.querySelectorAll(".imgButaca"));

    imgs.forEach(img => {
        img.src = "assets/seat-theater-svgrepo-com.svg"
    });
}

crearButacas(7, 5);