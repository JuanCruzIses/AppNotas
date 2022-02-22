const fs = require('fs');
const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
const tareas = JSON.parse(tareasJson);
let argumentos = process.argv


switch (argumentos[2]) {
    case "listar" : {
        for (let i = 0; i < tareas.length; i++) {
            console.log (tareas[i].titulo + ": " + tareas[i].estado);}
    }   break;
    case "recorrer" : {tareas.forEach(function (tarea) {
        console.log(tarea)    
    })};
        break;
    case "agregar" : function agregarTarea(parametro) { 
        let tareasStringif = JSON.stringify(parametro);
        return (fs.writeFileSync('./tareas.json', tareasStringif))};
        break;
    case undefined : 
        console.log ("Atención - Tenés que pasar una acción.");
        break;
    default : console.log ("No entiendo lo que querés hacer.")
}

//Esta funcion cuando se ejecuta borra el array anterior de tareas.json
//Si esta funcion esta escrita, no deja ejecutar la funcion de "listar" ni de "recorrer"
agregarTarea([{tarea: "hola"}])
 