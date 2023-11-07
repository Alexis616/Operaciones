function sumar() {
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    
    var c = parseInt(a)+parseInt(b)

    document.getElementById('resultado').value=c
    
}

function restar() {
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    
    var c = parseInt(a)-parseInt(b)

    document.getElementById('resultado').value=c
}

function multiplicacion() {
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    
    var c = parseInt(a)*parseInt(b)

    document.getElementById('resultado').value=c
}

function division() {
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    
    var c = parseInt(a)/parseInt(b)

    document.getElementById('resultado').value=c
}