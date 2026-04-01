window.addEventListener('DOMContentLoaded', () => {
    let carrito = [];
    let total = 0;

    const botones = document.querySelectorAll('.btn-comprar');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalSpan = document.getElementById('total');
    const carritoDiv = document.getElementById('carrito');
    const contador = document.getElementById('contador-carrito');
    const btnVerCarrito = document.getElementById('btn-ver-carrito');

    if (!btnVerCarrito) return;

    // Abrir/cerrar carrito
    btnVerCarrito.addEventListener('click', () => {
        carritoDiv.classList.toggle('active');
    });

    // Agregar productos
    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const nombre = btn.dataset.nombre;
            const precio = parseFloat(btn.dataset.precio);

            carrito.push({ nombre, precio });
            total += precio;

            listaCarrito.innerHTML = '';
            carrito.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.nombre} - $${item.precio}`;
                listaCarrito.appendChild(li);
            });

            totalSpan.textContent = total.toFixed(2);
            contador.textContent = carrito.length;

            // Notificación breve
            const notif = document.createElement('div');
            notif.textContent = 'Producto agregado ✅';
            notif.style.position = 'fixed';
            notif.style.top = '10px';
            notif.style.right = '50%';
            notif.style.transform = 'translateX(50%)';
            notif.style.background = '#1d3557';
            notif.style.color = 'white';
            notif.style.padding = '10px 20px';
            notif.style.borderRadius = '8px';
            notif.style.zIndex = '100000';
            document.body.appendChild(notif);
            setTimeout(() => notif.remove(), 1500);
        });
    });
});
