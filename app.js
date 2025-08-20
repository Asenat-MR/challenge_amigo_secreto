
let amigos = [];

function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value;

    //Validar la entrada
    if (nombre == ''){
        alert("Por favor, inserte un nombre.");
        return
    }

    //Actualizar el array de amigos
    amigos.push(nombre);
    console.log(amigos);

    //Limpiar el campo de entrada
    document.querySelector('#amigo').value = '';

    actualizarListaAmigos();
}



function actualizarListaAmigos(){
    //console.log("actualizar lista");

    //Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for (let nombre of amigos){
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li); //Agregar elementos a la lista
    }

}

function sortearAmigo(){
    //Validar que haya amigos disponibles
    if (amigos.length !== ''){
        //Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //Obtener el nombre sorteado
        let amigoSeleccionado = amigos[indiceAleatorio];
        //Mostrar el resultado
        let resultadoHTML = document.querySelector('#resultado');
        resultadoHTML.innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`;

    }else{
        alert("no existen amigos para sortear");
    }

}