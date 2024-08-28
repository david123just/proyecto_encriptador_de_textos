// Función para encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para manejar el proceso de encriptar el texto
function encriptarTexto() {
    const inputTexto = document.querySelector('.input').value;

    if (inputTexto) {
        const textoEncriptado = encriptar(inputTexto);
        document.querySelector('.texto__encriptado').textContent = textoEncriptado;
    }
}

// Función para manejar el proceso de desencriptar el texto
function desencriptarTexto() {
    const inputTexto = document.querySelector('.input').value;

    if (inputTexto) {
        const textoDesencriptado = desencriptar(inputTexto);
        document.querySelector('.texto__encriptado').textContent = textoDesencriptado;
    }
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    const textoEncriptado = document.querySelector('.texto__encriptado').textContent;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

// Evento para los botones de encriptar y desencriptar
document.querySelector('.presentacion__boton_encriptar').addEventListener('click', encriptarTexto);
document.querySelector('.presentacion__boton_desencriptar').addEventListener('click', desencriptarTexto);

// Evento para el botón de copiar
document.querySelector('.boton__copiar').addEventListener('click', copiarTexto);
