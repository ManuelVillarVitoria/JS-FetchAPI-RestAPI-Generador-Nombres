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
    //console.log(url)

/*
    //Conectar con Ajax
    //Iniciar con XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Abrimos la conexión
    xhr.open('GET',url,true);
    //Datos e impresión del template

    xhr.onload = function() {
      
        if(this.status === 200){
            //console.log(this.responseText)
            const nombres = JSON.parse( this.responseText ) ;
               // Generar el HTML
               let htmlNombres = '<h2>Nombres Generados</h2>';
               
               htmlNombres += '<ul class="lista">';

               // Imprimir cada nombre
               nombres.forEach(function(nombre) {
                    htmlNombres += `
                              <li>${nombre.name}
                    `;
               })

               htmlNombres += '</ul>';

               document.getElementById('resultado').innerHTML = htmlNombres;
          }
     }

    //Enviar el request
    xhr.send();
*/

//Refactorizar con Fetch API
fetch(url)
    //.then(function(res){
        //return res.json();
    //})
    .then(res => res.json())
  //.then(function(data) {
    .then(data => {
        //console.log(data);

        // Generar el HTML
        let htmlNombres = '<h2>Nombres Generados</h2>';
               
        htmlNombres += '<ul class="lista">';

        // Imprimir cada nombre
        nombres.forEach(function(nombre) {
             htmlNombres += `
                       <li>${nombre.name}
             `;
        })

        htmlNombres += '</ul>';

        document.getElementById('resultado').innerHTML = htmlNombres;
    })
    //.catch(function(error){
        //console.log(error);
    //})
    .catch(error => console.log(error));
}
