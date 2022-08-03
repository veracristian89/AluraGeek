let fecha = new Date();
let mes = fecha.getMonth();
let meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function promocion(){
    let porcentaje;
    if(mes == 11){
        porcentaje = "50%";
    } else if(mes >= 7 & mes < 11){
        porcentaje = "40%";
    } else {
        porcentaje = "33%";
    }
    return porcentaje;
}

let portadaContenedor = document.querySelector(".portada__contenido");

portadaContenedor.innerHTML = `<h2 class="portada__titulo">${meses[mes]} Promocional</h2>
<p class="portada__descripcion">Productos selecionados con ${promocion()} de descuento</p>
<form action="#consolas">
    <button class="portada__boton">Ver Consolas</button>
</form>`