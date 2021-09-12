
const div = document.getElementById('miDiv');

const productos = [
    {nombre: 'manzana', precio:100},
    {nombre: 'sandia', precio:350},
    {nombre: 'frutilla', precio:180},
    {nombre: 'palta', precio:250},
    {nombre: 'papa', precio:120},
    {nombre: 'cebolla', precio:360}
]

function verTodos () {
    div.innerHTML = "";

    productos.forEach(prod => {
    //div.innerHTML += '<p>' + prod.nombre + ' ' + prod.precio + '</p>';
    let p = document.createElement('p');
    var texto = document.createTextNode(prod.nombre + ', ' + prod.precio);
    p.appendChild(texto);
    div.appendChild(p);

    })
};

function filtrar(num) {
    div.innerHTML = "";
    productos.forEach(prod => {
        if(prod.precio<=num){
        div.innerHTML += '<p>' + prod.nombre + ', ' + prod.precio + '</p>';
        }
    })
};

function ordenAlfabetico () {
    div.innerHTML = "";
    let arrayRes = productos.slice().sort(function(a, b){
        if (a.nombre > b.nombre) {
            return 1;
          }
          if (a.nombre < b.nombre) {
            return -1;
          }
          return 0;
    });

    arrayRes.forEach(prod => {
        div.innerHTML += '<p>' + prod.nombre + ', ' + prod.precio + '</p>';
    })
};

function ordenPrecio() {
    div.innerHTML = "";
    let arrayRes = productos.sort( (a, b) => {
        return b.precio-a.precio;
    });

    arrayRes.forEach( prod => {
        div.innerHTML += '<p>' + prod.nombre + ', ' + prod.precio + '</p>';
    });
    
};