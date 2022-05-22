const initApp = () => {
    const dropArea = document.querySelector(".nuevo-producto__arrastrar-imagen");
    const active = () => dropArea.classList.add("borde-azul");
    const inactive = () => dropArea.classList.remove("borde-azul");
    const prevents = (e) => e.preventDefault();

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
        dropArea.addEventListener(evtName, prevents);
    });

    ['dragenter', 'dragover'].forEach(evtName => {
        dropArea.addEventListener(evtName, active);
    });

    ['dragleave', 'drop'].forEach(evtName => {
        dropArea.addEventListener(evtName, inactive);
    });

    dropArea.addEventListener("drop", handleDrop);
}

document.addEventListener("DOMContentLoaded", initApp);

const handleDrop = (e) => {
    const dt = e.dataTransfer;  
    const files = dt.files;
    console.log(files);
}

// validando form

const nombreProd = document.querySelector("[data-input-nombreProd]");
const precioProd = document.querySelector("[data-input-precioProd]");
const descripcionProd = document.querySelector("[data-input-descripcionProd]");
const botonAgregar = document.querySelector("[data-button-agregar]");

const validandoCampos = () => {
    if(nombreProd.value == "") {
        alert("el nombre del producto no puede estar vacio");
    }
    if(precioProd.value == "") {
        alert("el precio del producto no puede estar vacio");
    }
    if(descripcionProd.value == "") {
        alert("la descripcion no puede estar vacia");
    }
};

botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    validandoCampos();
});