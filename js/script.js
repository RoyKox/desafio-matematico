// js/script.js

/**
 * MANDATO DE LA RÚBRICA DEL DOCUMENTO:
 * Manejo estricto de eventos, captura de formularios e inyección de datos
 * utilizando de manera exclusiva llamadas del método de captura document.getElementById().
 */

/**
 * ALGORITMO 1: Plan de Ahorro Progresivo (Fibonacci)
 * Calculates monthly growing savings using simple step variables (Vector-less)
 */
function calcularAhorro() {
    let mesesInput = document.getElementById("mesesAhorro").value;
    let meses = parseInt(mesesInput);
    let contenedor = document.getElementById("resultadoAhorro");

    // Limpieza de estados anteriores
    contenedor.innerHTML = "";

    if (isNaN(meses) || meses <= 0) {
        contenedor.innerHTML = `<span class="status-msg status-error">Error: Ingrese un número entero de meses superior a cero.</span>`;
        return;
    }

    // Regla matemática de variables de control simples sin usar arrays o matrices
    let a = 0;
    let b = 1;
    let acumuladorTotal = 0;

    let renderTabla = `<table class="table-result">
                        <thead>
                            <tr><th>Período (Mes)</th><th>Cuota de Ahorro (Bs.)</th></tr>
                        </thead>
                        <tbody>`;

    for (let i = 1; i <= meses; i++) {
        let cuotaActual = b;
        acumuladorTotal += cuotaActual;

        renderTabla += `<tr><td>Mes de Ahorro ${i}</td><td>Bs. ${cuotaActual}</td></tr>`;

        // Transición pura de variables simples
        let c = a + b;
        a = b;
        b = c;
    }

    renderTabla += `</tbody></table>
                    <p style="margin-top:12px; font-weight:bold; font-size:0.95rem;">
                        Balance Neto Acumulado: <span style="color:#00f0ff; text-shadow:0 0 5px rgba(0,240,255,0.4);">Bs. ${acumuladorTotal}</span>
                    </p>`;
    
    contenedor.innerHTML = renderTabla;
}

/**
 * ALGORITMO 2: Patrón Biológico (Diseño Natural)
 * Genera el flujo lineal secuencial de crecimiento de estructuras orgánicas en la naturaleza
 */
function generarCrecimiento() {
    let niveles = parseInt(document.getElementById("nivelesNat").value);
    let contenedor = document.getElementById("resultadoNatural");

    contenedor.innerHTML = "";

    if (isNaN(niveles) || niveles <= 0) {
        contenedor.innerHTML = `<span class="status-msg status-error">Error: Ingrese un nivel válido de crecimiento.</span>`;
        return;
    }

    let a = 0;
    let b = 1;
    let cadenaSalida = "";

    for (let i = 0; i < niveles; i++) {
        if (i === 0) {
            cadenaSalida += b;
        } else {
            cadenaSalida += " → " + b;
        }
        
        let c = a + b;
        a = b;
        b = c;
    }

    contenedor.innerHTML = `<p style="font-size:0.8rem; font-weight:bold; color:#94a3b8; margin:0 0 5px 0;">Cadena de Ramificación Vegetal:</p>
                             <p style="word-break:break-all; color:#00ff66; font-weight:700; margin:0; font-family:monospace; font-size:0.95rem;">${cadenaSalida}</p>`;
}

/**
 * ALGORITMO 3: Validación de Claves Criptográficas (Números Primos)
 * Ejecuta el conteo exacto de residuos unitarios e integrales para certificar la indivisibilidad
 */
function validarClave() {
    let codigo = parseInt(document.getElementById("codigoSeg").value);
    let contenedor = document.getElementById("resultadoSeguridad");

    contenedor.innerHTML = "";

    if (isNaN(codigo) || codigo <= 0) {
        contenedor.innerHTML = `<span class="status-msg status-error">Error: Introduzca un código numérico entero positivo.</span>`;
        return;
    }

    let contadorDivisoresExactos = 0;

    // Ciclo de control clasificado paso a paso
    for (let i = 1; i <= codigo; i++) {
        if (codigo % i === 0) {
            contadorDivisoresExactos++;
        }
    }

    // Regla analítica estricta: Es primo si y solo si posee exactamente dos divisores
    if (contadorDivisoresExactos === 2) {
        contenedor.innerHTML = `<span class="status-msg status-success">✔ CÓDIGO SEGURO: El número ${codigo} es Primo. Estructura criptográfica óptima.</span>`;
    } else {
        contenedor.innerHTML = `<span class="status-msg status-error">❌ CÓDIGO VULNERABLE: El número ${codigo} posee ${contadorDivisoresExactos} divisores (No Criptográfico).</span>`;
    }
}

/**
 * SUBALGORITMO ANALÍTICO: Auxiliar de Validación para Matrices Mixtas
 * Evalúa mediante residuos la primalidad de un término individual
 */
function verificarPrimalidadTermino(num) {
    if (num <= 1) return false;
    let factores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factores++;
        }
    }
    return factores === 2;
}

/**
 * ALGORITMO 4: Módulo Combinado Avanzado
 * Genera la serie de Fibonacci paso a paso evaluando y rotulando concurrentemente la primalidad
 */
function ejecutarCombinado() {
    let terminos = parseInt(document.getElementById("cantidadComb").value);
    let contenedor = document.getElementById("resultadoCombinado");

    contenedor.innerHTML = "";

    if (isNaN(terminos) || terminos <= 0) {
        contenedor.innerHTML = `<span class="status-msg status-error">Error: Cantidad de términos no admitida.</span>`;
        return;
    }

    let a = 0;
    let b = 1;
    let estructuraLista = `<ul style="margin:0; padding-left:15px; font-size:0.85rem; list-style-type: square;">`;

    for (let i = 1; i <= terminos; i++) {
        let numeroFib = b;

        // Invocación al subalgoritmo de análisis de divisores
        let esNumeroPrimo = verificarPrimalidadTermino(numeroFib);

        if (esNumeroPrimo) {
            estructuraLista += `<li style="margin-bottom:5px; color:#ffffff;">Término ${i}: <strong style="color:#9d4edd;">${numeroFib}</strong> <span class="status-msg status-success" style="padding:1px 5px; font-size:0.75rem; margin-left:6px;">✔ Es Primo</span></li>`;
        } else {
            estructuraLista += `<li style="margin-bottom:5px; color:#94a3b8;">Término ${i}: ${numeroFib} <span style="font-size:0.75rem; color:#475569; margin-left:6px;">(Compuesto / No primo)</span></li>`;
        }

        // Rotación lineal obligatoria de variables simples de paso
        let c = a + b;
        a = b;
        b = c;
    }

    estructuraLista += `</ul>`;
    contenedor.innerHTML = estructuraLista;
}