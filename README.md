# UNDERGOLD — E-Commerce & Studio App

Aplicación web y móvil inspirada en la estética streetwear contemporánea de **Undergold**, desarrollada con **React**, **Vite**, **Tailwind CSS** y empaquetada para Android mediante **Capacitor**.



## Enlaces del Proyecto

* **Despliegue Web (Vercel):** [Ver aplicación en vivo](proyectofinalweb-pt6pee9si-pryect1.vercel.app)
* **Aplicación Android (.APK):** [Descargar app-debug.apk](./apk/app-debug.apk)

---

## Estructura y Secciones (3 Vistas)

1. **HOME (Landing Principal):**
   * Hero de pantalla completa con video de fondo y barra de navegación dinámica que se adapta al hacer scroll.
   * Grillas expandidas de productos destacados (*New in Pilgrimage* y *Línea de Básicos & Esenciales*) con vista previa rápida.
   * Banners editoriales de categoría (*Homme / Mujer*) y carrusel interactivo de tiendas físicas.

2. **ALL (Catálogo Completo):**
   * Vista integral del inventario con buscador en tiempo real por nombre de prenda.
   * Filtros dinámicos por categoría (*Todos*, *Camisetas*, *Buzos & Manga Larga*, *Jeans & Pantalones*).

3. **STUDIO (Concept Store & Lookbook):**
   * Galería editorial de la cápsula *Pilgrimage*.
   * Formulario interactivo para agendar citas privadas en los showrooms de Bogotá y Medellín.

---

## APIs Integradas (2 APIs en Tiempo Real)

1. **Conversión de Divisas (`Open ER-API`):**
   * Endpoint: `https://open.er-api.com/v6/latest/COP`
   * Permite alternar los precios de todo el catálogo entre **COP** (Pesos Colombianos) y **USD** (Dólares Estadounidenses) calculando la tasa de cambio en vivo.

2. **Asistente de Estilismo por Clima (`Open-Meteo API`):**
   * Endpoint: `https://api.open-meteo.com/v1/forecast`
   * Consulta la temperatura actual en tiempo real de **Bogotá**, **Medellín** o **Cartagena** y recomienda automáticamente una combinación de prendas del catálogo acorde al clima de la ciudad seleccionada.

---

## Tecnologías Utilizadas

* **Frontend:** React, Vite, Tailwind CSS, Lucide Icons
* **Móvil:** Capacitor (Android Studio / APK)
* **Despliegue:** GitHub & Vercel

---

## Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/dannasofiacruz14-byte/proyectofinalweb.git

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev