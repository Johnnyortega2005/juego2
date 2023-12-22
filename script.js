function IniciarJuego() {
    alert("IRON MAN");
    Nivel1();
}
function Nivel1() {
    var opciones = ["a) Titanio", "b) Hierro super delgado", "c) Adamantium"];
    var respuesta = prompt("¿Qué materiales utiliza Tony Stark para la creación de su armadura?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "a") {
        alert(" Has superado el nivel 1.");
        Nivel2();
    } else {
        alert("Respuesta incorrecta. No puedes ayudar a Tony Strak.");
        ReiniciarJuego();
        
    }
}

function Nivel2() {
    var opciones = ["a) Plateado", "b) Amarillo", "c) Rojo"];
    var respuesta = prompt("Qué color es el principal que utiliza Tony Stark para sus armaduras?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "c") {
        alert("Has superado el nivel 2.");
        Nivel3();
    } else {
        alert("No sabes el color principal de las armaduras.");
        ReiniciarJuego();
    }
}
function Nivel3() {
    var opciones = ["a) 1 película", "b) 3 películas", "c) 4 películas"];
    var respuesta = prompt("Cuántas peliculas existen de Iron Man ?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "b") {
        alert("¡Respuesta correcta! Has superado el nivel 3.");
        Nivel4();
    } else {
        alert("No sabes de las películas.");
        ReiniciarJuego();
    }
}

function Nivel4() {
    var opciones = ["a) 2005", "b) 2008", "c) 2010", "d) 2012"];
    var respuesta = prompt("En qué año se estrenó la primera película de Iron Man, que lanzó el Marvel Cinematic Universe?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "b") {
        alert("¡Respuesta correcta! Has superado el nivel 4.");
        Nivel5();
    } else {
        alert("No sabes de la primera película.");
        ReiniciarJuego();
    }
}

function Nivel5() {
    var opciones = ["a) No se podia mover", "b) Se congelaba", "c) Se rompia en pedasos", "d) Perdia la potencia de vuelo"];
    var respuesta = prompt("¿De qué problema padecía la armadura Mark II cuando se elevaba mucho al cielo?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "b") {
        alert("¡Respuesta correcta! Has superado el nivel 5.");
        Nivel6();
    } else {
        alert("No conoces el problema de Mark II.");
        ReiniciarJuego();
    }
}

function Nivel6() {
    var opciones = ["a) Alfa", "b) Babas", "c) Gaga"];
    var respuesta = prompt("¿Como llama tony a su principal bot ayudante?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "b") {
        alert("¡Respuesta correcta! Has superado el nivel 6.");
        Nivel7();
    } else {
        alert("¡No conoces al bot!.");
        ReiniciarJuego();
    }
}

function Nivel7() {
    var opciones = ["a) Con unos robots de prueba", "b) Con el gerente de industrias stark", "c) Con los terroristas que lo secuestraron"];
    var respuesta = prompt("¿Con quienes pelea por primera vez Iron Man?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "c") {
        alert("¡Respuesta correcta! Has superado el nivel 7.");
        Nivel8();
    } else {
        alert("¡No superaste el reto!.");
        ReiniciarJuego();
    }
}

function Nivel8() {
    var opciones = ["a) Ho yinsen", "b) Al-yinsen", "c)Cho yinsen"];
    var respuesta = prompt("¿Como se llama el personaje que ayudó a Tony Stark a crear su primera armadura?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "a") {
        alert("¡Respuesta correcta! Has superado el nivel 8.");
        Nivel9();
    } else {
        alert("¡No sabes, que lastima!.");
        ReiniciarJuego();
    }
}

function Nivel9() {
    var opciones = ["a) Para escapar de un cueva", "b) Para vengarse", "c) Para pelear con sus delincuentes"];
    var respuesta = prompt("¿Porque o para qué Tony Stark crea su primera armadura?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "a") {
        alert("¡Respuesta correcta! Has superado el nivel 9.");
        Nivel10();
    } else {
        alert("Lo debias saber .");
        ReiniciarJuego();
    }
}

function Nivel10() {
    var opciones = ["a) Jane Foster", "b) Pepper", "c) Brynhildr"];
    var respuesta = prompt("El nomnbre de la esposa de Tony Stark?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "b") {
        alert("¡Felicidades has completado todos los retos y conoces de Tony Stark!.");
        Nivel10();
    } else {
        alert("¡Qué pena, no sabes!.");
        ReiniciarJuego();
    }
}

function ReiniciarJuego() {
    if (confirm("¿Deseas reiniciar el juego?")) {
        IniciarJuego();
    }
}

IniciarJuego();