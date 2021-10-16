/* 2️⃣ Convierte el siguiente código en una función, pero, cambiando 
cuando sea necesario las variables constantes por parámetros y 
argumentos en una función: 

const firstname = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstname + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function user(firstname, lastname, nickname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.nickname = nickname;

    var fullname = firstname + " " + lastname;

    return console.log("Name: " + fullname + ", Pero prefiero: " + nickname);
}

var user = new user("Quevin", "Martinez", "Lokedrox");