/* ============================================================
   LSM — LÓGICA DE LA APLICACIÓN
   ============================================================

   ESTRUCTURA:
   1. Estado global (variables que la app necesita recordar)
   2. mostrarImagen()    → genera el HTML de la imagen de la seña
   3. obtenerFiltradas() → filtra señas por categoría y búsqueda
   4. dibujarFiltros()   → pinta los botones de categoría
   5. dibujarGrid()      → pinta las tarjetas en pantalla
   6. seleccionarCategoria() / cambiarTab()
   7. abrirDetalle()     → abre el panel con info completa
   8. cerrarDetalle() / cerrarDetalleBton()
   9. Favoritos          → guardar/quitar con localStorage
   10. Buscador          → filtra en tiempo real
   11. Inicio            → ejecuta todo al cargar la página

   Las señas vienen de: data/senyas.js  (SENYAS y CATEGORIAS)
   Las imágenes están en: imagenes/[id].jpg  (ej: imagenes/A.jpg)
   ============================================================ */


/* ── 1. ESTADO GLOBAL ───────────────────────────────────────
   Variables que guardan el estado actual de la app
   ---------------------------------------------------------- */

var categoriaActiva = "todos";          // categoría seleccionada en filtros
var textoBusqueda   = "";               // texto que escribe el usuario
var favoritos       = cargarFavoritos(); // lista de IDs guardados en localStorage


/* ── 2. FUNCIÓN: MOSTRAR IMAGEN DE LA SEÑA ─────────────────
   Recibe el id de la seña (ej: "A", "hola") y el tamaño en px.
   Devuelve un <img> que apunta a imagenes/[id].jpg
   ---------------------------------------------------------- */

function mostrarImagen(id, tamaño) {
  // Y y Z son PNG, el resto son JPG (incluyendo X)
  var ext = (id === "Y" || id === "Z") ? ".png" : ".jpg";

  return '<img'
    + ' src="imagenes/' + id + ext + '"'
    + ' alt="Seña ' + id + '"'
    + ' width="' + tamaño + '"'
    + ' height="' + tamaño + '"'
    + ' style="width:' + tamaño + 'px;height:' + tamaño + 'px;object-fit:contain;"'
    + '/>';
}


/* ── 3. FUNCIÓN: FILTRAR SEÑAS ──────────────────────────────
   Aplica filtro de categoría y texto de búsqueda.
   Devuelve el array de señas que cumplen ambos criterios.
   ---------------------------------------------------------- */

function obtenerFiltradas() {
  var lista = SENYAS; // empezamos con todas

  // Filtro por categoría
  if (categoriaActiva === "favoritos") {
    lista = lista.filter(function(s) {
      return favoritos.indexOf(s.id) !== -1;
    });
  } else if (categoriaActiva !== "todos") {
    lista = lista.filter(function(s) {
      return s.categoria === categoriaActiva;
    });
  }

  // Filtro por texto de búsqueda
  if (textoBusqueda !== "") {
    var texto = textoBusqueda.toLowerCase();
    lista = lista.filter(function(s) {
      return s.label.toLowerCase().indexOf(texto) !== -1
          || s.descripcion.toLowerCase().indexOf(texto) !== -1;
    });
  }

  return lista;
}


/* ── 4. FUNCIÓN: DIBUJAR FILTROS ────────────────────────────
   Pinta los botones de categoría en #contenedorFiltros.
   Marca como "activo" el botón de la categoría actual.
   ---------------------------------------------------------- */

function dibujarFiltros() {
  var contenedor = document.getElementById("contenedorFiltros");
  var html = "";

  for (var i = 0; i < CATEGORIAS.length; i++) {
    var cat    = CATEGORIAS[i];
    var activo = cat.id === categoriaActiva ? " activo" : "";

    html += '<button'
      + ' class="btn-filtro' + activo + '"'
      + ' onclick="seleccionarCategoria(\'' + cat.id + '\')">'
      + cat.label
      + '</button>';
  }

  contenedor.innerHTML = html;
}


