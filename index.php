<?php
// Mostrar errores (solo para pruebas)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Conexión a la base de datos (comentada para versión estática)
// include 'db.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi tienda online</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Header -->
<header>
    <h1>Mi tienda online 🛒</h1>
</header>

<!-- Botón del carrito -->
<button id="btn-ver-carrito">
    🛒 <span id="contador-carrito">0</span>
</button>

<!-- Carrito -->
<div id="carrito">
    <h3>Carrito</h3>
    <ul id="lista-carrito"></ul>
    <p>Total: $<span id="total">0</span></p>
</div>

<!-- Productos -->
<div class="container">

    <!-- Productos fijos con nombres exactos de tus imágenes -->
    <div class="producto">
        <img src="imagenes/pantalon de jean azul.jpg" alt="Jeans">
        <h3>Jeans</h3>
        <p class="precio">$25</p>
        <p class="descripcion">Azul oscuro</p>
        <button class="btn-comprar" data-nombre="Jeans" data-precio="25">Comprar</button>
    </div>

    <div class="producto">
        <img src="imagenes/adidas-4762266_1920.jpg" alt="Zapatillas">
        <h3>Zapatillas</h3>
        <p class="precio">$50</p>
        <p class="descripcion">Negro</p>
        <button class="btn-comprar" data-nombre="Zapatillas" data-precio="50">Comprar</button>
    </div>

    <div class="producto">
        <img src="imagenes/man-1283576_1920.jpg" alt="Buzo con capucha">
        <h3>Buzo con capucha</h3>
        <p class="precio">$35</p>
        <p class="descripcion">Gris con capucha</p>
        <button class="btn-comprar" data-nombre="Buzo con capucha" data-precio="35">Comprar</button>
    </div>

    <div class="producto">
        <img src="imagenes/remera negra.jpg" alt="Remera negra">
        <h3>Remera negra</h3>
        <p class="precio">$20</p>
        <p class="descripcion">Negra lisa</p>
        <button class="btn-comprar" data-nombre="Remera negra" data-precio="20">Comprar</button>
    </div>

</div>

<!-- Footer -->
<footer>
    <p>Contacto: WhatsApp 11 2345-6789</p>
    <p>
        <a href="#">Instagram</a> |
        <a href="#">Facebook</a>
    </p>
</footer>

<!-- JS -->
<script src="js/carrito.js"></script>
<script src="js/chatbot.js"></script>
</body>
</html>
