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