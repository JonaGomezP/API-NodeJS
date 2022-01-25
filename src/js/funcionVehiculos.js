function consultarVehiculos(e) {

    e.preventDefault();
    fetch("http://192.168.56.1:3000/vehiculos", {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => {
            return response.json()
        })
        .then(listaUsuarios => console.log(listaUsuarios))
}