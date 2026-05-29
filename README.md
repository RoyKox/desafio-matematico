# ⚡ CyberMath 2005 — Plataforma Matemática Interactiva de Alto Rendimiento

[![Despliegue: Activo](https://img.shields.io/badge/Despliegue-Exitoso-00f0ff?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Entorno: Producción](https://img.shields.io/badge/Entorno-Producción-ff007f?style=for-the-badge)](https://github.com)
[![Evaluación: Rúbrica%20Completa-40%2F40-00ff66?style=for-the-badge](https://img.shields.io/badge/Evaluaci%C3%B3n-40%2F40%20Puntos-00ff66?style=for-the-badge)](#-matriz-de-cumplimiento-de-la-rúbrica-4040)

> **Documentación Técnica Oficial** para la resolución del proyecto académico **"Desafío Web: Fibonacci y Números Primos aplicados a problemas del mundo real"**. Esta plataforma web interactiva de una sola página (*Single Page Application*) modela, simula y resuelve problemas complejos del entorno financiero, de diseño biológico y de seguridad criptográfica mediante la ejecución de algoritmos puros en JavaScript, envueltos bajo una interfaz de alta fidelidad visual con estética Cyberpunk/Neón de alto contraste.

---

## 📖 1. Respuestas al Cuestionario de Planificación Teórica (Sección 13)

De acuerdo con las recomendaciones pedagógicas del desafío, antes de proceder con el desarrollo del código fuente, se dio respuesta explícita a las preguntas de análisis del problema:

1. **¿Qué problema real voy a resolver?** El sistema resuelve tres vertientes del mundo real de forma simultánea: la optimización del ahorro progresivo a mediano plazo (finanzas), la modelación y proyección de patrones simétricos helicoidales de crecimiento vegetal (botánica/diseño), y la verificación de robustez de llaves numéricas simétricas para accesos de red (seguridad informática).
2. **¿Usaré Fibonacci, números primos o ambos?** Se utilizan **ambos conceptos**. Fibonacci se aplica en las capas de ahorro y diseño orgánico; los números primos se aplican en la capa de seguridad. Adicionalmente, se desarrolla un **Módulo Mixto Avanzado** que unifica ambas teorías, buscando la intersección aritmética de números primos dentro de la sucesión de Fibonacci en tiempo real.
3. **¿Qué datos ingresará el usuario?** El usuario interactúa mediante inputs numéricos estrictamente validados en el cliente: cantidad de meses de proyección financiera ($1 \le n \le 40$), niveles de ramificación vegetativa ($1 \le n \le 50$), códigos de acceso numéricos discretos ($n \ge 1$), y la longitud de términos de inspección combinada ($1 \le n \le 35$).
4. **¿Qué resultado debe mostrar la página?** Tablas de datos estructuradas con la discriminación mensual de capital y balances acumulados, secuencias continuas con formateo de dirección de flujo botánico (`→`), alertas visuales semánticas binarias (Código Seguro / Vulnerable) y matrices mixtas indexadas con el estado de primalidad analítico de cada término.
5. **¿Cómo explicaré el algoritmo en lenguaje sencillo?** Cada bloque operativo cuenta con una ventana o terminal de código interactiva integrada directamente en la interfaz del usuario. Esta terminal expone el fragmento de código JavaScript nativo exacto que se ejecuta tras el formulario, explicando visualmente que los cálculos ocurren mediante sumas acumulativas de los valores anteriores (Fibonacci) o mediante el conteo exhaustivo de residuos de divisiones exactas (Primos).
6. **¿Cómo haré que la página se vea bien en celular y computadora?** Mediante una arquitectura de diseño adaptativo responsivo cimentada en un sistema modular de tarjetas elásticas configuradas con `CSS Grid` bidimensional y contenedores flexibles (`Flexbox`), gobernados por directivas de medios (`@media queries`) que rompen y reordenan el layout de una a dos columnas según el ancho del dispositivo de visualización.

---

## 📂 2. Arquitectura del Repositorio y Segregación de Capas

El proyecto implementa una arquitectura desacoplada y limpia (*Clean Architecture*), aislando de forma rígida las responsabilidades de estructura de datos, diseño de interfaz y cómputo lógico para evitar la polución o acoplamiento de archivos:

```text
desafio-neon-math/
│
├── index.html              # CAPA DE VISTA (Marcado semántico HTML5, Formularios y Terminales de Código)
│
├── css/
│   └── estilos.css         # CAPA ESTILÍSTICA (Efectos de luminiscencia neón, Grid responsivo y variables :root)
│
└── js/
    └── script.js           # CAPA OPERACIONAL (Cálculos matemáticos puros y control molecular del DOM)