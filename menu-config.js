// ============================================================
// CONFIGURACIÓN DEL NEGOCIO — edita aquí una sola vez
// Este archivo lo usan TANTO el sistema de caja (index.html)
// COMO el menú para clientes (pedido.html), así que solo se
// edita en un lugar y se actualiza en los dos automáticamente.
// ============================================================

const NOMBRE_NEGOCIO = 'TAQUERÍA EL DIRECTOR';

// Número de WhatsApp del NEGOCIO (a donde llegan los pedidos que
// los clientes hacen desde el link del menú). Formato: código de
// país + número, sin espacios ni signos. Ej. México: 521XXXXXXXXXX
const NUMERO_NEGOCIO_WHATSAPP = '5213131003452';

// ✏️ EDITA AQUÍ: la URL pública donde publicaste pedido.html (GitHub Pages).
// Es necesaria porque en la versión de escritorio (Electron) no hay una URL
// real — así el botón de "Enviar menú" siempre manda el link correcto,
// sin importar si se usa desde la app web o desde la de escritorio.
const URL_MENU_PUBLICO = 'https://gamsistemasinteligentes.github.io/PEDCOR/pedido.html';

const MENU = {
    // Tacos chicos
    'Taco Asada Chico':       18,
    'Taco Chorizo Chico':     18,
    'Taco Mixto Chico':       18,
    // Tacos grandes
    'Taco Asada Grande':      25,
    'Taco Chorizo Grande':    25,
    'Taco Mixto Grande':      25,
    // Quesadillas
    'Quesadilla Asada':       45,
    'Quesadilla Chorizo':     45,
    'Quesadilla Mixta':       45,
    // Sincronizadas
    'Sincronizada Asada':     80,
    'Sincronizada Chorizo':   80,
    'Sincronizada Mixta':     80,
    // Doradas preparadas
    'Dorada Asada':           55,
    'Dorada Chorizo':         55,
    'Dorada Mixta':           55,
    // Bebidas
    'Refresco':               20,
    'Agua':                   35,
};
