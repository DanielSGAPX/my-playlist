const myPlaylist = [
    {
titulo: "Mi primera línea de código",
url: "https://youtu.be/IC4c_XOCDGw?si=3DLPkQ6Oqy0zyran",
resumen: " habla brevemente de el capitulo 0 de la carrera de software dev de apx",
        tags: ["apx", "javascrip", "discord"],
        visto: true,
        dificultad: 1
    },
    {
        titulo: "Usando AI para programar profesionalmente",
        url: "https://youtu.be/ZjwMQkherN4?si=FJtDfb88c3Pfuu3j",
        resumen: "En este video vamos a resolver un problema de código bastante simple en apariencia pero vamos a esforzarnos en avanzar de metódica y dejarle a la AI lo que hace bastante bien",
        tags: ["ia", "javascrip", "coding"],
        visto: true,
        dificultad: 2
    },
    {
        titulo: "¿Por qué uso mac?",
        url: "https://youtu.be/iQeMY2Qj80U?si=eVSr9C5VN5bfuRbF",
        resumen: "en este video nos da su punto de vista por el cual prefiere mac",
        tags: ["apple", "coding", "fyp",],
        visto: true,
        dificultad: 1,
    },
    {
        titulo: "Datos de entrada",
        url: "https://youtu.be/9_0-UXCx28U?si=lrfv19x-izp3sEDs",
        resumen:"en este video se habla de los conceptos fundamentales a la hora de empezar a programar y entener software",
        tags: ["javascrip", "coding", "fyp"],
        visto: true,
        dificultad: 3,
    },
    {
        titulo: "No aprendas a programar antes de saber esto",
        url: "https://youtu.be/ULMzBlsBeNw?si=BKqPL4r8iUqy5w1q",
        resumen: " en este video da los primeros pasos ideales a la hora de programar",
        tags: ["programar", "coding", "javascrip"],
        visto: true,
        dificultad: 1,
    },

];
console.log("cantidad de videos de ", myPlaylist.length);
console.log("primer video - titulo:", myPlaylist[0].titulo);
console.log("primer video - url:", myPlaylist[0].url);
console.log("primer video - resumen:", myPlaylist[0].resumen);

console.log("ultimo video - titulo:", myPlaylist[4].titulo);
console.log("ultimo video - url:", myPlaylist[4].url);
console.log("ultimo video - resumen:", myPlaylist[4].resumen);
