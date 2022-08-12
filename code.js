// function encriptar(elemento){
// 	var palabra = document.getElementsByTagName("input")[0].value;
// 	var palabra_codificada =btoa(palabra);
// 	document.getElementById("resultado").innerHTML = palabra_codificada;

// }

// function desencriptar(elemento){
// 	var palabra = document.getElementsByTagName("input")[0].value;
// 	var palabra_descodificada = atob(palabra);
// 	document.getElementById("resultado").innerHTML = palabra_descodificada;

// }

// function Copiar() {
        
//    var content = document.getElementById('resultado');
//     content.select();
//     document.execCommand('copy');

// }

function encriptar(){

	var texto = document.getElementById("InputTexto").value.toLowerCase();
	//afecte como mayusculas como minusculas
	var txtCifrado = texto.replace(/e/igm, "enter");
	var txtCifrado = txtCifrado.replace(/o/igm, "ober");
	var txtCifrado = txtCifrado.replace(/i/igm, "imes");
	var txtCifrado = txtCifrado.replace(/a/igm, "ai");
	var txtCifrado = txtCifrado.replace(/u/igm, "ufat");
	console.log(txtCifrado);

	document.getElementById("resultado").innerHTML =txtCifrado;

}

function desencriptar(){

	var texto = document.getElementById("InputTexto").value.toLowerCase();
	//afecte como mayusculas como minusculas
	var txtCifrado = texto.replace(/enter/igm, "e");
	var txtCifrado = txtCifrado.replace(/ober/igm, "o");
	var txtCifrado = txtCifrado.replace(/imes/igm, "i");
	var txtCifrado = txtCifrado.replace(/ai/igm, "a");
	var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

	document.getElementById("resultado").innerHTML =txtCifrado;

}

function copyToClipBoard(){
	var content = document.getElementById("resultado");
	content.select();
    document.execCommand('copy');
	alert("Copiado en portapapeles!");	

}

// function encriptar (){
// 	var texto= document.getElementById("InputTexto").value.toLowerCase();
// 	let newe= texto.replace(/e/igm, "enter");
// 	let newo = texto.replace(/o/igm, "ober");
// 	let newi = texto.replace(/i/igm, "imes");  // hoberlai
// 	let newa = texto.replace(/a/igm, "ai");
// 	let newu = texto.replace(/u/igm, "ufat");
// 	let resul = [newe,newo,newi,newa,newu];
	
// 	for(let i = 0; i < resul.length; i ++){
// 		if (i[i] === resul);
// 		console.log(resul);
// 	}
	
	//document.getElementById("resultado").innerHTML = resul; 

//}
