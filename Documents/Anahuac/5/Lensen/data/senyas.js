/* ============================================================
   LSM — DATOS DEL DICCIONARIO
   Solo contiene el abecedario A–Z
   ============================================================ */

const SENYAS = [

  // ── ABECEDARIO ──────────────────────────────────────────────
  {
    id: "A", label: "A", categoria: "abecedario",
    descripcion: "Puño cerrado, pulgar apoyado al costado del índice.",
    flex: [900, 850, 860, 870, 840], pitch: -10, roll: 5,
    tips: "Mantén el puño firme. El pulgar no va encima, va al lado."
  },
  {
    id: "B", label: "B", categoria: "abecedario",
    descripcion: "Cuatro dedos extendidos y juntos, pulgar doblado hacia la palma.",
    flex: [850, 100, 105, 108, 110], pitch: 0, roll: 0,
    tips: "Los dedos deben estar rectos y muy juntos."
  },
  {
    id: "C", label: "C", categoria: "abecedario",
    descripcion: "Mano curvada formando una C, como si sostuvieras un vaso.",
    flex: [450, 460, 470, 460, 440], pitch: -20, roll: 0,
    tips: "Curva todos los dedos de forma pareja, incluyendo el pulgar."
  },
  {
    id: "D", label: "D", categoria: "abecedario",
    descripcion: "Índice apunta arriba, el resto de los dedos hacen un círculo con el pulgar.",
    flex: [600, 150, 700, 710, 700], pitch: 10, roll: 0,
    tips: "El índice completamente recto hacia arriba."
  },
  {
    id: "E", label: "E", categoria: "abecedario",
    descripcion: "Las yemas de los cuatro dedos tocan el pulgar, formando una E.",
    flex: [820, 830, 840, 830, 820], pitch: -5, roll: 0,
    tips: "Dobla los dedos hacia adentro, no los aprietes con fuerza."
  },
  {
    id: "F", label: "F", categoria: "abecedario",
    descripcion: "Pulgar e índice se tocan por las yemas, los otros tres dedos extendidos.",
    flex: [400, 400, 150, 160, 170], pitch: 0, roll: 5,
    tips: "El círculo que forman pulgar e índice debe ser visible."
  },
  {
    id: "G", label: "G", categoria: "abecedario",
    descripcion: "Índice y pulgar apuntan hacia el lado, como señalando horizontalmente.",
    flex: [400, 150, 800, 810, 820], pitch: 0, roll: -30,
    tips: "Gira la muñeca para que índice y pulgar apunten hacia el lado derecho."
  },
  {
    id: "H", label: "H", categoria: "abecedario",
    descripcion: "Índice y medio juntos apuntan al lado, los demás doblados.",
    flex: [400, 150, 155, 800, 820], pitch: 0, roll: -30,
    tips: "Los dos dedos deben estar bien juntos y horizontales."
  },
  {
    id: "I", label: "I", categoria: "abecedario",
    descripcion: "Solo el meñique extendido hacia arriba, el resto cerrado en puño.",
    flex: [880, 890, 895, 900, 200], pitch: 0, roll: 10,
    tips: "El meñique completamente recto. Es la seña más pequeña del abecedario."
  },
  {
    id: "J", label: "J", categoria: "abecedario",
    descripcion: "Meñique extendido, luego traza una J en el aire con movimiento.",
    flex: [880, 890, 895, 900, 200], pitch: 0, roll: 10,
    tips: "Esta seña requiere movimiento: dibuja la curva de la J de arriba hacia abajo."
  },
  {
    id: "K", label: "K", categoria: "abecedario",
    descripcion: "Índice y medio extendidos en V, pulgar entre ellos apuntando hacia arriba.",
    flex: [300, 180, 185, 880, 885], pitch: 5, roll: 0,
    tips: "El pulgar debe estar visible entre los dos dedos."
  },
  {
    id: "L", label: "L", categoria: "abecedario",
    descripcion: "Pulgar hacia arriba e índice apuntando al frente, formando una L.",
    flex: [100, 155, 880, 885, 880], pitch: -5, roll: 0,
    tips: "El ángulo entre pulgar e índice debe ser de 90 grados."
  },
  {
    id: "M", label: "M", categoria: "abecedario",
    descripcion: "Tres dedos (índice, medio y anular) doblados sobre el pulgar.",
    flex: [200, 790, 800, 810, 880], pitch: -10, roll: 5,
    tips: "El pulgar queda debajo de los tres dedos."
  },
  {
    id: "N", label: "N", categoria: "abecedario",
    descripcion: "Índice y medio doblados sobre el pulgar.",
    flex: [200, 790, 800, 880, 885], pitch: -10, roll: 5,
    tips: "Similar a la M pero solo dos dedos encima del pulgar."
  },
  {
    id: "O", label: "O", categoria: "abecedario",
    descripcion: "Todos los dedos curvados tocando el pulgar, formando una O.",
    flex: [600, 620, 630, 620, 600], pitch: -15, roll: 0,
    tips: "Todos los dedos al mismo nivel, formando un círculo uniforme."
  },
  {
    id: "P", label: "P", categoria: "abecedario",
    descripcion: "Índice apunta hacia abajo, pulgar extendido, muñeca inclinada.",
    flex: [200, 210, 850, 855, 850], pitch: 35, roll: 0,
    tips: "La muñeca se inclina hacia abajo a diferencia de otras señas."
  },
  {
    id: "Q", label: "Q", categoria: "abecedario",
    descripcion: "Índice y pulgar apuntan hacia abajo.",
    flex: [200, 210, 870, 875, 870], pitch: 45, roll: 0,
    tips: "Similar a G pero con la mano apuntando hacia abajo."
  },
  {
    id: "R", label: "R", categoria: "abecedario",
    descripcion: "Índice y medio cruzados entre sí, apuntando hacia arriba.",
    flex: [880, 200, 210, 880, 885], pitch: 5, roll: 0,
    tips: "Cruza el dedo medio por encima del índice."
  },
  {
    id: "S", label: "S", categoria: "abecedario",
    descripcion: "Puño cerrado con el pulgar cruzado por encima de los dedos.",
    flex: [700, 720, 730, 725, 710], pitch: -5, roll: 0,
    tips: "El pulgar va encima de los dedos índice y medio, no al lado."
  },
  {
    id: "T", label: "T", categoria: "abecedario",
    descripcion: "Pulgar asoma entre índice y medio, el puño está cerrado.",
    flex: [300, 750, 760, 880, 885], pitch: 0, roll: 5,
    tips: "El pulgar sobresale entre el índice y el dedo medio."
  },
  {
    id: "U", label: "U", categoria: "abecedario",
    descripcion: "Índice y medio extendidos juntos y rectos hacia arriba.",
    flex: [880, 200, 210, 880, 885], pitch: 5, roll: -5,
    tips: "A diferencia de la V, los dos dedos van juntos, no separados."
  },
  {
    id: "V", label: "V", categoria: "abecedario",
    descripcion: "Índice y medio extendidos separados formando una V.",
    flex: [880, 180, 185, 880, 885], pitch: -5, roll: 0,
    tips: "Separa bien los dedos. Es diferente a la U donde van juntos."
  },
  {
    id: "W", label: "W", categoria: "abecedario",
    descripcion: "Índice, medio y anular extendidos y separados formando una W.",
    flex: [880, 180, 182, 184, 880], pitch: 0, roll: 0,
    tips: "Tres dedos abiertos y bien separados."
  },
  {
    id: "X", label: "X", categoria: "abecedario",
    descripcion: "Índice doblado en gancho, como un dedo que llama.",
    flex: [880, 500, 880, 885, 880], pitch: 0, roll: 0,
    tips: "Solo el índice se dobla a la mitad, los demás permanecen cerrados."
  },
  {
    id: "Y", label: "Y", categoria: "abecedario",
    descripcion: "Pulgar y meñique extendidos, los demás doblados.",
    flex: [100, 870, 875, 880, 150], pitch: 0, roll: -10,
    tips: "Pulgar y meñique bien extendidos."
  },
  {
    id: "Z", label: "Z", categoria: "abecedario",
    descripcion: "Índice extendido traza una Z en el aire.",
    flex: [880, 150, 880, 885, 880], pitch: 0, roll: 0,
    tips: "Seña con movimiento: dibuja la Z de izquierda a derecha."
  },

];

/* Categorías disponibles en los filtros */
const CATEGORIAS = [
  { id: "todos",      label: "Todos" },
  { id: "abecedario", label: "Abecedario" },
];