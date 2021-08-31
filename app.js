
const div = document.getElementById('miDiv');

const productos = [
    {nombre: 'manzana', precio:100},
    {nombre: 'sandia', precio:350},
    {nombre: 'frutilla', precio:180},
    {nombre: 'palta', precio:250}
]

function verTodos () {
    div.innerHTML = "";
    productos.forEach(prod => {
    div.innerHTML += '<p>' + prod.nombre + ' ' + prod.precio + '</p>';
    })
};