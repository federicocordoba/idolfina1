	
//CARRUSEL DE IMAGENES PARA ALISADO			
var numA = 1;
function anteriorAlisado(){
	numA++;
	if(numA>5){
		numA=1;
	}
	//var foto = document.getElementById("idFoto");
	document.getElementById("idAlisado").src = "img/alisado/alisado" + numA + ".jpg";	
}
function siguienteAlisado(){
	numA--;
	if(numA<1){
		numA=5;
	}
	//var foto = document.getElementById("idFoto");
	document.getElementById("idAlisado").src = "img/alisado/alisado" + numA + ".jpg";	
}

//CARRUSEL DE IMAGENES PARA COLOR
var numC = 1;
function anteriorColor(){
	numC++;
	if(numC>5){
		numC=1;
	}
	document.getElementById("idColor").src = "img/color/color" + numC + ".jpg";	
}
function siguienteColor(){
	numC--;
	if(numC<1){
		numC=5;
	}
	document.getElementById("idColor").src = "img/color/color" + numC + ".jpg";	
}

//CARRUSEL DE IMAGENES PARA CORTE
var numCo = 1;
function anteriorCorte(){
	numCo++;
	if(numCo>8){
		numCo=1;
	}
	document.getElementById("idCorte").src = "img/corte/corte" + numCo + ".jpg";	
}
function siguienteCorte(){
	numCo--;
	if(numCo<1){
		numCo=8;
	}
	document.getElementById("idCorte").src = "img/corte/corte" + numCo + ".jpg";	
}

//CARRUSEL DE IMAGENES PARA REFLEJOS
var numR = 1;
function anteriorReflejos(){
	numR++;
	if(numR>6){
		numR=1;
	}
	document.getElementById("idReflejos").src = "img/reflejos/reflejos" + numR + ".jpg";	
}
function siguienteReflejos(){
	numR--;
	if(numR<1){
		numR=6;
	}
	document.getElementById("idReflejos").src = "img/reflejos/reflejos" + numR + ".jpg";	
}

	
//CARRUSEL DE IMAGENES PARA ALISADO			
var numA = 1;
function anteriorAlisado(){
	numA++;
	if(numA>5){
		numA=1;
	}
	//var foto = document.getElementById("idFoto");
	document.getElementById("idAlisado").src = "img/alisado/alisado" + numA + ".jpg";	
}
function siguienteAlisado(){
	numA--;
	if(numA<1){
		numA=5;
	}
	//var foto = document.getElementById("idFoto");
	document.getElementById("idAlisado").src = "img/alisado/alisado" + numA + ".jpg";	
}

//CARRUSEL DE IMAGENES PARA COLOR
var numC = 1;
function anteriorColor(){
	numC++;
	if(numC>5){
		numC=1;
	}
	document.getElementById("idColor").src = "img/color/color" + numC + ".jpg";	
}
function siguienteColor(){
	numC--;
	if(numC<1){
		numC=5;
	}
	document.getElementById("idColor").src = "img/color/color" + numC + ".jpg";	
}

//CARRUSEL DE IMAGENES PARA CORTE
var numCo = 1;
function anteriorCorte(){
	numCo++;
	if(numCo>8){
		numCo=1;
	}
	document.getElementById("idCorte").src = "img/corte/corte" + numCo + ".jpg";	
}
function siguienteCorte(){
	numCo--;
	if(numCo<1){
		numCo=8;
	}
	document.getElementById("idCorte").src = "img/corte/corte" + numCo + ".jpg";	
}

//CARRUSEL DE IMAGENES PARA REFLEJOS
var numR = 1;
function anteriorReflejos(){
	numR++;
	if(numR>6){
		numR=1;
	}
	document.getElementById("idReflejos").src = "img/reflejos/reflejos" + numR + ".jpg";	
}
function siguienteReflejos(){
	numR--;
	if(numR<1){
		numR=6;
	}
	document.getElementById("idReflejos").src = "img/reflejos/reflejos" + numR + ".jpg";	
}

//-------------------------------------------VALIDACION DE FORMULARIO----------------------------------------------
	function enviar(){
				//VALIDAR CAMPO NOMBRE
				if(!document.nameForm.nameNombre.value){  //CONTROLA Q NO ESTE VACIO EL CAMPO
					alert('El campo Nombre no puede estar vacío!!!');
					document.nameForm.idNombre.focus();
					
					return false;
				}else{
					if(Number(document.nameForm.nameNombre.value)){  //CONTROLA Q NO SEA NUMERICO
						alert('El dato ingresado no es Valido!!!');
						document.nameForm.idNombre.focus();
						document.nameForm.idNombre.value = " ";
						return false;
					}else{
						if((document.nameForm.idNombre.value.trim().length) < 3){  //CONTROLA Q TENGA MAS DE 3 CARACTERES
							alert('El dato ingresado debe ser mayor a 3 caracteres!!!');
							document.nameForm.idNombre.focus();
							document.nameForm.idNombre.value = "";
							return false;
						}
					}
				}	
			


//VALIDAR CAMPO APELLIDO
				if(!document.nameForm.nameApellido.value){  //CONTROLA Q NO ESTE VACIO EL CAMPO
					alert('El campo Apellido no puede estar vacío!!!');
					document.nameForm.idApellido.focus();
					
					return false;
				}else{
					if(Number(document.nameForm.nameApellido.value)){  //CONTROLA Q NO SEA NUMERICO
						alert('El dato ingresado no es Valido!!!');
						document.nameForm.idApellido.focus();
						document.nameForm.idNombre.value = " ";
						return false;
					}else{
						if((document.nameForm.idApellido.value.trim().length) < 3){  //CONTROLA Q TENGA MAS DE 3 CARACTERES
							alert('El dato ingresado debe ser mayor a 3 caracteres!!!');
							document.nameForm.idApellido.focus();
							document.nameForm.idApellido.value = "";
							return false;
						}
					}
				}	
			
		//VALIDAR CAMPO EMAIL
				if(!document.nameForm.nameEmail.value){  //CONTROLA Q NO ESTE VACIO EL CAMPO
					alert('El campo Email no puede estar vacío!!!');
					document.nameForm.idEmail.focus();
					
					return false;
				}else{
					if(Number(document.nameForm.nameEmail.value)){  //CONTROLA Q NO SEA NUMERICO
						alert('El dato ingresado no es Valido!!!');
						document.nameForm.idEmail.focus();
						document.nameForm.idEmail.value = " ";
						return false;
					}else{
						if((document.nameForm.idEmail.value.trim().length) < 3){  //CONTROLA Q TENGA MAS DE 3 CARACTERES
							alert('El dato ingresado debe ser mayor a 3 caracteres!!!');
							document.nameForm.idEmail.focus();
							document.nameForm.idEmail.value = "";
							return false;
						}
					}
				}
		
		//VALIDAR CAMPO MENSAJE
				if(!document.nameForm.nameMensaje.value){  //CONTROLA Q NO ESTE VACIO EL CAMPO
					alert('El campo Mensaje no puede estar vacío!!!');
					document.nameForm.idMensaje.focus();
					return false;
				}else{
					
					//alert('Gracias por su consulta!!!');
					return true;
				}
		}