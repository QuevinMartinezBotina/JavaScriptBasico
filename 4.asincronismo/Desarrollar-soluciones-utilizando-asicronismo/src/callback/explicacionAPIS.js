//??Nos permite hacer peticiones a una API en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";


//?!Una explicación de como funciona la función de conexion
//??esta nos permite traer la info desde la API 
function fetchData(url_API, callback) {

    let xhttp = new XMLHttpRequest();//??referencia al objeto XMLHttpRequest

    //??le decimos que queremos hacer GET traer info, la url de la API y true = asincrono  
    xhttp.open('GET', url_API, true);

    //??debemos escuchar que esta regresando esa conexión
    xhttp.onreadystatechange = function (event) {

        //??0=no se inicializa, 1=esta cargando, 2=ya se cargo, 3=hay información, 4=se completo 
        if (xhttp.readyState === 4) {

            //?*Se pudo completar pero no correctamente 
            //??200=correcto, 400=no encontro algo,500=algo fallo 
            if (xhttp.status === 200) {

                //??1 campo el error, el 2 resultado de la API, se debe parsear la respuesta para poder ser leida
                callback(null, JSON.parse(xhttp.responseText));
            } else {

                //??aquí mandamos error si algo salio mal, y la url de la API
                const error = new Error('Error ' + url_API);
                return callback(error, null);
            }
        }
    }
    //??al final solo enviamos la solicitud
    xhttp.send();
}

//!explicación de como fucniona la petición al API
//? primero buscamos la lista de personajes
fetchData(API, (error1, data1) => {
    //? si error, matamos retornando un error
    if (error1) return console.error(error1);
    //? luego buscamos en la API el id de Rick
    fetchData(API + data1.results[0].id, (error2, data2) => {
        //? si error, matamos retornando un error
        if (error2) return console.error(error2);
        //? por ultimo la consulta a la API que contiene su dimension
        fetchData(data2.origin.url, (error3, data3) => {
            //? si error, matamos retornando un error
            if (error3) return console.error(error3);

            //? mostramos los resultados :) 
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);

            //? rutas de las peticiones en orden
            console.log(API);
            console.log(API + data1.results[0].id);
            console.log(data2.origin.url);

        });
    });
});