/* ── 5. FUNCIÓN: DIBUJAR GRID ───────────────────────────────
   Genera todas las tarjetas visibles según los filtros.
   Agrupa por categoría si se muestra "todos" o "favoritos".
   ---------------------------------------------------------- */

function dibujarGrid() {
  var grid      = document.getElementById("contenedorGrid");
  var vacio     = document.getElementById("mensajeVacio");
  var totalSpan = document.getElementById("totalNum");
  var lista     = obtenerFiltradas();

  // Actualizar contador del nav
  totalSpan.textContent = lista.length;

  // Sin resultados → mensaje vacío
  if (lista.length === 0) {
    grid.innerHTML = "";
    vacio.classList.add("visible");
    return;
  }
  vacio.classList.remove("visible");

  // Agrupar señas por categoría
  var grupos = {};
  for (var i = 0; i < lista.length; i++) {
    var s = lista[i];
    if (!grupos[s.categoria]) grupos[s.categoria] = [];
    grupos[s.categoria].push(s);
  }

  var nombreSeccion = {
    abecedario: "Abecedario A – Z",
    numeros:    "Números 1 – 10",
    comunes:    "Palabras comunes"
  };

  // Mostrar títulos de sección solo en "todos" y "favoritos"
  var conTitulos = (categoriaActiva === "todos" || categoriaActiva === "favoritos");

  var html = "";
  var categorias = Object.keys(grupos);

  for (var c = 0; c < categorias.length; c++) {
    var cat   = categorias[c];
    var items = grupos[cat];

    // Título de sección (si aplica)
    if (conTitulos) {
      html += '<div class="titulo-seccion">'
            + (nombreSeccion[cat] || cat)
            + '</div>';
    }

    html += '<div class="grid">';

    for (var j = 0; j < items.length; j++) {
      var senia  = items[j];
      var esFav  = favoritos.indexOf(senia.id) !== -1;
      var delay  = (j * 0.03) + "s";

      html += '<div'
        + ' class="tarjeta tarjeta-anima"'
        + ' id="tarjeta-' + senia.id + '"'
        + ' style="animation-delay:' + delay + '"'
        + ' onclick="abrirDetalle(\'' + senia.id + '\')">'

        // Botón de favorito (marcador)
        + '<button'
        + ' class="btn-fav' + (esFav ? " guardado" : "") + '"'
        + ' onclick="alternarFavorito(event, \'' + senia.id + '\')"'
        + ' title="' + (esFav ? "Quitar de guardados" : "Guardar") + '">'
        + '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>'
        + '</button>'

        // Imagen de la seña
        + '<div class="tarjeta-mano">' + mostrarImagen(senia.id, 80) + '</div>'

        // Nombre y categoría
        + '<div class="tarjeta-nombre">' + senia.label + '</div>'
        + '<div class="tarjeta-cat">'   + senia.categoria + '</div>'

        + '</div>';
    }

    html += '</div>'; // cierra .grid
  }

  grid.innerHTML = html;
}


/* ── 6. SELECCIONAR CATEGORÍA ───────────────────────────────
   Se llama desde los botones de filtro superiores.
   ---------------------------------------------------------- */

function seleccionarCategoria(id) {
  categoriaActiva = id;
  dibujarFiltros();
  dibujarGrid();
}

/* Se llama desde la barra inferior en celular */
function cambiarTab(id, boton) {
  categoriaActiva = id;

  // Quitar activo de todos los botones del nav inferior
  var botones = document.querySelectorAll(".nav-inferior-item");
  for (var i = 0; i < botones.length; i++) {
    botones[i].classList.remove("activo");
  }
  boton.classList.add("activo");

  dibujarFiltros();
  dibujarGrid();
}


/* ── 7. FUNCIÓN: ABRIR PANEL DE DETALLE ─────────────────────
   Muestra la info completa de una seña al hacer clic en tarjeta.
   ---------------------------------------------------------- */

