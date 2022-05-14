export const datosUsuario = () => fetch('https://veracristian89.github.io/AluraGeekDB/db/admin.json')
    .then(response => response.json())