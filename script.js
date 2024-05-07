let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let painting = false;
/* Obtiene el elemento canvas y su contexto 2D, e inicializa una bandera para controlar cuándo se está pintando */

function startDraw(e) {
    painting = true;
    draw(e);
    /* Inicia el dibujo cuando el mouse presiona el canvas, y comienza a dibujar en la posición del evento */
}

function endDraw() {
    painting = false;
    ctx.beginPath();
    /* Finaliza el dibujo cuando se suelta el mouse y comienza un nuevo camino en el canvas para futuros trazos */
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    /* Dibuja en el canvas si 'painting' es true, configurando el estilo de línea y dibujando desde la última posición hasta la posición actual del mouse */
}

// Eventos para controlar el dibujo
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mousemove', draw);
/* Registra eventos de mouse para comenzar, terminar y realizar el dibujo en el canvas */
