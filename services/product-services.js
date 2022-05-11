export const listaProductos = () => {
    return fetch('https://veracristian89.github.io/AluraGeekDB/db/products.json').then(response => {
        return response.json();
    })
}