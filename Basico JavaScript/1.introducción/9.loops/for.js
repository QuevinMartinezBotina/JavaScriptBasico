var estudiantes = ["quevin", "santiago", "carlos"];

function saludarEstudiantes(estudiante) {
    console.log("hola " + estudiante);
}

for (let index = 0; index < estudiantes.length; index++) {
    saludarEstudiantes(estudiantes[index]);
}

for (const estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

for (const key in estudiantes) {
    console.log(`${key}: ${estudiantes[key]}`);
}