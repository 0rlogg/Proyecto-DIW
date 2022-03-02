let button = document.getElementById("btn");

button.addEventListener('click', function () {
    let caja = document.getElementById('caja').value;
    let img = document.getElementById('img');
    let p = document.getElementById('name');
    let info = document.getElementById('info');
    let request = new XMLHttpRequest() //forma fdacil de hacer una peticion de informacion a una api mediante una URL

    request.open("GET", `https://pokeapi.co/api/v2/pokemon/${caja}`);
    request.send();

    request.onreadystatechange = function () { // analiza cadena de texto como JSON
        if (this.readyState == 4 && this.status == 200); //4 es resquest done y 200 comando ok de get

        {
            let pokemon = JSON.parse(this.responseText);
            console.log(pokemon); //mostrara mensaje en la consola del navegador, en este caso el json de pokemon api           
            img.setAttribute("src", pokemon.sprites.front_default);
            p.textContent = pokemon.name;
        }
    }

});