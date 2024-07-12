document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("encryptBtn").addEventListener("click", encrypt);
    document.getElementById("decryptBtn").addEventListener("click", decrypt);
});

function encrypt() {
    const text = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    if (!isNaN(shift)) {
        document.getElementById("outputText").value = caesarCipher(text, shift);
    } else {
        alert("Por favor, ingresa un número válido para el desplazamiento.");
    }
}

function decrypt() {
    const text = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    if (!isNaN(shift)) {
        document.getElementById("outputText").value = caesarCipher(text, -shift);
    } else {
        alert("Por favor, ingresa un número válido para el desplazamiento.");
    }
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);

        // Manejo de letras mayúsculas
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
        } 
        // Manejo de letras minúsculas
        else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
        }
        
        // Si no es una letra, devolverá el carácter original
        return char;
    }).join('');
}
