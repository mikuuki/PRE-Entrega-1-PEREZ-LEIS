let nombre = prompt("Ingresá tu nombre")
alert(nombre + " estamos revisando tus gastos...")
let deuda = 320850
alert(nombre + " tenes saldo pendiente total $" + deuda)
alert("Para regularizar tu mora, te brindamos los siguientes medios de pago")
let pago = prompt("¿Podes CANCELAR o CUOTAS?")
if (pago == "CUOTAS") {
    alert("Tenés hasta 6 cuotas fijas para abonar tu deuda")
    for (let i = 2; i <= 6; i++) {
        let resultado = deuda / i;
        alert("Son  " + i + " CUOTAS FIJAS de $" + resultado)
    }
    let cuotas = prompt("¿Cuantas cuotas abonas?")
    let totalCuotas = deuda/cuotas
    alert("Abonas en " + cuotas + " CUOTAS FIJAS de $" + totalCuotas)
    confirm("Confirmación del acuerdo")
    let datos = prompt("Ingresar Teléfono o E-mail para el envio del acuerdo")
    alert("Acuerdo enviado")
} else if (pago == "CANCELAR") {
    alert("Cancelación sin intereses por $" + deuda/2 + " en el plazo de 24hs por CBU")
    confirm("Confirmación del acuerdo")
    let datos = prompt("Ingresar Teléfono o E-mail para el envio del acuerdo")
    alert("Acuerdo enviado")
} else {
        
let pagoMinimo = Number (prompt ("¿Con cuanto empezas a abonar?"))
function restar(primerNumero, segundoNumero) {
    return primerNumero - segundoNumero;
}
alert ("Abonas $" + pagoMinimo + " parciales y restante de $" + restar(deuda, pagoMinimo) + " con nuevo vto 10/mes para completar")
confirm("Confirmación del acuerdo")
    let datos = prompt("Ingresar Teléfono o E-mail para el envio del acuerdo")
    alert("Acuerdo enviado a " + datos)
}


