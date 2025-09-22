# codificador-base64

Plugin para "super encriptación" con Base64 para Vue.js/Nuxt (solo del lado del cliente).

Ejemplo de uso dentro de un componente Vue/Nuxt:

var cadena = "contraseña";

var encriptado = this.$superEncriptar(cadena); ///// encripta n veces en base64 y agrega prefijo

var desencriptado = this.$superDesencriptar(encriptado); ///// detecta n y desencripta

Compatibilidad: también puedes usar this.$superEncode y this.$superDecode (alias de los anteriores).

Nota: Esto solo ofusca datos. No es criptografía segura.
