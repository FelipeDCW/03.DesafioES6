import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js"

const impuestos = new Impuestos(parseInt(prompt(`Monto Bruto Anual`)),parseInt(prompt(`Impuesto`)))
/* const impuestos = new Impuestos(100,10) */


const cliente = new Cliente(`Felipe`)
cliente.impuesto = impuestos
console.log(cliente.impuesto)

alert(`El monto a pagar del cliente ${cliente.nombre} es: ${(cliente.calcularImpuesto())}`)