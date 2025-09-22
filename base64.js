import Vue from 'vue'

/////// plugin base64 se utiliza para validar usuario y contraseña o encriptar el envío de la información
/////// creado por: ldgframe
/////// actualizado: métodos en español con compatibilidad hacia atrás

const encriptar = (p) => {
  //// el primer número es la cantidad de veces que se encripta el código (1..8)
  const n = Math.floor(Math.random() * 8) + 1

  let encode = String(p)

  for (let i = 0; i < n; i++) {
    /// se codifica tantas veces como n lo indique
    encode = btoa(encode)
  }
  const nu = btoa(String(n)) /// se codifica n

  return `${nu})${encode}` /// se une cadena como respuesta
}

const desencriptar = (p) => {
  //// decodificador
  const divstr = String(p).split(')') /// separa
  const nVeces = Number(atob(divstr[0])) /// decodifica cantidad de veces
  let decode = divstr[1]

  for (let i = 0; i < nVeces; i++) {
    decode = atob(decode) //// decodifica n veces
  }
  return decode /// lanza resultado
}

// Métodos principales en español
Vue.prototype.$superEncriptar = encriptar
Vue.prototype.$superDesencriptar = desencriptar

// Compatibilidad con los nombres en inglés existentes
Vue.prototype.$superEncode = encriptar
Vue.prototype.$superDecode = desencriptar
