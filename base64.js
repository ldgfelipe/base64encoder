import Vue from 'vue'

/////// plugin base64 se utiliza para validar usuario y contraseña o encriptar el envio de la informacion 
/////// create by: ldgframe


Vue.prototype.$superEncode=(p)=>{
////// el primer numero es el numero que veces que se encripta el codigo 
var n=Math.floor(Math.random()*9)

var encode=p;

if(n===0){
	////si es 0 se lanza nuevamente la funcion
	this.$superEncode(p);
}else{
for(var i=0;i<n;i++){
	/// se codifica tantas veces como n lo repita 
encode=btoa(encode);
}
var nu=btoa(n) /// se condifica n vecess 

encode=nu+")"+encode; /// se une cadena como respuesta 
}
	return encode ///// lanza resultado 
}

Vue.prototype.$superDecode=(p)=>{
//// decodificador 
	var divstr=p.split(")"); /// separa 
	var nves=atob(divstr[0])-1; /// decodifica n veces
	var decode=divstr[1];

	for(var n=0;n<nves;n++){
			
			decode=atob(decode);	//// decodifica n veces -1

	}
	decode=atob(decode); /// ultima decodificacion 
	return decode ///lanza resultado

}