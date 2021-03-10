Enunciado:
//*Una software factory registra la siguiente informacion de sus empleados:
//Nombre edad (validar)
//sexo (masculino - femenino - no binario)
//puesto (programador - analista - Qa)
//sueldo (entre 15000 y 70000)
//la empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) promedio de sueldos para cada puesto
//b) el sexo del que percibe el mayor sueldo
//c) el nombre del empleado femenino con mas sueldo
//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000//*
function mostrar()
{  // Declaro las variables
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let acumprogram = 0;
    let acumanalis = 0;
    let acumQa = 0;
    let promprogram;
    let promanalis; 
    let promQa;
    let contprogram = 0;
    let contanalis = 0;
    let contQa = 0; 
    let flagprogram = 1;
    let flaganalis = 1;
    let flagQa = 1;
    let seguir = "s";
    let mayorsueldo = 0;
    let flagsueldo = 1;
    let sexomayorsueldo;
    let mayorsueldofem;
    let flagfem = 1;
    let nombrefem;
    let flagnobin = 1;
    let contnobin = 0;



	do{
		nombre = prompt("ingrese su nombre");

		edad = parseInt(prompt("ingrese su edad");
		while(edad <= 17 || isNaN(edad)) {
			edad = parseInt(prompt("Error. ingrese su edad " ));
		}
		sexo = prompt("ingrese sexo femenino/ masculino/ no binario:");
		while(sexo !="femenino" && sexo != "masculino" && sexo != "no binario") {
			sexo = prompt("Error. ingrese sexo femenino/ masculino/ no binario:");
		}
		puesto = prompt("ingrese puesto programador/ analista/ Qa");
		while(puesto != "programador" && puesto != "analista" && puesto != "Qa")  {
			puesto = prompt("Error. ingrese puesto programador/ analista/ Qa");        
		}
        sueldo = parseInt(prompt("ingrese su sueldo entre 15000 y 70000 "));
		while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000) {
			sueldo = parseInt(prompt("Error. ingrese sueldo entre 15000 y 70000: " ));
		}
	 seguir = prompt("Desea continuar ingresando datos?");

	 while(seguir == "si") {
    }


    if(flagprogram || puesto == "programador"){
	    contprogram++;
	    acumprogram += sueldo;
	     flagprogram = 0;

        }else if(flaganalis || puesto == "analista"){
	     contanalis++;
	     acumanalis += sueldo;
	     flaganalis = 0;

        }else if(flagQa || puesto == "Qa"){
	     contQa++;
	     acumQa += sueldo;
	     flagQa = 0;
        }

    if(flagsueldo || (sueldo>mayorsueldo)){

	    mayorsueldo += sueldo;
	    flagsueldo = 0;
	    sexomayorsueldo = sexo;

	if(flagfem || (sueldo>mayorsueldofem && sexo == "f")){
		nombrefem = nombre;
		mayorsueldofem += sueldo;
	
	}
	
	if(flagnobin || (sexo == "n" && sueldo>=20000 && sueldo<=55000 && puesto == "programador")){
		contnobin++;

	}
	seguir = prompt("Desea seguir ingresando empleados?  s/n");
	
	
	} while (seguir == "s");
	
	
	promprogram = acumprogram/contprogram;
	promanalis = acumanalis/contanalis;
	promQa = acumQa/contQa;
	
	
	if(flagprogram){
	console.log("No hay promedio disponible en el puesto de programador." + "<br>");
	}else{
		console.log("El promedio en el puesto de programador es de:" + promprogram + "<br>");
	
	}
	if(flaganalis){
		console.log("No hay promedio disponible en el puesto de analista." + "<br>");
	}else{
		console.log("El promedio en el puesto de analista es de:" + promanalis + "<br>");
	}
	if(flagQa){
		console.log("No hay promedio disponible en el puesto de Qa." + "<br>");
	}else{
		console.log("El promedio en el puesto de Qa es de:" + promQa + "<br>");
	
	}
	if(flagsueldo){
		console.log("Ningún sexo percibe un sueldo mayor" + "<br>");
	
	}else{
		console.log("El sexo que percibe el mayor sueldo es el" + sexomayorsueldo + "<br>" );
	}
	if(flagfem){
		console.log("No existe un empleado femenino." + "<br>");
	}else{
		console.log("El nombre del empleado femenino con mayor sueldo es:" + nombrefem + "<br>");
	}
	if(flagnobin){
		console.log("No existen programadores no binarios que cobren entre 20000 y 55000" + "<br>");
	}else{
		console.log("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es: " + contnobin + "<br>");
	}
	
}