
let select= prompt("Hola! ¿Necesitas consejos para planificar tu fiesta? Un asesor se puede comunicar con vos...")

while (select !="si" && select != "no") {
    alert ("Por favor, ingresa si o no desde el teclado")
    select = prompt ("Para poder realizar compras, debés estár registrado... ")
}

module.exports = select