let fecha = new Date();
let mes = fecha.getMonth();
let meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function elegirMes(array, indice){
    return array[indice];
}

let portadaContenedor = document.querySelector(".portada__contenido");

portadaContenedor.innerHTML = `<h2 class="portada__titulo">${elegirMes(meses, mes)} Promocional</h2>
<p class="portada__descripcion">Productos selecionados con 33% de descuento</p>
<form action="#consolas">
    <button class="portada__boton">Ver Consolas</button>
</form>`