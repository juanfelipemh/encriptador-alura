const a = "ai";
const e = "enter";
const i = "imes";
const o = "ober";
const u = "ufat";

let textoCopiado;


function encriptar() {
    let textoHTML = document.getElementById("mensaje").value;
    let textoEncriptado;
    if (textoHTML !== "") {
        textoEncriptado = textoHTML.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textoCopiado = textoEncriptado;
    } else {
        textoEncriptado = "Ingrese un texto para encriptar";
    }
    let vista = document.getElementById("verMensaje").innerHTML = `<div class="caja-derecha">
                                                                        <div class="caja-derecha">
                                                                            <div id="verMensaje" style="padding: 25px">
                                                                                <p id="textoCopiado" class="titulo-pantalla" style="min-width: 380px; max-height: 25px; text-align: left">${textoEncriptado}</p>
                                                                            </div>

                                                                        </div>
                                                                        <div class="boton-copiar">
                                                                            <button id="copiar" onclick="copiarTexto()" class="boton">Copiar</button>
                                                                        </div>
                                                                    </div>`;
                                                                    
    return vista;
}


function desencriptar() {
    let textoHTML = document.getElementById("mensaje").value;
    let textoEncriptado;
    if (textoHTML !== "") {
        textoEncriptado = textoHTML.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
        textoCopiado = textoEncriptado;
    } else {
        textoEncriptado = "Ingrese un texto para desencriptar";
    }
    let vista = document.getElementById("verMensaje").innerHTML = `<div class="caja-derecha">
                                                                        <div class="caja-derecha">
                                                                            <div id="verMensaje" style="padding: 25px">
                                                                                <p id="textoCopiado" class="titulo-pantalla" style="min-width: 380px; max-height: 25px; text-align: left">${textoEncriptado}</p>
                                                                            </div>

                                                                        </div>
                                                                        <div class="boton-copiar">
                                                                            <button id="copiar" onclick="copiarTexto()" class="boton">Copiar</button>
                                                                        </div>
                                                                    </div>`;
    return vista;
}

function copiarTexto(){  
    navigator.clipboard
        .writeText(textoCopiado)
        .then(() => {
            if (textoCopiado.trim() == "") {
                alert("No se encontró algún texto para copiar.");
            }
        })
        .catch((error) => {
            alert("Error al copiar el texto:", error);
        });
}