function abrirDetalle(id) {
  // Buscar la seña por id
  var senia = null;
  for (var i = 0; i < SENYAS.length; i++) {
    if (SENYAS[i].id === id) { senia = SENYAS[i]; break; }
  }
  if (!senia) return;

  // Nombres y clases CSS de cada dedo (para las barras de sensor)
  var nombresDedo = ["Pulgar", "Índice", "Medio", "Anular", "Meñique"];
  var clasesDedo  = ["pulgar", "indice", "medio", "anular", "menique"];

  // Construir barras de sensores
  var barras = "";
  for (var i = 0; i < senia.flex.length; i++) {
    var valor      = senia.flex[i];
    var porcentaje = Math.round((1023 - valor) / 10.23); // 0–100%
    var altura     = Math.round(porcentaje * 0.55);       // máx ~55px

    barras += '<div class="sensor-columna">'
      + '<div class="sensor-barra ' + clasesDedo[i] + '" style="height:' + altura + 'px"></div>'
      + '<div class="sensor-nombre">' + nombresDedo[i].substring(0, 3) + '</div>'
      + '<div class="sensor-valor">'  + valor + '</div>'
      + '</div>';
  }

  // Inyectar HTML en el panel
  document.getElementById("contenidoDetalle").innerHTML =

    '<div class="detalle-encabezado">'
      + '<div class="detalle-mano">' + mostrarImagen(senia.id, 110) + '</div>'
      + '<div>'
        + '<div class="detalle-titulo">' + senia.label + '</div>'
        + '<span class="detalle-etiqueta">' + senia.categoria + '</span>'
      + '</div>'
    + '</div>'

    + '<p class="detalle-descripcion">' + senia.descripcion + '</p>'

    + '<div class="detalle-consejo">'
      + '<strong>Consejo: </strong>' + senia.tips
    + '</div>'

    + '<div class="seccion-sensores">'
      + '<div class="sensores-titulo">Posición de dedos (sensor flex)</div>'
      + '<div class="barras-sensores">' + barras + '</div>'
    + '</div>';

  // Abrir el fondo oscuro con el panel
  document.getElementById("fondoDetalle").classList.add("abierto");
  document.body.style.overflow = "hidden"; // bloquear scroll del fondo
}


/* ── 8. CERRAR PANEL DE DETALLE ─────────────────────────────
   ---------------------------------------------------------- */

/* Cierra solo si se hizo clic en el fondo oscuro, no en el panel */
function cerrarDetalle(evento) {
  if (evento.target === document.getElementById("fondoDetalle")) {
    cerrarDetalleBton();
  }
}

/* Cierra siempre (botón Cerrar o tecla Escape) */
function cerrarDetalleBton() {
  document.getElementById("fondoDetalle").classList.remove("abierto");
  document.body.style.overflow = ""; // restaurar scroll
}

/* Tecla Escape para cerrar el panel */
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") cerrarDetalleBton();
});


/* ── 9. FAVORITOS ───────────────────────────────────────────
   Los ids guardados se almacenan en localStorage del navegador.
   ---------------------------------------------------------- */

function alternarFavorito(evento, id) {
  evento.stopPropagation(); // evita que abra el detalle al mismo tiempo

  var indice = favoritos.indexOf(id);
  if (indice === -1) {
    favoritos.push(id);          // añadir a favoritos
  } else {
    favoritos.splice(indice, 1); // quitar de favoritos
  }

  guardarFavoritos();
  dibujarGrid(); // redibujar para actualizar el ícono de la tarjeta
}

function cargarFavoritos() {
  var guardados = localStorage.getItem("lsm_favoritos");
  return guardados ? JSON.parse(guardados) : [];
}

function guardarFavoritos() {
  localStorage.setItem("lsm_favoritos", JSON.stringify(favoritos));
}


/* ── 10. BUSCADOR ───────────────────────────────────────────
   Filtra en tiempo real mientras el usuario escribe.
   ---------------------------------------------------------- */

document.getElementById("inputBusqueda").addEventListener("input", function() {
  textoBusqueda = this.value.trim();

  // Ocultar hero mientras se busca
  var hero = document.getElementById("seccionHero");
  hero.style.display = textoBusqueda !== "" ? "none" : "";

  dibujarGrid();
});


/* ── 11. INICIO ─────────────────────────────────────────────
   Se ejecuta una vez al cargar la página.
   ---------------------------------------------------------- */

dibujarFiltros();
dibujarGrid();