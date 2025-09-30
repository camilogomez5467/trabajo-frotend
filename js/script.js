// Variables globales
let estudianteSeleccionado = null
let codigoEstudianteSeleccionado = null

function mostrarModalEliminar(nombreEstudiante, codigo) {
  const modal = document.getElementById("modal-eliminar")
  const nombreModal = document.getElementById("nombre-estudiante-modal")

  if (modal && nombreModal) {
    nombreModal.textContent = nombreEstudiante
    modal.classList.remove("oculto")
    estudianteSeleccionado = nombreEstudiante
    codigoEstudianteSeleccionado = codigo

    console.log("Modal de eliminación mostrado para:", nombreEstudiante)
  }
}

function cerrarModal() {
  const modal = document.getElementById("modal-eliminar")
  if (modal) {
    modal.classList.add("oculto")
    estudianteSeleccionado = null
    codigoEstudianteSeleccionado = null

    console.log("Modal cerrado")
  }
}

// Función para eliminar estudiante
function eliminarEstudiante() {
  if (estudianteSeleccionado) {
    console.log("eliminando estudiante:", estudianteSeleccionado, "Código:", codigoEstudianteSeleccionado)

 
    const filas = document.querySelectorAll(".tabla-estudiantes tbody tr")
    filas.forEach((fila) => {
      const nombreCelda = fila.cells[2]
      if (nombreCelda && nombreCelda.textContent === estudianteSeleccionado) {
        fila.remove()
        console.log("Fila eliminada de la tabla")
      }
    })

    alert(`Estudiante ${estudianteSeleccionado} eliminado correctamente`)
    cerrarModal()
  }
}

// Función para ver estudiante
function verEstudiante(codigo) {
  console.log("Ver estudiante con código:", codigo)
  window.location.href = "estudiante.html"
}

// Función para buscar estudiantes
function buscarEstudiantes() {
  const grado = document.getElementById("filtro-grado")?.value
  const grupo = document.getElementById("filtro-grupo")?.value
  const identificacion = document.getElementById("filtro-identificacion")?.value
  const numero = document.getElementById("filtro-numero")?.value
  const estudiante = document.getElementById("filtro-estudiante")?.value

  console.log("Buscando estudiantes con filtros:", {
    grado,
    grupo,
    identificacion,
    numero,
    estudiante,
  })

  
  alert("Búsqueda realizada. Aquí se mostrarían los resultados filtrados.")
}


function limpiarFiltros() {
  const filtroGrado = document.getElementById("filtro-grado")
  const filtroGrupo = document.getElementById("filtro-grupo")
  const filtroIdentificacion = document.getElementById("filtro-identificacion")
  const filtroNumero = document.getElementById("filtro-numero")
  const filtroEstudiante = document.getElementById("filtro-estudiante")

  if (filtroGrado) filtroGrado.value = ""
  if (filtroGrupo) filtroGrupo.value = ""
  if (filtroIdentificacion) filtroIdentificacion.selectedIndex = 0
  if (filtroNumero) filtroNumero.value = ""
  if (filtroEstudiante) filtroEstudiante.value = ""

  console.log("Filtros limpiados")
}


function mostrarFormularioNuevo() {
  console.log("Mostrando formulario de nuevo estudiante")
  window.location.href = "estudiante.html"
}


function guardarEstudiante(event) {
  if (event) {
    event.preventDefault()
  }

  const codigo = document.getElementById("codigo")?.value
  const tipoIdentificacion = document.getElementById("tipo-identificacion")?.value
  const numeroDocumento = document.getElementById("numero-documento")?.value
  const primerNombre = document.getElementById("primer-nombre")?.value
  const segundoNombre = document.getElementById("segundo-nombre")?.value
  const primerApellido = document.getElementById("primer-apellido")?.value
  const segundoApellido = document.getElementById("segundo-apellido")?.value
  const sexo = document.querySelector('input[name="sexo"]:checked')?.value
  const fechaNacimiento = document.getElementById("fecha-nacimiento")?.value
  const telefonoResidencia = document.getElementById("telefono-residencia")?.value
  const celular = document.getElementById("celular")?.value
  const correoElectronico = document.getElementById("correo-electronico")?.value
  const ciudadResidencia = document.getElementById("ciudad-residencia")?.value
  const direccionResidencia = document.getElementById("direccion-residencia")?.value
  const grado = document.getElementById("grado")?.value
  const grupo = document.getElementById("grupo")?.value

 
  if (!numeroDocumento || !primerNombre || !primerApellido || !celular || !correoElectronico) {
    alert("Por favor complete todos los campos obligatorios")
    return
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regexCorreo.test(correoElectronico)) {
    alert("Por favor ingrese un correo electrónico válido")
    return
  }

  console.log("Guardando estudiante:", {
    codigo,
    tipoIdentificacion,
    numeroDocumento,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    sexo,
    fechaNacimiento,
    telefonoResidencia,
    celular,
    correoElectronico,
    ciudadResidencia,
    direccionResidencia,
    grado,
    grupo,
  })


  alert("Estudiante guardado correctamente")
  window.location.href = "index.html"
}


window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal-eliminar")
  if (event.target === modal) {
    cerrarModal()
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cerrarModal()
  }
})


document.addEventListener("DOMContentLoaded", () => {
  console.log("Sistema QUIPUX cargado correctamente")


  const formulario = document.getElementById("formulario-estudiante")
  if (formulario) {
    formulario.addEventListener("submit", guardarEstudiante)
  }
})
