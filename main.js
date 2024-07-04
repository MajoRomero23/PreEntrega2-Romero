let nombreCliente = prompt ('Hola que tal, por favor ingresa tu nombre');
alert ("Hola "+nombreCliente+" muchas gracias por visitar nuestro cine");

let peliculaId = '';
let cantidadBoletos=0;
let seguirComprando = false;
let precioPagar = 0; 
let cantidadTotal=0;

//array con id de películas y su sinópsis
const peliculas = [
    {id: 1, nombre: "Intensamente", sinopsis: "Sinópsis: La película de Disney y Pixar INTENSA-MENTE 2 regresa a la mente de la recién adolescente Riley justo cuando el cuartel general está sufriendo una repentina demolición para hacer sitio a algo totalmente inesperado: ¡Nuevas emociones! Alegría, Tristeza, Furia, Temor y Desagrado, que llevan mucho tiempo llevando a cabo una operación exitosa, no están seguros de cómo sentirse cuando aparece Ansiedad. Y parece que no está sola"},
    {id: 2, nombre: "Mi villano favorito", sinopsis: "Sinópsis: Gru, Lucy, Margo, Edith y Agnes le dan la bienvenida a un nuevo miembro a la familia, Gru Jr., quien está decidido a atormentar a su papá. Gru se enfrenta a un nuevo némesis llamado Maxime Le Mal y su novia Valentina, y la familia se ve obligada a huir"},
    {id: 3, nombre: "Bad Boys: Hasta la Muerte", sinopsis: "Sinópsis: Este verano, los chicos malos favoritos del mundo están de regreso con su icónica mezcla de vertiginosa acción y escandalosa comedia, pero esta vez con un giro: los detectives favoritos de Miami son fugitivos."},
    ];

//areas de la sala con id, nombres y precios
const areaSala = [
    {id: 1, nombre: "Frente a la pantalla", precio: 200},
    {id: 2, nombre: "En el centro de la sala", precio: 300},
    {id: 3, nombre: "Al fondo de la sala", precio: 400},
    ];
    
do {
    do {
        peliculaId = parseInt(prompt("Qué película deseas ver el día de hoy?  \n 1: Intensamente 2  \n 2: Mi villano favorito 4  \n 3:Bad Boys:Hasta la Muerte"));
        if(![1,2,3].includes(peliculaId)){ 
            alert("Por favor ingresa una película válida (1,2 o 3)");
        }
    } while (![1,2,3].includes(peliculaId));    

    let peliculaSeleccionada = peliculas.find(movie => movie.id === peliculaId);
    alert("Sinópsis: " + peliculaSeleccionada.sinopsis);

do {
    cantidadBoletos = parseInt(prompt("Ya seleccionaste tu película, ¿Cuántos boletos deseas comprar?"));
} while (isNaN(cantidadBoletos)|| cantidadBoletos < 1 || cantidadBoletos >= 10);

do {
    areaSalaId = parseInt(prompt("¿En qué área de la sala deseas ubicarte durante tu película? \n 1: Frente a la pantalla \n 2: En el centro de la sala \n 3: Al fondo de la sala"));
    if(![1,2,3].includes(areaSalaId)){ 
        alert("Por favor selecciona un área válida (1,2 o 3)");
    }
} while (![1,2,3].includes(areaSalaId));  

let areaSeleccionada = areaSala.find(areas => areas.id === areaSalaId);
console.log (areaSeleccionada);


let precioBoletos = areaSeleccionada.precio * cantidadBoletos;
precioPagar += precioBoletos;
cantidadTotal += cantidadBoletos;

seguirComprando = confirm('¿Deseas comprar entradas para otra película?');

} while (seguirComprando);

alert('El total a pagar es: $'+ precioPagar +' por ' + cantidadTotal + ' boletos. ');

