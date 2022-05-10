export const listaProductos = () => {
    return fetch('http://localhost:3000/producto').then(response => {
        return response.json();
    })
}