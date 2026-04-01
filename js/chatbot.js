window.addEventListener('DOMContentLoaded', () => {
    // Crear botón flotante del robot
    const botBtn = document.createElement('button');
    botBtn.textContent = "🤖 Asistente";
    botBtn.style.position = "fixed";
    botBtn.style.bottom = "20px";
    botBtn.style.right = "20px";
    botBtn.style.padding = "12px 16px";
    botBtn.style.borderRadius = "50%";
    botBtn.style.background = "#457b9d";
    botBtn.style.color = "white";
    botBtn.style.border = "none";
    botBtn.style.cursor = "pointer";
    botBtn.style.zIndex = "99999";
    document.body.appendChild(botBtn);

    // Crear chatbox
    const chatBox = document.createElement('div');
    chatBox.style.position = "fixed";
    chatBox.style.bottom = "70px";
    chatBox.style.right = "-300px";
    chatBox.style.width = "250px";
    chatBox.style.height = "300px";
    chatBox.style.background = "#1d3557";
    chatBox.style.color = "white";
    chatBox.style.borderRadius = "10px";
    chatBox.style.padding = "10px";
    chatBox.style.transition = "right 0.3s ease, opacity 0.3s ease";
    chatBox.style.display = "flex";
    chatBox.style.flexDirection = "column";
    chatBox.style.justifyContent = "space-between";
    chatBox.style.opacity = "0";

    // Contenedor de mensajes
    const messages = document.createElement('div');
    messages.style.flex = "1";
    messages.style.overflowY = "auto";
    messages.style.marginBottom = "10px";

    // Input para el usuario
    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Escribe aquí...";
    input.style.width = "100%";
    input.style.padding = "5px";
    input.style.borderRadius = "5px";
    input.style.border = "none";

    chatBox.appendChild(messages);
    chatBox.appendChild(input);
    document.body.appendChild(chatBox);

    // Abrir/cerrar chatbox
    botBtn.addEventListener('click', () => {
        const abierto = chatBox.style.right === "20px";
        chatBox.style.right = abierto ? "-300px" : "20px";
        chatBox.style.opacity = abierto ? "0" : "1";
    });

    // Función para escribir mensaje letra por letra
    function escribirMensaje(text, contenedor) {
        let i = 0;
        const span = document.createElement('div');
        contenedor.appendChild(span);

        const intervalo = setInterval(() => {
            span.textContent += text[i];
            i++;
            if(i >= text.length) clearInterval(intervalo);
            contenedor.scrollTop = contenedor.scrollHeight;
        }, 30);
    }

    // Respuestas del robot
    input.addEventListener('keypress', (e) => {
        if(e.key === "Enter" && input.value.trim() !== ""){
            const texto = input.value.trim().toLowerCase();
            escribirMensaje("Tú: " + input.value, messages);
            
            // Palabras clave
            if(texto.includes("hola")){
                escribirMensaje("Robot: ¡Hola! ¿Cómo estás?", messages);
            } else if(texto.includes("precio")){
                escribirMensaje("Robot: Los precios están en cada producto 😊", messages);
            } else if(texto.includes("envío")){
                escribirMensaje("Robot: Hacemos envíos a todo el país 🚚", messages);
            } else {
                // Respuestas aleatorias
                const respuestas = [
                    "¡Hola! ¿Cómo estás?",
                    "Genial verte por aquí 😄",
                    "Estoy listo para ayudarte con tus compras 🛒",
                    "¿Necesitás recomendaciones de productos?",
                    "¡Pregunta lo que quieras! 😉"
                ];
                const i = Math.floor(Math.random() * respuestas.length);
                escribirMensaje("Robot: " + respuestas[i], messages);
            }

            input.value = "";
        }
    });
});
