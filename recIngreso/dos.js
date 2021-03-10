//*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
//nombre carrera("Quimica";"Fisica";"Sistemas")
//sexo (masculino - femenino - no binario)
//cantidad de materias(entre 1 y 5)
//Nota promedio (entre 0 y 10)
//edad (validar)
//se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
//b) El nombre de la alumna mas joven.
//c) Porcentaje de estudiantes que estudia cada carrera.
//d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.//*
function mostrar()
{
    // declaracion de variables
    let carrera;
    let cantmaterias;
    let notaprom;
    let edad;
    let nommejorprom;
    let flagprom = 1;
    let mayorprom = 0;
    let nombre;
    let flagfem = 1;
    let menoredad = 0;
    let nombremenorfem;
    let contquim = 0;
    let contfis = 0;
    let contsist = 0;
    let contalumnos = 0;
    let flagquim = 1;
    let flagfis = 1;
    let flagsist = 1;
    let porcentajequim;
    let porcentajefis;
    let porcentajesist;
    let flagestu = 1;
    let mayorcantidaddematerias = 0;
    let nombremasmaterias;
    let edadmasmaterias;
    
    for(let i = 0; i < 5; i++){
    nombre =  prompt("Ingrese su nombre:");
    while(!(isNaN(nombre))){
    nombre = prompt("Dato inválido. Ingrese su nombre:");
    }
    carrera = prompt("ERROR. ingrese el nombre de la carrera (química,física, sistemas):").toLowerCase();

    sexo = prompt("Ingrese su sexo(masculino(m), femenino(f) o no binario(n)):").toLowerCase();

    cantmaterias = parseInt(prompt("Ingrese la cantidad de materias(entre 1 y 5)"));
    
    notaprom = parseInt(prompt("Ingrese la nota promedio(entre 0 y 10"));
    
    edad = parseInt(prompt("Ingrese su edad:"));
    while(!(edad>0) ){
    edad = parseInt(prompt("Dato inválido. Ingrese su edad:"));
    
    
    if(flagprom || (carrera == "física" && notaprom>mayorprom)){
        mayorprom = notaprom;
        nommejorprom = nombre;
    }
    
    if(flagfem || (sexo == "f" && menoredad<edad)){
        menoredad = edad;
        nombremenorfem = nombre;
    }
    
    if(edad > 0){
        contalumnos++;
    }
    
    if(flagquim || carrera == "química"){
        contquim++;
        flagquim = 0;
    
    }else if(flagfis || carrera =="física"){
        contfis++;
        flagfis = 0;
    }else if(flagsist || carrera == "sistemas"){
        contsist++;
        flagsist = 0;
    }
    if(carrera != "química"){
    
    if(flagestu || cantmaterias>mayorcantidaddematerias){
        mayorcantidaddematerias = cantmaterias;
        nombremasmaterias = nombre;
        edadmasmaterias = edad;
    }
    }
    }
    porcentajequim = contquim*100/contalumnos;
    porcentajefis = contfis*100/contalumnos;
    porcentajesist = contsist*100/contalumnos;
    
    if(flagprom){
        console.log("No existe el alumno con mayor promedio en física" + "<br>");
    }else{
        console.log("El nombre del alumno con mejor promedio en física es:" + nommejorprom + "<br>");
    }
    if(flagfem){
        console.log("No existe la alumna más joven" + "<br>");
    }else{
        console.log("El nombre de la alumna más joven es:" + nombremenorfem + "<br>");
    }
    if(flagquim){
        console.log("No existe porcentaje de alumnos que estudian esa carrera" + "<br>");
    }else{
        console.log("El porcentaje de alumnos que estudian química es de: " + porcentajequim + "%" + "<br>");
    }
    if(flagfis){
        console.log("No existe porcentaje de alumnos que estudian esa carrera" + "<br>");
    }else{
        console.log("El porcentaje de alumnos que estudian física es de: " + porcentajefis+ "%" + "<br>");
    }
    if(flagsist){
        console.log("No existe porcentaje de alumnos que estudian esa carrera" + "<br>");
    }else{
        console.log("El porcentaje de alumnos que estudian sistemas es de: " + porcentajesist + "%" + "<br>");
    }
    if(flagestu){
        console.log("No existe ese estudiante" + "<br>");
    
    }else{
        console.log("El nombre del estudiante que curse más materias exceptuando la carrera de química es: " + nombremasmaterias + "y su edad es:" + edadmasmaterias + "<br>");
    }
    
    }



    
}