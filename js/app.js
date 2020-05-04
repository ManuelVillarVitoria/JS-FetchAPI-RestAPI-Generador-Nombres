document.querySelector('#generar-nombre').addEventListener('submit',cargarNombres);

//LLamado a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();
    //console.log('SI');

    //Leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    //console.log(origenSeleccionado)

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'https://uinames.com/api/?';
    //Si hay origen agregarlo a la URL
    if(origenSeleccionado !== '') {
        url+= 'region=${origenSeleccionado}&';
    }
     //Si hay genero agregarlo a la URL
    if(generoSeleccionado !== '') {
        url+= 'gender=${generoSeleccionado}&';
    }
     //Si hay cantidad agregarlo a la URL
     if(cantidad !== '') {
        url+= 'amount=${cantidad}&';
    }
    console.log(url)
  
}