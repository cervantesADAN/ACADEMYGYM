document.querySelector('#enviar').addEventListener('click', guardarDatosPersonas);
imprimirTabla();

function guardarDatosPersonas() {
    var guardarNombre = document.querySelector('#nombre').value,
        guardarApellido = document.querySelector('#apellido').value,
        guardarEdad = document.querySelector('#Edad').value,
        guardarFech_Nac = document.querySelector('#fecha_Nac').value,
        guardarGenero = document.querySelector('#select_Genero').value,
        guardarTelefono = document.querySelector('#telefono').value,
        guardarId = document.querySelector('#identificación').value,
        guardarCiudad = document.querySelector('#ciudad').value,
        guardarBarrio = document.querySelector('#barrio').value,
        guardarObjetivo = document.querySelector('#objetivo').value,
        guardarCorreo = document.querySelector('#Correo_elec').value,
        guardarPeso = document.querySelector('#Peso').value,
        guardarObservaciones = document.querySelector('#Observaciones').value;

        agregarDatosPersonas(guardarNombre, guardarApellido, guardarEdad, guardarFech_Nac, guardarGenero, guardarTelefono, guardarId, guardarCiudad, guardarBarrio, guardarObjetivo, guardarCorreo, guardarPeso, guardarObservaciones)
        imprimirTabla();
}

function imprimirTabla() {
    var lista = obtenerListaPersonas(),
    tbody = document.querySelector('#tablaPersonas tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < lista.length; i++) {
        var row = tbody.insertRow(i),
            nombreCelda = row.insertCell(0),
            apellidosCelda = row.insertCell(1);
            EdadCelda = row.insertCell(2);
            fech_NacCelda = row.insertCell(3);
            generoCelda = row.insertCell(4);
            telefonoCelda = row.insertCell(5);
            IdCelda = row.insertCell(6);
            ciudadCelda = row.insertCell(7);
            barrioCelda = row.insertCell(8);
            objetivoCelda = row.insertCell(9);
            correoCelda = row.insertCell(10);
            pesoCelda = row.insertCell(11);
            observacionesCelda = row.insertCell(12);

            nombreCelda.innerHTML = lista[i].name;

    }
}