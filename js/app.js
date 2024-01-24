//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');

const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');



//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;



//objetos
 const datosBusqueda = {
    marca : '',
    year : '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

 }

//evenetos 
document.addEventListener('DOMContentLoaded', () =>{

   // ponemos las funciones
  mostrarAutos(autos); //muestra los autos al cargar

  //llena las opciones de años

  llenarSelect()

})
//Event listener para los selectores de busqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    
    filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year= parseInt(e.target.value);

    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    
    filtrarAuto();
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo= e.target.value;
    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    
    filtrarAuto();
})
puertas.addEventListener('change', e => {

    datosBusqueda.puertas= parseInt(e.target.value);
    filtrarAuto();
})

color.addEventListener('change', e => {

    datosBusqueda.color= e.target.value;
    // console.log(datosBusqueda) ;
    filtrarAuto();
})




//                                                     Funciones

// primera funcion 
// uso de For Each Teplate string y distrututring
function mostrarAutos(autos) {
    limpiarHTML(); 
    autos.forEach( auto => {  //iterar

        const {marca, modelo, year, transmision, precio ,color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent =  `
        ${marca} ${modelo} - ${year} - ${auto.puertas} puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `;


       //insertar en el html
        resultado.appendChild(autoHTML)
    })

    
   
}
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


// segunda funcion 
//Genera los añs del select
function llenarSelect(){
    for(let i = max; i >=  min; i--) {
        const option =  document.createElement('option');
        option.value = i;
        option.innerText = i;
        year.appendChild(option);
    }
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}


//FILTRACIONES
// funcion filtar auto
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(
        filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
//   console.log(resultado);
if(resultado.length){
    mostrarAutos(resultado);
} else {
   noResultado();
}
   
}
 
 
 // Aplica los filtros
 function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
     if(marca){
         return auto.marca === marca;
     } 
     return auto;
 }
 function filtrarYear(auto) {
    const { year } = datosBusqueda;
     if( year ){
         return auto.year === year;
     }
     return auto;
 }

 function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
     if( minimo ){
         return auto.precio >= minimo;
     }
     return auto;
 }

 function filtrarMaximo(auto) {
    const { maximo} = datosBusqueda;
     if( maximo){
         return auto.precio <= maximo;
     }
     return auto;
 }
 function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
     if( puertas ){
         return auto.puertas === puertas;
     }
     return auto;
 }

 function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
     if( transmision ){
         return auto.transmision === transmision;
     }
     return auto;
 }

 function filtrarColor(auto) {
    const { color } = datosBusqueda;
     if( color ){
         return auto.color === color;
     }
     return auto;
 }
 
 
 



