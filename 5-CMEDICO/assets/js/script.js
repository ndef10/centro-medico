//crear un arreglo para radiología
const atencionesRadiologia =[
//crear un objeto por cada fila de información
{
    hora: "11:00",
    especialista: "Ignacio Schulz",
    paciente: "Francisca Rojas",
    rut: "9878782-1",
    prevision: "Fonasa",
},

{
    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-3",
    prevision: "Isapre",
},

{
    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445345-9",
    prevision: "Isapre",
},

{
    hora: "15:30",
    especialista: "Ana María Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "Fonasa",
},

{
    hora: "16.00",
    especialista: "Patricia Suazo",
    paciente: "Ramón Ulloa",
    rut: "14989389-k",
    prevision: "Fonasa",
}
];


//crear un arreglo para traumatología
const atencionesTraumatologia = [
//crear un objeto por cada fila de información    
{
    hora: "8:00",
    especialista: "María Paz Altuzarra",
    paciente: "Paula Sanchez",
    rut: "15554774-5",
    prevision: "Fonasa",
},

{
    hora: "10.00",
    especialista: "Raúl Araya",
    paciente: "Angélica Navas",
    rut: "14444147-9",
    prevision: "Isapre",
},

{
    hora: "10:30:",
    especialista: "María Arriagada",
    paciente: "Ana Klapp",
    rut: "17879423-9",
    prevision: "Isapre",
},

{
    hora: "11:00",
    especialista: "Alejandro Badilla",
    paciente: "Felipe Mardones",
    rut: "1547423-6",
    prevision: "Isapre",
},

{
    hora: "11:30",
    especialista: "Cecilia Budnik",
    paciente: "Diego Marre",
    rut: "16554741-k",
    prevision: "Fonasa",
},

 {
    hora: "12:00",
    especialista: "Arturo Cavagnaro",
    paciente: "Cecilia Mendez",
    rut: "9747535-8",
    prevision: "Isapre",
},

{
    hora: "12.30",
    especialista: "Andrés Kanacri",
    paciente: "Marcial Suazo",
    rut: "11254785-5",
    prevision: "Isapre",
},
];
//crear un arreglo para dental
const atencionesDental = [
//crear un objeto por cada fila de información    
{
    hora: "8:30",
    especialista: "Andrea Zúñiga",
    paciente: "Marcela Retamal",
    rut: "11123425-6",
    prevision: "Isapre",
},

{
    hora: "11:00",
    especialista: "María Pía Zañartu",
    paciente: "Angel Muñoz",
    rut: "9878789-2",
    prevision: "Isapre",
},

{
    hora: "11:30",
    especialista: "Scarlett Witting",
    paciente: "Mario Kast",
    rut: "7998789-5",
    prevision: "Fonasa",
},

 {
    hora: "13:00",
    especialista: "Francisco Von Teuber",
    paciente: "Karin Fernandez",
    rut: "18887662-k",
    prevision: "Fonasa",
},

{
    hora: "13:30",
    especialista: "Eduardo Viñuela",
    paciente: "Hugo Sanchez",
    rut: "17665461-4",
    prevision: "Fonasa",
},

 {
    hora: "14:00",
    especialista: "Raquel Villaseca",
    paciente: "Ana Sepúlveda",
    rut: "14441281-0",
    prevision: "Isapre",
}
]

//buscar primera y ultima atención de cada listado
const primeraAtencionRadiologia = `${atencionesRadiologia[0].paciente} - ${atencionesRadiologia[0].prevision}`
const ultimaAtencionRadiologia = `${atencionesRadiologia[atencionesRadiologia.length-1].paciente} - ${atencionesRadiologia[atencionesRadiologia.length-1].prevision}`
const primeraAtencionTraumatologia = `${atencionesTraumatologia[0].paciente} - ${atencionesTraumatologia[0].prevision}`
const ultimaAtencionTraumatologia = `${atencionesTraumatologia[atencionesTraumatologia.length-1].paciente} - ${atencionesTraumatologia[atencionesTraumatologia.length-1].prevision}`
const primeraAtencionDental = `${atencionesDental[0].paciente} - ${atencionesDental[0].prevision}`
const ultimaAtencionDental = `${atencionesDental[atencionesDental.length-1].paciente} - ${atencionesDental[atencionesDental.length-1].prevision}`

//mostrar por pantalla primera y última atención de radiología (nombre y previsión separado por guión)
document.write(`
    <div class="container">
    <h2>Radiología</h2>
    <p>La primera atención es: ${primeraAtencionRadiologia}</p>
    <p>La última atención es: ${ultimaAtencionRadiologia}</p> 
    <br>    
`        
)

//mostrar por pantalla cabecera de las tablas
let tableHeader= `
        <tr>
            <th>Hora</th>
            <th>Especialista</th>
            <th>Paciente</th>
            <th>Rut</th>
            <th>Prevision</th>
        </tr> 
`;

//recorrer el arreglo de radiología
let tableBody ="";

for (const hora of atencionesRadiologia) {
    const horaArr = Object.values(hora);
    let body = "<tr>"
    for (const prop of horaArr) {
        body += `<td>${prop}</td>`
    }
    body += "</tr>";
    
    tableBody += body    
}

//mostrar contenido de radiología en una tabla
document.write(`
    <div class="container">
    <table>
        ${tableHeader}
        ${tableBody}
    </table>
`
)

////////////////////////////////////////////////////////////
//mostrar por pantalla primera y última atención de tarumatología (nombre y previsión separado por guión)
document.write(`    
    <br>    
    <h2>Traumatología</h2>
    <p>La primera atención es: ${primeraAtencionTraumatologia}</p>
    <p>La última atención es: ${ultimaAtencionTraumatologia}</p> 
    <br>    
`        
)
//recorrer el arreglo de traumatología
let tableBody2 ="";

for (const hora of atencionesTraumatologia) {
    const horaArr = Object.values(hora);
    let body = "<tr>"
    for (const prop of horaArr) {
        body += `<td>${prop}</td>`
    }
    body += "</tr>";
    
    tableBody2 += body    
}

//mostrar contenido de traumatología en una tabla
document.write(`
    <div class="container">
    <table>
        ${tableHeader}
        ${tableBody2}
    </table>
    </div>
`
)

//mostrar por pantalla primera y última atención de dental (nombre y previsión separado por guión)
document.write(`    
    <br>    
    <h2>Dental</h2>
    <p>La primera atención es: ${primeraAtencionDental}</p>
    <p>La última atención es: ${ultimaAtencionDental}</p> 
    <br>
`        
)

//recorrer el arreglo de dental
let tableBody3 ="";

for (const hora of atencionesDental) {
    const horaArr = Object.values(hora);
    let body = "<tr>"
    for (const prop of horaArr) {
        body += `<td>${prop}</td>`
    }
    body += "</tr>";
    
    tableBody3 += body    
}

//mostrar contenido de dental en una tabla
document.write(`
    <div class="container">
    <table>
        ${tableHeader}
        ${tableBody3}
    </table>
    <br>
    <br>
    <br>
`
)


