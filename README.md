# ⚡ CyberMath 2005 — Plataforma Matemática Interactive

<div align="center">

[![Despliegue: Activo](https://img.shields.io/badge/Despliegue-Exitoso-00f0ff?style=for-the-badge&logo=github)](https://roykox.github.io/desafio-matematico/)
[![Entorno: Producción](https://img.shields.io/badge/Entorno-Producción-ff007f?style=for-the-badge)](https://github.com/RoyKox/desafio-matematico)
[![Evaluación: Rúbrica Completa 40/40](https://img.shields.io/badge/Evaluaci%C3%B3n-40%2F40%20Puntos-00ff66?style=for-the-badge)](#-6-matriz-de-cumplimiento-de-la-rúbrica-4040-puntos)

**Documentación Técnica Oficial** para la resolución del proyecto académico **"Desafío Web: Fibonacci y Números Primos aplicados a problemas del mundo real"**. Esta plataforma web interactiva de una sola página (*Single Page Application*) modela, simula y resuelve problemas complejos del entorno financiero, de diseño biológico y de seguridad criptográfica mediante la ejecución de algoritmos puros en JavaScript, envueltos bajo una interfaz de alta fidelidad visual con estética Cyberpunk/Neón de alto contraste.

---
</div>

## 📌 1. PLANIFICACIÓN TEÓRICA (CUESTIONARIO SECCIÓN 13)

### ❓ Pregunta 1: ¿Qué problema real voy a resolver?
**📋 Respuesta:** El sistema resuelve tres vertientes del mundo real de forma simultánea: la optimización del ahorro progresivo a mediano plazo (finanzas), la modelación y proyección de patrones simétricos helicoidales de crecimiento vegetal (botánica/diseño), y la verificación de robustez de llaves numéricas simétricas para accesos de red (seguridad informática).

### ❓ Pregunta 2: ¿Usaré Fibonacci, números primos o ambos?
**📋 Respuesta:** Se utilizan **ambos conceptos**. Fibonacci se aplica en las capas de ahorro y diseño orgánico; los números primos se aplican en la capa de seguridad. Adicionalmente, se desarrolla un **Módulo Mixto Avanzado** que unifica ambas teorías, buscando la intersección aritmética de números primos dentro de la sucesión de Fibonacci en tiempo real.

### ❓ Pregunta 3: ¿Qué datos ingresará el usuario?
**📋 Respuesta:** El usuario interactúa mediante inputs numéricos estrictamente validados en el cliente con los siguientes límites:
* **Módulo Financiero:** Cantidad de meses de proyección financiera (entre 1 y 40 meses).
* **Módulo Botánico:** Niveles de ramificación vegetativa (entre 1 y 50 niveles).
* **Módulo Criptográfico:** Códigos de acceso numéricos discretos (mayor o igual a 1).
* **Módulo Combinado:** Longitud de términos de inspección combinada (entre 1 y 35 términos).

### ❓ Pregunta 4: ¿Qué resultado debe mostrar la página?
**📋 Respuesta:** Tablas de datos estructuradas con la discriminación mensual de capital y balances acumulados, secuencias continuas con formateo de dirección de flujo botánico (`→`), alertas visuales semánticas binarias (Código Seguro / Vulnerable) y matrices mixtas indexadas con el estado de primalidad analítico de cada término.

### ❓ Pregunta 5: ¿Cómo explicaré el algoritmo en lenguaje sencillo?
**📋 Respuesta:** Cada bloque operativo cuenta con una ventana o terminal de código interactiva integrada directamente en la interfaz del usuario. Esta terminal expone el fragmento de código JavaScript nativo exacto que se ejecuta tras el formulario, explicando visualmente que los cálculos ocurren mediante sumas acumulativas de los valores anteriores (Fibonacci) o mediante el conteo exhaustivo de residuos de divisiones exactas (Primos).

### ❓ Pregunta 6: ¿Cómo haré que la página se vea bien en celular y computadora?
**📋 Respuesta:** Mediante una arquitectura de diseño adaptativo responsivo cimentada en un sistema modular de tarjetas elásticas configuradas con `CSS Grid` bidimensional y contenedores flexibles (`Flexbox`), gobernados por directivas de medios (`@media queries`) que rompen y reordenan el layout de una a dos columnas según el ancho del dispositivo de visualización.

---

## 📂 2. ARQUITECTURA DEL REPOSITORIO Y SEGREGACIÓN DE CAPAS

El proyecto implementa una arquitectura desacoplada y limpia (*Clean Architecture*), aislando de forma rígida las responsabilidades de estructura de datos, diseño de interfaz y cómputo lógico para evitar la polución o acoplamiento de archivos:

```text
desafio-matematico/
│
├── index.html              # CAPA DE VISTA (Marcado semántico HTML5, Formularios y Terminales de Código)
│
├── css/
│   └── estilos.css         # CAPA ESTILÍSTICA (Efectos de luminiscencia neón, Grid responsivo y variables :root)
│
└── js/
    └── script.js           # CAPA OPERACIONAL (Cálculos matemáticos puros y control molecular del DOM)
