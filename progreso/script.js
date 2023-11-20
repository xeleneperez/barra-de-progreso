let progreso= document.querySelector(".progreso");
let porcentaje= document.querySelector(".porcentaje");
let celebracion= document.querySelector("body");
let avance = 0;
//un retardo en las funciones que se utilizan una y otra vez

let tiempo = setInterval(() => {
    avance += 1;
    progreso.style.width = `${avance}%`

    if(avance === 100) {
        // se detendra en el tiempo establecido
        clearInterval(tiempo)
        celebracion.classList.add("celebracion")
    }
    //me proyecta el porcentaje 
    porcentaje.textContent = `${avance}%`
    //la barra de progreso va a ir avanzando mas rapido 
}, 75);